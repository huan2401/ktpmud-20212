import React, { useState, useEffect } from "react";
import Logo from "assets/images/logo.png";
import { useSelector } from "react-redux";
import { HeaderWrapper } from "./CustomStyled";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, signUpRenter } from "slices/authSlice";
import { Dropdown, Space, Menu, Modal, Form, Input, Button, Radio } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { updateProfile } from "slices/authSlice";
import axiosClient from "utils/axiosClient";

const Header = () => {
  const path = useLocation();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [isModalResetPassVisible, setIsModalResetPassVisible] = useState(false);
  const [isModalSignUpRenter, setIsModalSignUpRenter] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [path.pathname]);

  const showModalResetPass = () => {
    setIsModalResetPassVisible(true);
  };

  const showModalSignUpRenter = () => {
    setIsModalSignUpRenter(true);
  };

  const handleOk = () => {
    console.log("ok");
    dispatch(signUpRenter());
    // axiosClient
    //   .get("/auth/signUpRenter")
    //   .then((res) => console.log("res", res));
    setIsModalSignUpRenter(false);
  };

  const handleCancel = () => {
    setIsModalResetPassVisible(false);
    form.resetFields();
  };

  const handleCancelSignUpRenter = () => {
    setIsModalSignUpRenter(false);
  };

  const onFinish = (values) => {
    for (let key in values) {
      if (!values[`${key}`]) {
        values[`${key}`] = user[`${key}`];
      }
    }
    console.log("Success:", values);
    dispatch(updateProfile(values));
    setIsModalResetPassVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  console.log("user", user);
  console.log("path", path.pathname);

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <p onClick={showModalResetPass} style={{ margin: 0 }}>
              Chỉnh sửa thông tin
            </p>
          ),
        },
        {
          key: "2",
          label: (
            <p onClick={showModalSignUpRenter} style={{ margin: 0 }}>
              Đăng ký đăng bài
            </p>
          ),
        },
      ]}
    />
  );
  const menu1 = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <p onClick={showModalResetPass} style={{ margin: 0 }}>
              Chỉnh sửa thông tin
            </p>
          ),
        },
      ]}
    />
  );
  return (
    <HeaderWrapper offsetTop={0}>
      <div className="header">
        <Link to="/" className="header-left">
          <div className="header-left-logo">
            <img src={Logo} alt="logo" />
          </div>
          <p>Tìm trọ</p>
        </Link>
        <div className="header-right">
          {user ? (
            <>
              <Dropdown
                overlay={user && user.roles.length === 2 ? menu1 : menu}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <Link
                      to={`/profileUser/${user.id}`}
                      className="header-user"
                    >
                      {user.username}
                    </Link>
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              {user && user.roles.length === 2 && (
                <Link to="/news">Đăng tin mới</Link>
              )}

              <Link to={"/login"} onClick={() => dispatch(logout())}>
                Đăng xuất
              </Link>
              <Modal
                title="Chỉnh sửa thông tin"
                visible={isModalResetPassVisible}
                onOk={form.submit}
                onCancel={handleCancel}
              >
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  form={form}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        // required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input defaultValue={user ? user.username : ""} />
                  </Form.Item>
                  <Form.Item
                    label="First Name"
                    name="firstname"
                    rules={[
                      {
                        // required: true,
                        message: "Please input your firstname!",
                      },
                    ]}
                  >
                    <Input defaultValue={user ? user.firstname : ""} />
                  </Form.Item>
                  <Form.Item
                    label="Last Name"
                    name="lastname"
                    rules={[
                      {
                        // required: true,
                        message: "Please input your lastname!",
                      },
                    ]}
                  >
                    <Input defaultValue={user ? user.lastname : ""} />
                  </Form.Item>

                  <Form.Item name="gender" label="Gender">
                    <Radio.Group defaultValue={user.gender}>
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
                        // required: true,
                        message: "Please input your E-mail!",
                      },
                    ]}
                  >
                    <Input defaultValue={user ? user.email : ""} />
                  </Form.Item>

                  <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                      {
                        // required: true,
                        message: "Please input your phone!",
                      },
                    ]}
                  >
                    <Input defaultValue={user ? user.phone : ""} />
                  </Form.Item>

                  <Form.Item
                    label="Password Old"
                    name="passwordOld"
                    rules={[
                      {
                        // required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        // required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                </Form>
              </Modal>
              <Modal
                title="Đăng ký đăng bài"
                visible={isModalSignUpRenter}
                onOk={handleOk}
                onCancel={handleCancelSignUpRenter}
                footer={[
                  <Button key="cancel" onClick={handleCancelSignUpRenter}>
                    Cancel
                  </Button>,
                  <Button key="submit" type="primary" onClick={handleOk}>
                    Đăng ký
                  </Button>,
                ]}
              >
                Bạn có nhà muốn cho thuê ?
              </Modal>
            </>
          ) : (
            <>
              {path.pathname === "/signup" ? (
                <Link to={"/login"}>Đăng nhập</Link>
              ) : (
                <Link to={"/signup"}>Đăng ký</Link>
              )}
            </>
          )}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
