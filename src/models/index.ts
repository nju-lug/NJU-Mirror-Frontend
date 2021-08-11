import axios from 'axios';
import {serverPrefix} from '@/configs';

export interface SyncEntry {
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
  path: string,
}

function parse(url: string): string {
  const segments = url.split('/');
  if (url.endsWith('/')) {
    return segments[segments.length - 2];
  }
  return segments[segments.length - 1];
}

export async function fetchEntries(): Promise<Array<SyncEntry>> {
  const res = await axios.get(serverPrefix + 'tunasync.json');
  const data: Array<SyncEntry> = res.data;
  return data.map(value => ({...value, path: parse(value.upstream)}));
}
