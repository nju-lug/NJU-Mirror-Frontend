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
  title: 'Links',
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
  ],
};

const test: CardItem = {
  title: 'Test',
  links: [
    {
      title: '草',
      url: 'www.baidu.com'
    }
  ],
};

// dynamic items should be acquired by using axios and then converted to CardItem

export default <Array<CardItem>>[
  esci, test
];
