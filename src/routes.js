import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import AuthLayout from "./layout/authLayout";
import BaseLayout from "./layout/baseLayout";

import LoginPage from "./components/auth/loginPage";
import DashboardPage from "./components/dashboardPage";
import Page404 from "./components/page404";
import SignupPage from "./components/auth/signupPage";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/app",
      element: <AuthLayout />,
      children: [
        { element: <Navigate to="/app/dashboard" />, index: true },
        { path: "dashboard", element: <DashboardPage /> },
      ],
    },

    {
      element: <BaseLayout />,
      children: [
        { element: <Navigate to="/app/dashboard" />, index: true },
        { path: "login", element: <LoginPage /> },
        { path: "signup", element: <SignupPage /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
