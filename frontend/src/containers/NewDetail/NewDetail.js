import { Avatar, Carousel } from "antd";
import React from "react";
import { NewDetailWrapper } from "./CustomStyled";
import { EnvironmentTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Post from "components/common/Post/Post";

const contentStyle = {
  height: "600px",
  lineHeight: "160px",
  width: "100%",
  objectFit: "cover",
};
const NewDetail = () => {
  const id = "abcd";
  return (
    <NewDetailWrapper>
      <div className="newDetail-banner">
        <Carousel autoplay>
          <div>
            <img
              src="https://blog.rever.vn/hubfs/cho_thue_phong_tro_moi_xay_gia_re_ngay_phuong_15_tan_binh3.jpg"
              alt=""
              style={contentStyle}
            />
          </div>
          <div>
            <img
              src="https://toancanhbatdongsan.com.vn/uploads/images/2021/10/14/phong-tro-1-nguoi-thue-min-1634182443.jpg"
              alt=""
              style={contentStyle}
            />
          </div>
          <div>
            <img
              src="https://dichvuchuyendo.net/wp-content/uploads/2020/10/phong-tro.jpg"
              alt=""
              style={contentStyle}
            />
          </div>
          <div>
            <img
              src="https://www.hancorp.com.vn/wp-content/uploads/2020/08/phong-tro-2.jpg"
              alt=""
              style={contentStyle}
            />
          </div>
        </Carousel>
      </div>
      <div className="newDetail-info">
        <div>
          <p>Cho thuê phòng trọ mặt tiền đường Lê Thanh Nghị</p>
          <p>2triệu/tháng- 30 m2</p>
          <p>
            <EnvironmentTwoTone />
            Bách Khoa
          </p>
        </div>
        <div className="newDetail-infoRenter">
          <div>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            <Link to={`/profileUser/${id}`}>Nguyễn Văn Huân</Link>
          </div>
          <div>
            <p>Ngày đăng : 04/08/2022</p>
          </div>
        </div>
      </div>
      <div>
        <div className="newDetail-desc">
          <p>
            LH TRỰC TIẾP, KO NT . - Cho thuê phòng 48 Lê Thanh Nghị , bên cạnh
            trường ĐH kinh tế quốc dân, ĐH bách khoa, ĐH mở, ĐH xây dựng... GIÁ
            : 2tr - 3,5tr - fulLdồ: Điều hòa, Nóng lạnh, giường ,tủ, đầy đủ
            ...ace đến chỉ việc ở thôi . - Miễn phí : rác , gửi xe ,wifi ... -
            giờ giấc tự do không chung chủ. - Đc :48 Lê Thanh Nghị , hai bà
            trưng.
          </p>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6409443025927!2d105.84094731473107!3d21.00702528601016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76ccab6dd7%3A0x55e92a5b07a97d03!2zxJDhuqFpIGjhu41jIELDoWNoIGtob2EgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1659631225700!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{border:0}}
              allowFullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="newDetail-recommend">
          <p>Tin đăng liên quan</p>
          <Post size={200} />
          <Post size={200} />
          <Post size={200} />
        </div>
      </div>
    </NewDetailWrapper>
  );
};

export default NewDetail;
