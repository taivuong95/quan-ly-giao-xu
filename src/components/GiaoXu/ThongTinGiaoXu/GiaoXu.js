import React, { useState, useRef } from 'react';

import { GIAO_XU } from '../../../models/formModel';
import CustomForm from '../../Form/CustomForm';
import { Table, Tabs, Input, Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import Highlighter from 'react-highlight-words';

const data = [
  {
    key: '0',
    id: 'Jim Green',
    tenthanh: 42,
    fullname: 'London No. 1 Lake Park',
    dob: '',
    fromdate: '',
    todate: '',
    position: '',
  },
  {
    key: '1',
    id: 'Jim Green',
    tenthanh: 42,
    fullname: 'London No. 1 Lake Park',
    dob: '',
    fromdate: '',
    todate: '',
    position: '',
  },
  {
    key: '2',
    id: 'Jim Green',
    tenthanh: 42,
    fullname: 'London No. 1 Lake Park',
    dob: '',
    fromdate: '',
    todate: '',
    position: '',
  },
  {
    key: '3',
    id: 'Jim Green',
    tenthanh: 42,
    fullname: 'London No. 1 Lake Park',
    dob: '',
    fromdate: '',
    todate: '',
    position: '',
  },
  {
    key: '4',
    id: 'Jim Green',
    tenthanh: 42,
    fullname: 'London No. 1 Lake Park',
    dob: '',
    fromdate: '',
    todate: '',
    position: '',
  },
  {
    key: '5',
    id: 'Jim Green',
    tenthanh: 42,
    fullname: 'London No. 1 Lake Park',
    dob: '',
    fromdate: '',
    todate: '',
    position: '',
  },
];

const data2 = [
  {
    key: '0',
    id: 'Jim Green',
    tenthanh: 42,
    fullname: 'London No. 1 Lake Park',
    dob: '',
    fromdate: '',
    todate: '',
    position: '',
  },
  {
    key: '1',
    id: 'Jim Green',
    tenthanh: 42,
    fullname: 'London No. 1 Lake Park',
    dob: '',
    fromdate: '',
    todate: '',
    position: '',
  },
  {
    key: '2',
    id: 'Jim Green',
    tenthanh: 42,
    fullname: 'London No. 1 Lake Park',
    dob: '',
    fromdate: '',
    todate: '',
    position: '',
  },
  {
    key: '3',
    id: 'Jim Green',
    tenthanh: 42,
    fullname: 'London No. 1 Lake Park',
    dob: '',
    fromdate: '',
    todate: '',
    position: '',
  },
  {
    key: '4',
    id: 'Jim Green',
    tenthanh: 42,
    fullname: 'London No. 1 Lake Park',
    dob: '',
    fromdate: '',
    todate: '',
    position: '',
  },
  {
    key: '5',
    id: 'Jim Green',
    tenthanh: 42,
    fullname: 'London No. 1 Lake Park',
    dob: '',
    fromdate: '',
    todate: '',
    position: '',
  },
];

const { TabPane } = Tabs;

const GiaoXu = () => {
  const [searchText, setSearchText] = useState('');
  let nameRef = useRef();
  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            nameRef = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => nameRef.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  });

  const columns = [
    {
      title: 'Mã Linh Mục',
      dataIndex: 'id',
      key: 'id',
      width: '20%',
      ...getColumnSearchProps('id'),
    },
    {
      title: 'Tên Thánh',
      dataIndex: 'tenthanh',
      key: 'tenthanh',
      width: '10%',
      ...getColumnSearchProps('tenthanh'),
    },
    {
      title: 'Họ Tên',
      dataIndex: 'fullname',
      key: 'fullname',
      width: '15%',
      ...getColumnSearchProps('fullname'),
    },
    {
      title: 'Ngày Sinh',
      dataIndex: 'dob',
      key: 'dob',
      width: '15%',
      ...getColumnSearchProps('dob'),
    },
    {
      title: 'Từ Ngày',
      dataIndex: 'fromdate',
      key: 'fromdate',
      width: '15%',
      ...getColumnSearchProps('fromdate'),
    },
    {
      title: 'Đến Ngày',
      dataIndex: 'todate',
      key: 'todate',
      width: '15%',
      ...getColumnSearchProps('todate'),
    },
    {
      title: 'Chức Vụ',
      dataIndex: 'position',
      key: 'position',
      width: '10%',
      ...getColumnSearchProps('position'),
    },
  ];

  const handleSearch = (selectedKeys, confirm) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

  return (
    <>
      <CustomForm formModel={GIAO_XU} />
      <div style={{ height: '10px' }}></div>
      <div className="card-container">
        <Tabs defaultActiveKey="1" tabPosition="top" type="card">
          <TabPane tab="Tab 1" key="1">
            <Table
              columns={columns}
              dataSource={data2}
              onChange={onChange}
              scroll={{ y: 350 }}
              pagination={{ pageSize: 25 }}
            />
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            <Table
              columns={columns}
              dataSource={data}
              onChange={onChange}
              scroll={{ y: 350 }}
              pagination={{ pageSize: 25 }}
            />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default GiaoXu;
