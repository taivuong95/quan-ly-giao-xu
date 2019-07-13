import React from 'react';
import {
  Input,
  Form,
  Icon,
  Button,
  Select,
  AutoComplete,
  Col,
  Row,
} from 'antd';
import CustomInput from '../Input/CustomInput';
import './CustomForm.scss';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const CustomForm = props => {
  const { formModel, form } = props;
  console.log(formModel);

  // const formItemLayout = {
  //   labelCol: {
  //     xs: { span: 24 },
  //     sm: { span: 8 },
  //   },
  //   wrapperCol: {
  //     xs: { span: 24 },
  //     sm: { span: 16 },
  //   },
  // };

  let toRender,
    renderData = [];
  toRender = formModel.map((item, index) => (
    <Col>Đây là cột ${index}</Col>
    // <CustomInput item={item} key={index} form={form} />
  ));
  renderData = toRender.map((item, index) => (
    <CustomInput item={item} key={index} form={form} />
  ));
  const handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  return (
    <Form
      // {...formItemLayout}
      layout="inline"
      onSubmit={handleSubmit}
      className="form"
    >
      <Row>{toRender}</Row>
    </Form>
  );
};

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(
  CustomForm
);
export default WrappedNormalLoginForm;
