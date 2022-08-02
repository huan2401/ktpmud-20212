import React from "react";
import { Carousel } from "antd";
import { HomeWrapper } from "./CustomStyled";

const contentStyle = {
  height: "600px",
  lineHeight: "160px",
  width: "100%",
  objectFit: "cover",
};

const Home = () => {
  return (
    <HomeWrapper>
      <div className="home-banner">
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
    </HomeWrapper>
  );
};

export default Home;
