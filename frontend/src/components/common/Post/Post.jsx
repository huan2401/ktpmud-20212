import React, { useState, useEffect } from "react";
import { PostWrapper } from "./CustomStyled";
import { EnvironmentOutlined, EnvironmentTwoTone } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import axiosClient from "utils/axiosClient";

function isEmptyObject(obj) {
  return JSON.stringify(obj) === "{}";
}
const Post = ({ size = 400, data }) => {
  const { Meta } = Card;
  const [district, setDistrict] = useState();

  useEffect(() => {
    if (!isEmptyObject(data)) {
      axiosClient
        .get("/get-district-by-code", {
          params: {
            id: data.address.code_dictrict,
          },
        })
        .then((res) => {
          console.log("district", res.data.districtByCode);
          setDistrict(res.data.districtByCode.name);
        });
    }
  }, [
    data.address.code_city,
    data.address.code_dictrict,
    data.address.code_street,
    data.address.code_dictrict,
    data.address,
  ]);
  console.log("data", data);
  return (
    <>
      {data ? (
        <>
          <PostWrapper to={`/newdetail/${data._id}`}>
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
                title={data.title}
                description={
                  size === 200 ? (
                    <></>
                  ) : (
                    <div>
                      <p>{data.description}</p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "10px"
                        }}
                      >
                        <p
                          style={{
                            marginTop: "10px",
                            fontSize: "16px",
                            color: "#000",
                          }}
                        >
                          Giá :{" "}
                          <span style={{ color: "red" }}>
                            {data.price.value}vnđ/{data.price.time}
                          </span>
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
                          {district}
                        </p>
                      </div>
                    </div>
                  )
                }
              />
            </Card>
          </PostWrapper>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Post;
