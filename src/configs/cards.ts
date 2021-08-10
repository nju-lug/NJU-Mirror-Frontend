import axios from 'axios';

export interface LinkItem {
  title: String,
  url: String,
  icon?: string,
}

export interface CardItem {
  title: string,
  links: Array<LinkItem>,
}

const esci: Promise<CardItem> = axios.get('/cards/esci.json').then(
  res => new Promise(resolve => resolve(res.data)),
);

const friends: Promise<CardItem> = axios.get('/cards/friends.json').then(
  res => new Promise(resolve => resolve(res.data)),
);

export default <Array<Promise<CardItem>>>[
  esci,
  friends,
];
