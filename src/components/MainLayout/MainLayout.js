import React, { useState } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import MainContent from '../MainContent/MainContent';
import SideMenu from '../SideMenu/SideMenu';
import Header from '../Header/Header';

const MainLayout = props => {
  const [tab, setTab] = useState('GX');

  const selectTab = data => {
    setTab(data);
  };

  return (
    <Layout>
      <Header selectItem={selectTab} />
      <Layout>
        <SideMenu type={tab} />
        <MainContent />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
