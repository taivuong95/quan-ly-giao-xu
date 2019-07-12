import React, { useState } from 'react';

import { Layout } from 'antd';
import 'antd/dist/antd.css';
import MainContent from '../MainContent/MainContent';
import SideMenu from '../SideMenu/SideMenu';
import Header from '../Header/Header';

import { GXProvider } from '../../contexts/gxContext';
import reducer from '../../store/reducers/gxReducer';
import { GX_STATES_MODEL } from '../../models/gxStatesModel';

const MainLayout = props => {
  const [tab, setTab] = useState('GX');
  const [content, setContent] = useState('Giáo xứ');

  const selectTab = data => {
    setTab(data);
  };

  const selectContent = data => {
    // CONTENT_DATA.forEach(element => {
    //   console.log(element.name);
    // });
    setContent(data);
  };

  return (
    <Layout>
      <Header selectItem={selectTab} />
      <Layout>
        <GXProvider reducer={reducer} initialState={GX_STATES_MODEL}>
          <SideMenu type={tab} selectContent={selectContent} />
          <MainContent type={content} />
        </GXProvider>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
