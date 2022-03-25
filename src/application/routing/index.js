import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import AppLoader from "../components/AppLoader";

// PAGES
import Login from "../pages/login";
import Signup from "../pages/signup";
import Home from "../pages/home";

// import { getCurrentUser } from "./redux/actions/auth";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector(({ Auth }) => Auth);

  if (loading) return <AppLoader />;

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
