import React from 'react';

import { Layout, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

import Classes from './MainContent.module.scss';
const MainContent = props => {
  const { Content } = Layout;

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Content className={Classes.MainContent}>{props.children}</Content>
    </Layout>
  );
};

export default MainContent;
