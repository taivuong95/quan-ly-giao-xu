import React from 'react';
import { Form, Input, Icon } from 'antd';
import './CustomInput.scss';

const CustomInput = (props) => {
  const { item, form } = props;
  console.log(form);
  const { getFieldDecorator } = form;

  switch (item.type) {
    case 'text':
      return (
        <Form.Item label={item.name} className="input">
          {getFieldDecorator(item.name, {
            rules: [{ required: item.required, message: item.errMess }],
          })(
            <Input
              prefix={<Icon type={item.icon} style={{ color: 'rgba(0,0,0,.25)' }} />}

            // placeholder={item.placeholder}
            />,
          )}
        </Form.Item>
      );

    default:
      return (
        null
      );
  }

};

export default CustomInput