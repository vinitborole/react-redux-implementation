import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import { styled } from "@mui/material/styles";
import {
  Link,
  Container,
  Typography,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import LoginForm from "./loginForm";

const StyledRoot = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const StyledSection = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 480,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: "none",
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentDidUpdate() {
    console.log("login updated");
  }

  componentWillUnmount() {
    console.log("login will unmount");
  }

  render() {
    return (
      <>
        <Helmet>
          <title> Login | React-Redux </title>
        </Helmet>

        <StyledRoot>
          <StyledSection>
            <img src="/assets/images/login.png" alt="login" />
          </StyledSection>

          <Container maxWidth="sm">
            <StyledContent>
              <Typography variant="h4" gutterBottom>
                Sign in to React-Redux
              </Typography>

              <Typography variant="body2" sx={{ mb: 5 }}>
                Don’t have an account? {""}
                <Link href={`/signup`} variant="subtitle2">
                  Get started
                </Link>
              </Typography>

              <LoginForm />
              <Divider sx={{ my: 3 }}></Divider>
            </StyledContent>
          </Container>
        </StyledRoot>
      </>
    );
  }
}

export default LoginPage;
