import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/auth/auth";

import BaseLayout from "./baseLayout";

export default function AuthLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(logout());
      navigate("/login");
    }
  }, [isAuthenticated]);

  return <BaseLayout />;
}
