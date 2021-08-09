import axios from 'axios';

// const URL = 'https://mirrors.nju.edu.cn/.mirrorz/tunasync.json';
const REQUEST_URL = 'http://localhost:8080/tunasync.json';

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
  const res = await axios.get(REQUEST_URL);
  const data: Array<SyncEntry> = res.data;
  return data.map(value => ({...value, path: parse(value.upstream)}));
}
