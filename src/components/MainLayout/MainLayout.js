import React, { useState } from 'react';

import { Layout } from 'antd';
import 'antd/dist/antd.css';
import MainContent from '../MainContent/MainContent';
import SideMenu from '../SideMenu/SideMenu';
import Header from '../Header/Header';

import { GXProvider } from '../../contexts/gxContext';
import reducer from '../../store/reducers/gxReducer';
import { GX_STATES_MODEL } from '../../models/gxStatesModel';
import GiaoXu from '../GiaoXu/ThongTinGiaoXu/GiaoXu';
import GiaoHo from '../GiaoXu/ThongTinGiaoXu/GiaoHo';

const MainLayout = props => {
  const [tab, setTab] = useState('GX');
  const [content, setContent] = useState(<GiaoXu />);

  const selectTab = data => {
    setTab(data);
  };
  let cloneContent = content;
  const selectContent = data => {
    console.log(data);
    switch (data) {
      case 'Giáo xứ':
        setContent(<GiaoXu />);
        break;
      case 'Giáo họ':
        setContent(<GiaoHo />);
        break;
      default:
        break;
    }

    // setContent(data);
  };

  return (
    <Layout>
      <Header selectItem={selectTab} />
      <Layout>
        <GXProvider reducer={reducer} initialState={GX_STATES_MODEL}>
          <SideMenu type={tab} selectContent={selectContent} />
          <MainContent>{cloneContent}</MainContent>
        </GXProvider>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
