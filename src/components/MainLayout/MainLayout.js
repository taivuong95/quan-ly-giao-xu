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
import DSGiaoDan from '../GiaoXu/GiaoDanGiaDinh/DanhSachGiaoDan';

const MainLayout = props => {
  const [tab, setTab] = useState('GX');
  const [sideTab, setSideTab] = useState('Giáo xứ');

  const selectTab = data => {
    setTab(data);
  };
  let cloneContent = null;

  const selectContent = data => {
    setSideTab(data);
  };

  switch (sideTab) {
    case 'Giáo xứ':
      cloneContent = <GiaoXu />;
      break;
    case 'Giáo họ':
      cloneContent = <GiaoHo />;
      break;
    case 'Danh sách giáo dân':
      cloneContent = <DSGiaoDan />;
      break;
    default:
      break;
  }

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
