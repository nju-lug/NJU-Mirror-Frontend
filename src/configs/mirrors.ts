import axios from 'axios';
import {serverPrefix} from './common';
import type {SyncEntry} from './common';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

interface RawEntry {
  name: string,
  is_master: boolean,
  status: 'success' | 'failed' | 'syncing',
  last_update: string,
  last_update_ts: number,
  last_started: string,
  last_started_ts: number,
  last_ended: string,
  last_ended_ts: number,
  next_schedule: string,
  next_schedule_ts: number,
  upstream: string,
  size: string,
}

interface AdditionEntry extends SyncEntry {
  inherit: string | null,
}

export async function fetchEntries(): Promise<Array<SyncEntry>> {
  const res1 = await axios.get(serverPrefix + 'tunasync.json');
  const res2 = await axios.get(serverPrefix + 'addition.json');
  const data: Array<RawEntry> = res1.data;

  const entries = data.map(value => <SyncEntry>{
    name: value.name,
    status: value.status,
    path: '/' + value.name,
    lastUpdate: value.last_update_ts > 0 ? dayjs.unix(value.last_update_ts).fromNow() : '-',
    nextUpdate: value.next_schedule_ts > 0 ? dayjs.unix(value.next_schedule_ts).fromNow() : '-',
    size: value.size == 'unknown' ? '-' : value.size,
  });

  const addition: Array<AdditionEntry> = res2.data;
  const addEntries = [];
  for (const entry of addition) {
    const o = entries.findIndex(value => value.name == entry.name);
    if (o != -1) {
      entries[o] = {...entries[o], ...entry};
      continue;
    }
    const parent = entries.find(value => entry.inherit == value.name);
    addEntries.push(<SyncEntry>{
      name: entry.name,
      status: entry.status || parent?.status || 'unknown',
      path: entry.path,
      route: entry.route,
      lastUpdate: entry.lastUpdate || parent?.lastUpdate || '-',
      nextUpdate: entry.nextUpdate || parent?.nextUpdate || '-',
      size: entry.size || '-',
    });
  }
  return [...entries, ...addEntries];
}
