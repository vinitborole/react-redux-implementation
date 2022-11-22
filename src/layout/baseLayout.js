import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./layoutComponents/footer";
import Header from "./layoutComponents/header";
const APP_BAR_MOBILE = 50;
const APP_BAR_DESKTOP = 50;
 

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  maxWidth: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: 10,
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 10,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default function BaseLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
       
      </Main>
      <Footer />
    </>
  );
}
