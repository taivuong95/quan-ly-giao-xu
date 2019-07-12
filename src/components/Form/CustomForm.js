import React from 'react';
import { Input, Form, Icon, Button, Select, AutoComplete } from 'antd';
import CustomInput from '../Input/CustomInput';
import './CustomForm.scss';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const CustomForm = (props) => {
  const { formModel, form } = props;
  let toRender = [];
  toRender = formModel.map((item, index) =>
    <CustomInput item={item} key={index} form={form} />
  );
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

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(CustomForm);
export default WrappedNormalLoginForm;





