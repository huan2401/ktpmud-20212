import React, { useState, useEffect } from "react";
import "./App.less";
// import { useSelector } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { checkLogin } from "slices/authSlice";
import AuthLayout from "components/Layout/AuthLayout/AuthLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "containers/Home/Home";
import Login from "containers/Login/Login";
import Signup from "containers/Signup/Signup";
import NotFound from "containers/NotFound/NotFound";
import Test from "containers/Test/Test";
import Header from "components/Layout/Header";
import News from "containers/NewsCreate/NewsCreate";
import NewDetail from "containers/NewDetail/NewDetail";
import ResetPassword from "containers/ResetPassword/ResetPassword";
import Footer from "components/Layout/Footer/Footer";
import ProfileUser from "containers/ProfileUser/ProfileUser";

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.login);
  console.log("isLogin", isLogin);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkLogin(true));
    }
  }, [isLogin]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="news" element={<News />} />
        <Route path="newdetail" element={<NewDetail />}>
          <Route path=":id" element={<NewDetail />} />
        </Route>
        <Route path="resetPassword" element={<ResetPassword />} />
        <Route path="profileUser" element={<ProfileUser />}>
          <Route path=":id" element={<ProfileUser />} />
        </Route>
        <Route path="test" element={<Test />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
    // <Routes>
    //   <Route path="login" element={<Login />} />
    //   <Route path="signup" element={<Signup />} />

    //   <Route
    //     path="test"
    //     element={
    //       <AuthLayout isAllowed={isLogin}>
    //         <Test />
    //       </AuthLayout>
    //     }
    //   />
    //   <Route
    //     path="/"
    //     element={
    //       <AuthLayout isAllowed={isLogin}>
    //         <Home />
    //       </AuthLayout>
    //     }
    //   />
    //   <Route path="*" element={<NotFound />} />
    // </Routes>
  );
}

export default App;
