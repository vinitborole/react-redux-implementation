import React, { Component } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { Icon } from "@iconify/react";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import { connect } from "react-redux";
import { login } from "../../redux/auth/auth";
import { Navigate } from "react-router-dom";
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      initialValues: { email: "", password: "" },
    };
    // this.initialValues = { email: "", password: "" };
  }

  handleSubmit = (values, setSubmitting) => {
    this.props.login({ values });
    setSubmitting(false);
  };

  render() {
    return (
      <div id="loginForm">
        {this.props.isAuthenticated && <Navigate to="/app" replace={true} />}
        <Button
          onClick={() =>
            this.setState({
              ...this.state,
              initialValues: {
                email: "eve.holt@reqres.in",
                password: "cityslicka",
              },
            })
          }
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
        >
          Fill Dummy Login Details
        </Button>
        <Divider sx={{ my: 3 }}></Divider>
        <Formik
          initialValues={this.state.initialValues}
          validationSchema={LoginSchema}
          enableReinitialize={true}
          onSubmit={(values, { setSubmitting }) =>
            this.handleSubmit(values, setSubmitting)
          }
        >
          {({ errors, touched, handleSubmit, isSubmitting, getFieldProps }) => (
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  autoComplete="username"
                  type="email"
                  label="Email address"
                  {...getFieldProps("email")}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />

                <TextField
                  fullWidth
                  autoComplete="current-password"
                  type={this.state.showPassword ? "text" : "password"}
                  label="Password"
                  {...getFieldProps("password")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            this.setState({
                              ...this.state,
                              showPassword: !this.state.showPassword,
                            })
                          }
                          edge="end"
                        >
                          <Icon
                            icon={
                              this.state.showPassword ? eyeFill : eyeOffFill
                            }
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Stack>

              <LoadingButton
                style={{ marginTop: 20 }}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Login
              </LoadingButton>
            </Form>
          )}
        </Formik>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={this.props.error ? true : false}
          autoHideDuration={6000}
          message={this.props.error}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  error: state.auth.error,
});
const mapDispatchToProps = { login };
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
