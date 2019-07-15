import React from 'react';
import { Button, Table } from 'antd';
import { GIAO_HO } from '../../../models/formModel';
import CustomForm from '../../Form/CustomForm';

const GiaoHo = props => {
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Giáo Họ ${i}`,
    });
  }

  const columns = [
    {
      title: 'Tên Giáo Họ',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    },
    {
      title: '',
      key: 'action',
      align: 'right',
      render: () => (
        <>
          <Button icon="close-circle" style={{ margin: '0 10px' }}>
            Xóa
          </Button>
          <Button icon="edit" style={{ margin: '0 10px' }}>
            Sửa
          </Button>
        </>
      ),
    },
  ];

  const GiaoHo = <CustomForm formModel={GIAO_HO} />;

  return (
    <>
      <div
        style={{
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '5px',
        }}
      >
        <p>Nhập Giáo Họ</p>
        {GiaoHo}
      </div>
      <div
        className="table"
        style={{
          marginTop: '50px',
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '5px',
        }}
      >
        <p>Danh Sách Các Giáo Họ</p>
        <Button icon="form" size="large" style={{ marginBottom: '10px' }}>
          Danh sách Giáo Khu
        </Button>
        <Table
          pagination={{ pageSize: 25 }}
          columns={columns}
          dataSource={data}
          scroll={{ y: 350 }}
        />
      </div>
    </>
  );
};

GiaoHo.propTypes = {};

export default GiaoHo;
