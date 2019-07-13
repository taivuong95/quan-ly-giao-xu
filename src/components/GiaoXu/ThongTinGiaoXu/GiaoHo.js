import React from 'react';
import { Form, Input, Button, Row, Col, Table } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

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

  const formGiaoHo = (
    <>
      <div
        className="form"
        style={{
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '5px',
        }}
      >
        <p>Nhập Giáo Họ</p>
        <Form layout="inline">
          <Row>
            <Col span={24}>
              <Form.Item label="Tên Giáo Họ">
                <Input
                  size="small"
                  placeholder="Hãy Nhập Tên Giáo Họ"
                  style={{ width: '500px', minWidth: '100%' }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item
                className="ButtonGroup"
                style={{ marginTop: '10px' }}
                span={24}
              >
                <Button icon="plus" size="large" style={{ margin: '0 10px' }}>
                  Thêm
                </Button>

                <Button icon="save" size="large" style={{ margin: '0 10px' }}>
                  Lưu
                </Button>
                <Button icon="sync" size="large" style={{ margin: '0 10px' }}>
                  Tải lại danh sách
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
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

  return formGiaoHo;
};

GiaoHo.propTypes = {};

export default GiaoHo;
