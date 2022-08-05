import React from "react";
import { PostWrapper } from "./CustomStyled";
import { EnvironmentOutlined, EnvironmentTwoTone } from "@ant-design/icons";
import { Avatar, Card } from "antd";

const Post = ({ size = 400 }) => {
  const { Meta } = Card;
  const id = "abc";
  return (
    <PostWrapper to={`/newdetail/${id}`}>
      <Card
        style={{ width: size }}
        cover={
          <img
            alt="phòng trọ"
            src="https://mogi.vn/news/wp-content/uploads/2019/05/tim-phong-tro-ha-noi-1.jpg"
          />
        }
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Cho thuê phòng trọ mặt tiền đường Lê Thanh Nghị"
          description={
            size === 200 ? (
              <></>
            ) : (
              <div>
                <p>
                  Phòng trọ cho thuê mặt tiền đường Lê Thanh Nghị, cách Đại Học
                  Bách Khoa 300m...
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      marginTop: "10px",
                      fontSize: "16px",
                      color: "#000",
                    }}
                  >
                    Giá : <span style={{ color: "red" }}>2triệu/tháng</span>
                  </p>
                  <p
                    style={{
                      marginTop: "10px",
                      fontSize: "16px",
                      color: "#000",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {/* <EnvironmentOutlined /> */}
                    <EnvironmentTwoTone />
                    Bách Khoa
                  </p>
                </div>
              </div>
            )
          }
        />
      </Card>
    </PostWrapper>
  );
};

export default Post;
