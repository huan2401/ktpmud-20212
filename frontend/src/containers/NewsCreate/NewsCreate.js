import React from "react";
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
  Select,
} from "antd";
import { NewsWrapper } from "./CustomStyled";

const NewsCreate = () => {
  const { Option } = Select;
  const onFinish = (values) => {
    console.log("Success:", values);
    // dispatch(login(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <NewsWrapper>
      <div className="news-create">
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Tiêu đề"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input your title!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mô tả"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your description!",
              },
            ]}
          >
            <Input.TextArea showCount maxLength={300} style={{ height: 120 }} />
          </Form.Item>
          <Form.Item
            label="Giá"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input your price!",
              },
            ]}
          >
            <Form.Item
              name={["price", "time"]}
              noStyle
              rules={[{ required: true, message: "Province is required" }]}
            >
              <Select style={{ width: "20%" }} placeholder={"Chọn"}>
                <Option value="tháng">Theo Tháng</Option>
                <Option value="quý">Theo Quý</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={["price", "value"]}
              noStyle
              rules={[{ required: true, message: "Price is required" }]}
            >
              <Input style={{ width: "50%" }} type={"number"} />
            </Form.Item>
          </Form.Item>
          <Form.Item
            name="acreage"
            label="Diện tích"
            rules={[
              {
                required: true,
                message: "Please input your acreage!",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            name="bedroom"
            label="Phòng ngủ"
            rules={[
              {
                required: true,
                message: "Please input your bedroom!",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            name="toilet"
            label="Nhà vệ sinh"
            rules={[
              {
                required: true,
                message: "Please input your toilet!",
              },
            ]}
          >
            <Form.Item
              name={["toilet", "type"]}
              noStyle
              rules={[{ required: true, message: "toilet type is required" }]}
            >
              <Select placeholder={"Chọn"} style={{ width: "20%" }}>
                <Option value="riêng">Riêng</Option>
                <Option value="chung">Chung</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={["toilet", "value"]}
              noStyle
              rules={[{ required: true, message: "toilet is required" }]}
            >
              <Input style={{ width: "50%" }} type={"number"} />
            </Form.Item>
          </Form.Item>

          <Form.Item
            name="kitchenroom"
            label="Nhà bếp"
            rules={[
              {
                required: true,
                message: "Please input your kitchenroom!",
              },
            ]}
          >
            <Form.Item
              name={["kitchenroom", "type"]}
              noStyle
              rules={[
                { required: true, message: "kitchenroom type is required" },
              ]}
            >
              <Select placeholder={"Chọn"} style={{ width: "20%" }}>
                <Option value="riêng">Riêng</Option>
                <Option value="chung">Chung</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={["kitchenroom", "value"]}
              noStyle
              rules={[{ required: true, message: "kitchenroom is required" }]}
            >
              <Input style={{ width: "50%" }} type={"number"} />
            </Form.Item>
          </Form.Item>

          <Form.Item
            name="address"
            label="Địa chỉ"
            rules={[
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <Form.Item
              name={["address", "city"]}
              noStyle
              rules={[{ required: true, message: "city type is required" }]}
            >
              <Select placeholder={"Chọn thành phố"} style={{ width: "20%" }}>
                <Option value="Hà Nội">Hà Nội</Option>
                <Option value="Bắc Giang">Bắc Giang</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={["address", "dictrict"]}
              noStyle
              rules={[{ required: true, message: "dictrict type is required" }]}
            >
              <Select placeholder={"Chọn quận"} style={{ width: "20%" }}>
                <Option value="Hoàng Mai">Hoàng Mai</Option>
                <Option value="Hai Bà Trưng">Hai Bà Trưng</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={["address", "street"]}
              noStyle
              rules={[{ required: true, message: "street type is required" }]}
            >
              <Select placeholder={"Chọn đường"} style={{ width: "20%" }}>
                <Option value="Lê Thanh Nghị">Lê Thanh Nghị</Option>
                <Option value="Trần Đại Nghĩa">Trần Đại Nghĩa</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={["address", "detail"]}
              noStyle
              rules={[
                { required: true, message: "address detail is required" },
              ]}
            >
              <Input.TextArea
                style={{ width: "60%", height: 80 }}
                showCount
                maxLength={100}
              />
            </Form.Item>
          </Form.Item>

          <Form.Item
            name="utilities"
            label="Tiện ích"
            rules={[
              {
                required: true,
                message: "Please choose your utilities!",
              },
            ]}
          >
            <Checkbox.Group
              options={[
                "wifi",
                "mezzanine",
                "camera",
                "parking",
                "fridge",
                "WashingMachine",
                "television",
                "AirConditional",
                "elevator",
              ]}
              style={{width: "50%"}}
            />
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

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Đăng bài
            </Button>
          </Form.Item>
        </Form>
      </div>
    </NewsWrapper>
  );
};

export default NewsCreate;
