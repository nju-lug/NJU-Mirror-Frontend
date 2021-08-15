import axios from 'axios';
import {serverPrefix} from './common';
import type {SyncEntry} from './common';
import moment from 'moment';

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
    lastUpdate: value.last_update_ts > 0 ? moment.unix(value.last_update_ts).fromNow() : '-',
    nextUpdate: value.next_schedule_ts > 0 ? moment.unix(value.next_schedule_ts).toNow() : '-',
    size: value.size == 'unknown' ? '-' : value.size,
  });

  const addition: Array<AdditionEntry> = res2.data;
  const addEntries = addition.map(value => {
    const parent = entries.find(value1 => value.inherit == value1.name);
    return <SyncEntry>{
      name: value.name,
      status: value.status || parent?.status || 'unknown',
      path: value.path,
      route: value.route,
      lastUpdate: value.lastUpdate || parent?.lastUpdate || '-',
      nextUpdate: value.nextUpdate || parent?.nextUpdate || '-',
      size: value.size || '-',
    };
  });
  return [...entries, ...addEntries];
}
