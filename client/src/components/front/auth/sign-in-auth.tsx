import "./sign-in-auth.scss";
import { Form, Input, Button } from "antd";
import logo from "/dambula.png";
import { postData } from "../lib/postData";
import { userSignUpDetails } from "./sing-up-auth";
import { Link } from "react-router-dom";
// import { process } from 'process';

interface userLoginDetails {
  email: string;
  password: string;
}

export const authenticateUser = (
  userData: userLoginDetails | userSignUpDetails,
  action: "signin" | "signup"
) => {
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? "https://dambula-backend-api.onrender.com"
      : "http://localhost:3000";

  const endpoint = action === "signin" ? "/login" : "/register";
  const url = `${apiUrl}${endpoint}`;

  postData(url, userData).then((res) => {
    console.log(res);
  });
};

export default function SignInPage() {
  const onFinish = (values: any) => {
    //console.log('Received values:', values);
    const payLoad: userLoginDetails = {
      email: values.userEmail,
      password: values.password,
    };

    console.log(payLoad);

    authenticateUser(payLoad, "signin");
  };

  return (
    <div
      className="grid sign-in-container bg-gradient"
      style={{ minHeight: "100vh", placeContent: "center" }}
    >
      <div className="signin-form-container shadow">
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div>
          <h6>Login to your account</h6>
        </div>
        <Form
          name="loginForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ maxWidth: 300 }}
        >
          <Form.Item
            name="userEmail"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input placeholder="User email" className="rounded" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              placeholder="Password"
              className="rounded py-2 border border-gray-500"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              className="bg-blue-500"
              htmlType="submit"
              style={{ width: "100%" }}
            >
              Login
            </Button>
          </Form.Item>
          <div>
            <p className="form-text text-center">forgot your password?</p>
            <p className="text-center">
              already have an account? <Link to="/auth/sign-up">signup</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
