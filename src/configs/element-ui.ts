import _Vue from 'vue';
import {
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  Input,
  Button,
  Table,
  TableColumn,
  Tooltip,
  Row,
  Col,
  Card,
  Container,
  Header,
  Main,
  Footer,
  Link,
  Divider,
  Backtop,
  PageHeader,
  Message,
  Tag,
  Icon
} from 'element-ui';

const components = [
  Container,
  Header,
  Main,
  Row,
  Col,
  Backtop,
  Footer,
  Divider,
  Link,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  PageHeader,
  Table,
  TableColumn,
  Input,
  Tooltip,
  Menu,
  MenuItem,
  Submenu,
  Card,
  Dialog,
  Button,
  Tag,
  Icon
];

const ElementUI = {
  install: (Vue: typeof _Vue) => {
    components.forEach(component => Vue.use(component));
    Vue.prototype.$message = Message;
  }
};

export default ElementUI;
