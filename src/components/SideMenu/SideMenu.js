import React from 'react';

import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

import {
  SIDE_MENU,
  SIDE_MENU_SEARCH,
  SIDE_MENU_DATA,
} from '../../models/SideMenuModel';
import './SideMenu.scss';

const SideMenu = props => {
  const { SubMenu } = Menu;
  const { Sider } = Layout;

  let type = '';

  switch (props.type) {
    case 'GX':
      type = SIDE_MENU;
      break;
    case 'Search':
      type = SIDE_MENU_SEARCH;
      break;
    case 'CCDL':
      type = SIDE_MENU_DATA;
      break;
    default:
      type = SIDE_MENU;
  }

  console.log(props.type);

  const menu = type.map((item, index) => {
    const submenu = (
      <SubMenu
        key={index}
        title={
          <span>
            <Icon type="user" />
            {item.name}
          </span>
        }
      >
        {item.subMenu.map((menuItem, i) => {
          return <Menu.Item key={index + '' + i}>{menuItem.name}</Menu.Item>;
        })}
      </SubMenu>
    );

    return submenu;
  });

  return (
    <Sider
      width={200}
      style={{ background: '#fff', height: '93vh', backgroundColor: '#3464b3' }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['0']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {menu}
      </Menu>
    </Sider>
  );
};

export default SideMenu;
