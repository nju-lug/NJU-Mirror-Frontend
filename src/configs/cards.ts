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

const friends: CardItem = {
  title: 'Our Friends',
  links: [
    {
      title: 'IT Xia',
      url: 'https://nju.itxia.cn/',
      icon: 'el-icon-male',
    },
  ],
};

export default <Array<Promise<CardItem>>>[
  new Promise<CardItem>((resolve) => resolve(friends)),
  esci,
];
