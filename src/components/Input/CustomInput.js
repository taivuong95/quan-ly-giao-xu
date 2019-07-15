import React from 'react';
import { Input, Button } from 'antd';
import './CustomInput.scss';
import TextArea from 'antd/lib/input/TextArea';

const CustomInput = props => {
  const item = { ...props.inputData };

  switch (item.type) {
    case 'text':
      return <Input size="medium" placeholder={item.placeholder} />;

    case 'textarea':
      return <TextArea rows={4} />;

    case 'button':
      return (
        <Button icon="plus" size="large">
          {item.name}
        </Button>
      );

    default:
      return null;
  }
};

export default CustomInput;
