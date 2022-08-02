import React from "react";
import Logo from "assets/images/logo.png";
import { useSelector } from "react-redux";
import { HeaderWrapper } from "./CustomStyled";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "slices/authSlice";

const Header = () => {
  const path = useLocation();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  console.log("user", user);
  console.log("path", path.pathname);
  return (
    <HeaderWrapper>
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
              <p className="header-user">{user.username}</p>
              <Link to="/news">Đăng tin mới</Link>
              <Link to={"/login"} onClick={() => dispatch(logout())}>
                Đăng xuất
              </Link>
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
