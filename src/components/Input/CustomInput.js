import React from 'react';
import { Input, Button } from 'antd';
import './CustomInput.scss';
import TextArea from 'antd/lib/input/TextArea';

const CustomInput = props => {
  const item = { ...props.inputData };

  const inputHanlder = e => {
    props.changed(e.target.value);
  };

  const buttonClick = () => {
    props.clicked();
  };

  switch (item.type) {
    case 'text':
      return (
        <Input
          size="default"
          placeholder={item.placeholder}
          onChange={inputHanlder}
        />
      );

    case 'textarea':
      return <TextArea rows={4} onChange={inputHanlder} />;

    case 'button':
      return (
        <Button icon="plus" size="large" onClick={buttonClick}>
          {item.name}
        </Button>
      );

    default:
      return null;
  }
};

export default CustomInput;
