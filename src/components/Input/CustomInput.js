import React, { useState } from 'react';
import { Input, Button, Checkbox, Select } from 'antd';
import './CustomInput.scss';
import TextArea from 'antd/lib/input/TextArea';
import 'antd/dist/antd.css';

const { Option } = Select;

const CustomInput = props => {
  const item = { ...props.inputData };
  const [checkboxState, setCheckBoxState] = useState(false);

  const inputHanlder = e => {
    props.changed(e.target.value);
  };

  const buttonClick = () => {
    props.clicked();
  };

  const checkboxHandler = e => {
    setCheckBoxState(e.target.checked);
  };

  let renderItem = null;

  switch (item.type) {
    case 'text':
      renderItem = (
        <Input
          size="default"
          placeholder={item.placeholder}
          onChange={inputHanlder}
        />
      );
      break;

    case 'textarea':
      renderItem = <TextArea rows={4} onChange={inputHanlder} />;
      break;

    case 'button':
      renderItem = (
        <Button icon="plus" size="large" onClick={buttonClick}>
          {item.name}
        </Button>
      );
      break;

    case 'checkbox':
      renderItem = (
        <Checkbox checked={checkboxState} onChange={checkboxHandler}>
          {item.name}
        </Checkbox>
      );
      break;

    case 'select':
      renderItem = (
        <Select
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={() => console.log('tst')}
          // onFocus={onFocus}
          // onBlur={onBlur}
          // onSearch={onSearch}
          // filterOption={(input, option) =>
          //   option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
          //   0
          // }
        >
          {item.options.map((option, index) => {
            return (
              <Option value={option.value} key={index}>
                {option.value}
              </Option>
            );
          })}
        </Select>
      );
      break;

    default:
      return null;
  }

  return <>{renderItem}</>;
};

export default CustomInput;
