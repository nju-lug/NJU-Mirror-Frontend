import axios from 'axios';

// const URL = 'https://mirrors.nju.edu.cn/.mirrorz/tunasync.json';
const REQUEST_URL = 'http://localhost:8080/tunasync.json';

export interface SyncEntry {
  name: string,
  is_master: boolean,
  status: 'success' | 'failed',
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

export async function fetchEntries() {
  const res = await axios.get(REQUEST_URL);
  const data: Array<SyncEntry> = res.data;
  return data.map(value => ({...value, path: new URL(value.upstream).pathname}));
}
