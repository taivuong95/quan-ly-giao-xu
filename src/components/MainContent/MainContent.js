import React from 'react';

import { Layout, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

import Classes from './MainContent.module.scss';
import GiaoXu from '../GiaoXu/ThongTinGiaoXu/GiaoXu';
import GiaoHo from '../GiaoXu/ThongTinGiaoXu/GiaoHo';
const MainContent = props => {
  const { Content } = Layout;
  // const content = <>{props.content}</>;
  let content = '';

  switch (props.type) {
    case 'Giáo xứ':
      content = <GiaoXu />;
      break;
    case 'Giáo họ':
      content = <GiaoHo />;
      break;
    default:
      break;
  }

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Content className={Classes.MainContent}>{content}</Content>
    </Layout>
  );
};

export default MainContent;
