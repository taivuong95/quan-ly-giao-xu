import React from 'react';
import { Form, Row, Col } from 'antd';
import CustomInput from '../Input/CustomInput';
import 'antd/dist/antd.css';

import classes from './CustomForm.module.scss';

const CustomForm = props => {
  const { formModel, form } = props;

  const onChangeHandler = value => {
    props.parrentAction(value);
  };

  let toRender = [];
  toRender = formModel.map((item, index) => (
    <Row>
      {item.col.map((colItem, index) => {
        return (
          <Col span={item.span} className={classes.Form} key={index}>
            <Form.Item label={colItem.type === 'button' ? '' : colItem.name}>
              <CustomInput inputData={colItem} changed={onChangeHandler} />
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
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '5px',
      }}
    >
      {toRender}
      {props.children}
    </Form>
  );
};

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(
  CustomForm
);
export default WrappedNormalLoginForm;
