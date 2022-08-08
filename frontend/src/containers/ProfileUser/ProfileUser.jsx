import { Avatar, Breadcrumb } from "antd";
import Post from "components/common/Post/Post";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { ProfileUserWrapper } from "./CustomStyled";
import axiosClient from "utils/axiosClient";

const ProfileUser = () => {
  const user = useSelector((state) => state.auth.user);
  const [newsByUser, setNewsByUser] = useState([]);
  const id = useParams();
  useEffect(() => {
    axiosClient
      .get("/news-by-user", {
        params: {
          id: id.id,
        },
      })
      .then((res) => setNewsByUser([...res.data.newsByUser]));
  }, []);
  console.log("newsByUser", newsByUser);
  return (
    <ProfileUserWrapper>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <p>
              Trang cá nhân của{" "}
              <span style={{ fontWeight: "bold" }}>{user.username}</span>
            </p>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="profile">
        <div>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
          <p>
            <span>{!!user ? user.firstname : ""}</span>
            &nbsp;
            <span>{!!user ? user.lastname : ""}</span>
          </p>
        </div>
        <div>
          <p>
            <MailOutlined />
            &nbsp;Email : {user.email}
          </p>
          <p>
            <PhoneOutlined />
            &nbsp;Phone : {user.phone}
          </p>
        </div>
      </div>
      <div className="profile-news">
        <p>Tin đăng của {user.username}</p>
        <div>
          {newsByUser.map((item) => {
            return <Post size={300} data={item} />;
          })}
        </div>
      </div>
    </ProfileUserWrapper>
  );
};

export default ProfileUser;
