import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Row, Col, Table, Divider, Tag } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
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
      <a href="javascript:;">
        <Button icon="close-circle" style={{ margin: '0 10px' }}>
          Xóa
        </Button>
        <Button icon="edit" style={{ margin: '0 10px' }}>
          Sửa
        </Button>
      </a>
    ),
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Giáo Họ ${i}`,
  });
}

const formGiaoHo = (
  <React.Fragment>
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
                size="large"
                placeholder="Hãy Nhập Tên Giáo Họ"
                style={{ width: '500px', minWidth: '100%' }}
              />
            </Form.Item>
          </Col>
          <FormItem>
            <Form.Item className="ButtonGroup" style={{ marginTop: '10px' }}>
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
          </FormItem>
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
      <Table pagination="true" columns={columns} dataSource={data} />
    </div>
  </React.Fragment>
);

const GiaoHo = props => {
  return formGiaoHo;
};

GiaoHo.propTypes = {};

export default GiaoHo;
