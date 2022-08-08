import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { HomeWrapper } from "./CustomStyled";
import Post from "components/common/Post/Post";
import axiosClient from "utils/axiosClient";

const contentStyle = {
  height: "600px",
  lineHeight: "160px",
  width: "100%",
  objectFit: "cover",
};

const Home = () => {
  const [news, setNews] = useState([]);
  let arrCreateAt = [];
  useEffect(() => {
    axiosClient.get("/news").then((res) => {
      console.log("res create", res.data.news);
      res.data.news.forEach((item) => arrCreateAt.push(item.createAt));
      console.log("arr", arrCreateAt);
      console.log("arr", arrCreateAt.sort());
      setNews(res.data.news);
    });
  }, []);
  console.log("get all news", news);
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
      <div className="home-news">
        <div className="home-news-title">
          <p>Tin đăng gần đây</p>
        </div>
        <div className="home-news-content">
          {news.map((item, index) => {
            if (index >= 3) {
              return;
            }
            return <Post data={item} />;
          })}
        </div>
      </div>
      <div className="home-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6409443025927!2d105.84094731473107!3d21.00702528601016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76ccab6dd7%3A0x55e92a5b07a97d03!2zxJDhuqFpIGjhu41jIELDoWNoIGtob2EgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1659631225700!5m2!1svi!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </HomeWrapper>
  );
};

export default Home;
