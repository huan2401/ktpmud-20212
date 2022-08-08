import { Avatar, Carousel } from "antd";
import React, { useEffect, useState } from "react";
import { NewDetailWrapper } from "./CustomStyled";
import { EnvironmentTwoTone } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import Post from "components/common/Post/Post";
import formatDate from "utils/formatDate";
import axiosClient from "utils/axiosClient";

const contentStyle = {
  height: "600px",
  lineHeight: "160px",
  width: "100%",
  objectFit: "cover",
};

function isEmptyObject(obj) {
  return JSON.stringify(obj) === "{}";
}
const NewDetail = () => {
  const id = useParams();
  const [dataNew, setDataNew] = useState({});
  // const [idUser, setIdUser] = useState();
  const [dataUser, setDataUser] = useState({});
  const [address, setAddress] = useState({});
  const [city, setCity] = useState();
  const [district, setDistrict] = useState();
  const [street, setStreet] = useState();
  useEffect(() => {
    axiosClient
      .get("/news-by-id", {
        params: {
          id: id.id,
        },
      })
      .then((res) => {
        setDataNew({ ...res.data.newsById });
        setAddress({ ...res.data.newsById.address });
        // setIdUser(...res.data.newsById.userId);
      });
  }, []);

  useEffect(() => {
    axiosClient
      .get("/user-from-news", {
        params: {
          id: id.id,
        },
      })
      .then((res) => {
        setDataUser({ ...res.data.userFromNews });
      });
  }, []);

  useEffect(() => {
    if (!isEmptyObject(address)) {
      axiosClient
        .get("/get-city-by-code", {
          params: {
            id: address.code_city,
          },
        })
        .then((res) => {
          console.log("city", res.data.cityByCode);
          setCity(res.data.cityByCode.name);
        });
      axiosClient
        .get("/get-district-by-code", {
          params: {
            id: address.code_dictrict,
          },
        })
        .then((res) => {
          console.log("district", res.data.districtByCode);
          setDistrict(res.data.districtByCode.name);
        });
      axiosClient
        .get("/get-street-by-code", {
          params: {
            id: address.code_street,
          },
        })
        .then((res) => {
          console.log("street", res.data.streetByCode);
          setStreet(res.data.streetByCode.name);
        });
    }
  }, [
    address.code_city,
    address.code_dictrict,
    address.code_street,
    address.code_dictrict,
    address,
  ]);
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
          <p>{dataNew.title}</p>
          <p>
            {!isEmptyObject(dataNew) && dataNew.price.value}vnđ/
            {!isEmptyObject(dataNew) && dataNew.price.time}
            &nbsp;-&nbsp;
            {!isEmptyObject(dataNew) && dataNew.acreage}m2
          </p>
          <p>
            <EnvironmentTwoTone />
            {!isEmptyObject(address) && address.address_detail},&nbsp;
            {!isEmptyObject(address) && street},&nbsp;
            {!isEmptyObject(address) && district},&nbsp;
            {!isEmptyObject(address) && city}
          </p>
        </div>
        <div className="newDetail-infoRenter">
          <div>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            <Link to={`/profileUser/${dataUser._id}`}>
              {dataUser.firstname}&nbsp;{dataUser.lastname}
            </Link>
          </div>
          <div>
            <p>
              Ngày đăng :{" "}
              {!isEmptyObject(dataNew) && formatDate(dataNew.createAt)}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="newDetail-desc">
          <p>
            {!isEmptyObject(dataNew) && dataNew.description}
            {/* LH TRỰC TIẾP, KO NT . - Cho thuê phòng 48 Lê Thanh Nghị , bên cạnh
            trường ĐH kinh tế quốc dân, ĐH bách khoa, ĐH mở, ĐH xây dựng... GIÁ
            : 2tr - 3,5tr - fulLdồ: Điều hòa, Nóng lạnh, giường ,tủ, đầy đủ
            ...ace đến chỉ việc ở thôi . - Miễn phí : rác , gửi xe ,wifi ... -
            giờ giấc tự do không chung chủ. - Đc :48 Lê Thanh Nghị , hai bà
            trưng. */}
          </p>
          <div>
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
        </div>
        {/* <div className="newDetail-recommend">
          <p>Tin đăng liên quan</p>
          <Post size={200} />
          <Post size={200} />
          <Post size={200} />
        </div> */}
      </div>
    </NewDetailWrapper>
  );
};

export default NewDetail;
