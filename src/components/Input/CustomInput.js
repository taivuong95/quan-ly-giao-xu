import React from 'react';
import { Form, Input, Icon, Col } from 'antd';
import './CustomInput.scss';
const { TextArea, Button } = Input;
const CustomInput = props => {
  // const { item, form } = props;
  // const { getFieldDecorator } = props.form;

  const item = { ...props.inputData };
  console.log(item);

  switch (item.type) {
    case 'text':
      return <Input size="small" placeholder={item.placeholder} />;

    case 'textarea':
      return <TextArea rows={4} />;

    case 'button':
      return (
        <Button icon="plus" size="large">
          Thêm
        </Button>
      );

    default:
      return null;
  }
};

export default CustomInput;
