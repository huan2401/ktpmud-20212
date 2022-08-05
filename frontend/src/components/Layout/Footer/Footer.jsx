import { Divider } from "antd";
import React from "react";
import Logo from "assets/images/logo.png";
import { FacebookOutlined, YoutubeOutlined } from "@ant-design/icons";
import { FooterWrapper } from "./CustomStyled";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-content">
        <div>
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          Địa chỉ: Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội
          <br />
          Email: huan.nv192879@sis.hust.edu.vn
          <br />
          Hotline: 19003003
        </p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
