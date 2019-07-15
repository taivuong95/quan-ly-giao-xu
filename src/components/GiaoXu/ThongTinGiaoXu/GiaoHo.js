import React, { useState } from 'react';
import { Button, Table } from 'antd';
import { GIAO_HO } from '../../../models/formModel';
import CustomForm from '../../Form/CustomForm';

import { deepClone } from '../../../utils/fnUtils';

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Giáo Họ ${i}`,
  });
}

const GiaoHo = props => {
  const [giaohoList, setGiaoHoList] = useState(data);

  const [giaoHoName, setGiaoHoName] = useState('');

  const handleDelete = key => {
    const list = deepClone(giaohoList);

    setGiaoHoList(list.filter(item => item.key !== key));
  };

  const addGiaoHo = () => {
    const list = deepClone(giaohoList);

    const data = { key: list.length, name: giaoHoName };

    list.splice(0, 0, data);
    setGiaoHoList(list);
  };

  const onHandleInput = value => {
    setGiaoHoName(value);
  };

  const columns = [
    {
      title: 'Tên Giáo Họ',
      dataIndex: 'name',
      key: 'name',
      render: text => <>{text}</>,
    },
    {
      title: '',
      key: 'action',
      dataIndex: 'action',
      align: 'center',
      render: (text, record) =>
        giaohoList.length >= 1 ? (
          <Button type="danger" ghost onClick={() => handleDelete(record.key)}>
            Xóa
          </Button>
        ) : null,
    },
  ];

  const GiaoHo = (
    <CustomForm formModel={GIAO_HO} parrentAction={onHandleInput}>
      <Button
        icon="plus"
        size="large"
        style={{ margin: '10px 10px' }}
        onClick={addGiaoHo}
      >
        Thêm
      </Button>
      <Button icon="save" size="large" style={{ margin: '10px 10px' }}>
        Lưu
      </Button>
      <Button icon="sync" size="large" style={{ margin: '10px 10px' }}>
        Tải lại danh sách
      </Button>
    </CustomForm>
  );

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
          dataSource={giaohoList}
          scroll={{ y: 350 }}
        />
      </div>
    </>
  );
};

GiaoHo.propTypes = {};

export default GiaoHo;
