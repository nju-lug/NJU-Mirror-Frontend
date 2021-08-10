export interface LinkItem {
  title: String,
  url: String,
  icon?: string,
}

export interface CardItem {
  title: string,
  links: Array<LinkItem>,
}

// static resource should be defined here
const esci: CardItem = {
  title: 'E-Sci Services',
  links: [
    {
      title: 'NJU GitLab',
      url: 'https://git.nju.edu.cn',
    },
    {
      title: 'NJU TeX Online',
      url: 'https://tex.nju.edu.cn',
      icon: 'el-icon-notebook-2',
    },
    {
      title: 'NJU Box',
      url: 'https://box.nju.edu.cn',
      icon: 'el-icon-upload',
    },
    {
      title: 'HPC Center',
      url: 'https://hpc.nju.edu.cn/zh/',
      icon: 'el-icon-s-data',
    },
    {
      title: 'NJU Table',
      url: 'https://table.nju.edu.cn',
      icon: 'el-icon-pie-chart',
    },
    {
      title: 'Speed Test',
      url: 'http://test.nju.edu.cn/',
      icon: 'el-icon-sort',
    },
    {
      title: 'Repo Manager',
      url: 'https://repo.nju.edu.cn/',
      icon: 'el-icon-coin',
    },
    {
      title: 'Remote Control',
      url: 'https://entry.nju.edu.cn/shterm/login',
      icon: 'el-icon-monitor',
    },
  ],
};

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

// dynamic items should be acquired by using axios and then converted to CardItem

export default <Array<CardItem>>[
  esci, friends
];
