import React from 'react';

import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

const Header = props => {
  const { Header } = Layout;

  const itemOnclick = e => {
    props.selectItem(e.key);
  };

  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['GX']}
        style={{ lineHeight: '64px', textAlign: 'right' }}
      >
        <Menu.Item key="GX" onClick={itemOnclick}>
          Giáo Xứ
        </Menu.Item>
        <Menu.Item key="CCDL" onClick={itemOnclick}>
          Công Cụ Dữ Liệu
        </Menu.Item>
        <Menu.Item key="Search" onClick={itemOnclick}>
          Tìm Kiếm
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Header;
