import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Form,
  Input,
  Radio,
  Upload,
  message,
  Checkbox,
  Col,
  Row,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { SignUpWrapper } from "./CustomStyle";
import { register } from "slices/authSlice";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
};

function SignUp() {
  // const [avatar, setAvatar] = useState();
  const [loading, setLoading] = useState(false);
  const [checkedSignUp, setCheckedSignUp] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const navigate = useNavigate();

  const isLogin = useSelector((state) => state.auth.login);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogin) {
      navigate("/", { replace: true });
    }
  }, [isLogin]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  //   dispatch(login(formValues));
  // };

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(register(values)).then((res) => {
      if (res.payload.message === "User was registered successfully!") {
        setCheckedSignUp(true);
      }
    });
  };

  useEffect(() => {
    if (checkedSignUp) {
      navigate("/login");
      return;
    }
  }, [checkedSignUp]);

  console.log("checkedSignUp", checkedSignUp);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <SignUpWrapper>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="First Name"
          name="firstname"
          rules={[
            {
              required: true,
              message: "Please input your firstname!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastname"
          rules={[
            {
              required: true,
              message: "Please input your lastname!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="gender" label="Gender">
          <Radio.Group>
            <Radio value={1}>Male</Radio>
            <Radio value={0}>Female</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* <Form.Item label="Avatar" name="avatar">
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  width: "100%",
                }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item> */}

        <Form.Item name="roles" label="Roles">
          <Checkbox.Group>
            <Row>
              <Col span={12}>
                <Checkbox value="user" style={{ lineHeight: "32px" }}>
                  User
                </Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox value="renter" style={{ lineHeight: "32px" }}>
                  Renter
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </SignUpWrapper>
  );
}

export default SignUp;
