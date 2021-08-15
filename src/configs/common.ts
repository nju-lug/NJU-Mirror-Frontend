export const serverPrefix = '/configs/';

export interface DocItem {
  name: string,
  path: string,
  route: string,
}

export interface LinkItem {
  title: String,
  url: String,
  icon?: string,
}

export interface CardItem {
  title: string,
  url?: string,
  links: Array<LinkItem>,
}

export interface SyncEntry {
  name: string,
  status?: 'success' | 'failed' | 'syncing',
  path?: string,
  route?: string,
  lastUpdate?: string,
  nextUpdate?: string,
  size?: string,
}

export interface ISOUrl {
  name: string,
  url: string,
}

export interface ISOContent {
  distro: string,
  category: 'os' | 'app' | 'font',
  urls: Array<ISOUrl>
}

export interface NewsEntry {
  name: string,
  time: number,
  content: string,
}
