import React from 'react';
import { Form, Row, Input, Col } from 'antd';
import CustomInput from '../Input/CustomInput';
import { Button } from 'antd/lib/radio';

import { GIAO_XU } from '../../models/formModel';

import classes from './CustomForm.module.scss';

const CustomForm = props => {
  const { formModel, form } = props;
  console.log(props.formModel);

  let toRender = [];
  toRender = formModel.map((item, index) => (
    <Row>
      {item.col.map(colItem => {
        return (
          <Col span={item.span} className={classes.Form}>
            <Form.Item label={colItem.name} style={{ minWidth: '100px' }}>
              <CustomInput inputData={colItem} />
            </Form.Item>
          </Col>
        );
      })}
    </Row>
  ));
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  return (
    <Form
      layout="inline"
      onSubmit={handleSubmit}
      className="form"
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '5px',
      }}
    >
      {toRender}
    </Form>
  );
};

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(
  CustomForm
);
export default WrappedNormalLoginForm;
