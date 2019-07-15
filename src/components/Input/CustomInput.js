import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import './CustomInput.scss';

const { TextArea } = Input;
const CustomInput = props => {
  const data = props;
  const item = data.type;
  console.log(item.type);
  //const { getFieldDecorator } = form;

  switch (item.type) {
    case 'text':
      return (
        <Form.Item label={item.name} className="input">
          {/* {getFieldDecorator(item.name, {
            rules: [{ required: item.required, message: item.errMess }],
          })( */}
            <Input
              prefix={
                <Icon type={item.icon} style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              placeholder={item.placeholder}
            />
        </Form.Item>
      );

      case 'textarea':
      return (
        <Form.Item label={item.name} className="input">
          {/* {getFieldDecorator(item.name, {
            rules: [{ required: item.required, message: item.errMess }],
          })( */}
            <TextArea rows={4}
              prefix={
                <Icon type={item.icon} style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              placeholder={item.placeholder}
            />
        </Form.Item>
      );

      case 'button':
      return (
        <Form.Item className="input">
          {/* {getFieldDecorator(item.name, {
            rules: [{ required: item.required, message: item.errMess }],
          })( */}
            <Button icon={item.icon}>{item.name}</Button>
        </Form.Item>
      );

    default:
      return null;
  }
};

export default CustomInput;
