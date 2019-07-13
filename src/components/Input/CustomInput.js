import React from 'react';
import { Form, Input, Icon, Col } from 'antd';
import './CustomInput.scss';
const { TextArea } = Input;
const CustomInput = props => {
  const { item, form } = props;
  const { getFieldDecorator } = form;

  switch (item.type) {
    case 'text':
      return (
        <Col span={item.column}>
          <Form.Item label={item.name} className="input mr-20">
            {getFieldDecorator(item.name, {
              rules: [{ required: item.required, message: item.errMess }],
            })(
              <Input
                // prefix={<Icon type="" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder={item.placeholder}
              />
            )}
          </Form.Item>
        </Col>
      );
    case 'textarea':
      return (
        <Col span={item.column}>
          <Form.Item label={item.name} className="input mr-20">
            {getFieldDecorator(item.name, {
              rules: [{ required: item.required, message: item.errMess }],
            })(
              <TextArea
                rows={4}
                // prefix={<Icon type="" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder={item.placeholder}
              />
            )}
          </Form.Item>
        </Col>
      );
    default:
      return null;
  }
};

export default CustomInput;
