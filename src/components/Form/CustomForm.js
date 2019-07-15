import React from 'react';
import { Form, Row, Input, Col } from 'antd';
import CustomInput from '../Input/CustomInput';
import './CustomForm.scss';
import { Button } from 'antd/lib/radio';

import { GIAO_XU } from '../../models/formModel';

const CustomForm = props => {
  const {formModel} = props;
  console.log(formModel);
  
  let toRender = [];
  toRender = formModel.map((item, index) => (
    <Row>
      {item.col.map(colItem => {
        return (
          <Col span={item.span}>
            {/* <Form.Item label={colItem.name}>
              <Input size="small" placeholder="Hãy Nhập Tên Giáo Họ" />
            </Form.Item> */}
            <CustomInput type={colItem}/>
          </Col>
        );
      })}
    </Row>
  ));
  const handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  return (
    <Form onSubmit={handleSubmit} className="form">
      {toRender}
    </Form>
  );
};

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(
  CustomForm
);
export default WrappedNormalLoginForm;
