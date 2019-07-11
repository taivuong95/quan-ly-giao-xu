import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import MainContent from '../MainContent/MainContent';
import SideMenu from '../SideMenu/SideMenu';
import Header from '../Header/Header';

const MainLayout = props => {
  return (
    <Layout>
      <Header />
      <Layout>
        <SideMenu />
        <MainContent />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
