import axios from 'axios';
import {serverPrefix} from '@/configs';

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

export interface SyncEntry {
  name: string,
  status: 'success' | 'failed' | 'syncing',
  path: string,
  lastUpdate: string,
  nextUpdate: string,
  size: string,
}

function parse(url: string): string {
  const segments = url.split('/');
  if (url.endsWith('/')) {
    return segments[segments.length - 2];
  }
  return segments[segments.length - 1];
}


function parseSecs(seconds: number): string {
  const suffix = seconds < 0 ? '后' : '前';
  seconds = Math.abs(seconds);
  if (seconds < 60) {
    return `${seconds} s ${suffix}`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes}分钟${suffix}`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}小时${suffix}`;
  }

  const days = Math.floor(hours / 24);
  if (days < 30) {
    return `${days}天${suffix}`;
  }

  const months = Math.floor(days / 30);
  if (months < 12) {
    return `${months}个月${suffix}`;
  }

  const years = Math.floor(months / 12);
  if (years > 99) {
    return '未知';
  }
  return `${years}年${suffix}`;
}

export async function fetchEntries(): Promise<Array<SyncEntry>> {
  const res = await axios.get(serverPrefix + 'tunasync.json');
  const data: Array<RawEntry> = res.data;
  return data.map(value => <SyncEntry>{
    name: value.name,
    status: value.status,
    path: parse(value.upstream),
    lastUpdate: parseSecs(new Date().getTime() / 1000 - value.last_update_ts),
    nextUpdate: parseSecs(new Date().getTime() / 1000 - value.next_schedule_ts),
    size: value.size == 'unknown' ? '未知' : value.size,
  });
}
