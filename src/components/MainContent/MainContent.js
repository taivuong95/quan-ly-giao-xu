import React from 'react';

import { Layout, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

import Classes from './MainContent.module.scss';

const MainContent = props => {
  const { Content } = Layout;
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content className={Classes.MainContent}>{props.children}</Content>
    </Layout>
  );
};

export default MainContent;
