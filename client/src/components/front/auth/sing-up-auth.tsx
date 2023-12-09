import "./sign-up-auth.scss";
import React from "react";
import { Form, Input, Button, Checkbox, Select } from "antd";
import logo from "/dambula.png";
import { authenticateUser } from "./sign-in-auth";
import { Link } from "react-router-dom";

const { Option } = Select;

export interface userSignUpDetails {
  title: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
}

const signUpPageStyles: React.CSSProperties = {
  minHeight: "100vh",
  placeContent: "center",
  padding: "20px 10px",
};

const SignUpPage: React.FC = () => {
  const onFinish = (values: any) => {
    //console.log('Received values:', values);
    const payLoad: userSignUpDetails = {
      title: values.title,
      firstname: values.firstName,
      lastname: values.lastName,
      phone: values.mobileNumber,
      email: values.email,
      password: values.password,
    };
    console.log(payLoad);
    authenticateUser(payLoad, "signup");
  };

  return (
    <div className="grid sign-up-container" style={signUpPageStyles}>
      <div
        style={{ minWidth: "300px", margin: "auto", padding: "20px" }}
        className="bg-white shadow-lg sign-up-form"
      >
        <div className="flex flex-col items-center content-center gap-10">
          <div>
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div>
            <h6>Create an account</h6>
          </div>
        </div>
        <Form
          name="signupForm"
          initialValues={{ title: "Mr" }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item label="Title" name="title">
            <Select className="select  border-gray-400">
              <Option value="Mr">Mr</Option>
              <Option value="Mrs">Mrs</Option>
              <Option value="Ms">Ms</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: "Please enter your first name" },
            ]}
          >
            <Input
              placeholder="First Name"
              className="border border-gray-400 py-2 rounded"
            />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Please enter your last name" }]}
          >
            <Input
              placeholder="Last Name"
              className="border border-gray-400 py-2 rounded"
            />
          </Form.Item>

          <Form.Item
            label="Mobile Number"
            name="mobileNumber"
            rules={[
              { required: true, message: "Please enter your mobile number" },
            ]}
          >
            <Input
              type="tel"
              placeholder="Mobile Number"
              className="border border-gray-400 py-2 rounded"
            />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input
              placeholder="Email Address"
              className="border border-gray-400 py-2 rounded"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter a password" }]}
          >
            <Input.Password
              placeholder="Password"
              className="border border-gray-400 py-2 rounded"
            />
          </Form.Item>

          <Form.Item>
            <Checkbox>I accept the terms and conditions</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="bg-blue-500"
            >
              Sign Up
            </Button>
          </Form.Item>
          <p className="text-center">
            already have an account? <Link to="/auth/sign-in">signin</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;
