import React, { Component } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { LoadingButton } from "@mui/lab";
import {
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { Icon } from "@iconify/react";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name required"),
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password is required"),
});

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
    this.initialValues = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm: "",
    };
  }

  handleSubmit = (values, setSubmitting) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  render() {
    return (
      <div id="signupForm">
        <Formik
          initialValues={this.initialValues}
          validationSchema={RegisterSchema}
          onSubmit={(values, { setSubmitting }) =>
            this.handleSubmit(values, setSubmitting)
          }
        >
          {({ errors, touched, handleSubmit, isSubmitting, getFieldProps }) => (
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                <TextField
                  fullWidth
                  label="First name"
                  {...getFieldProps("firstName")}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />

                <TextField
                  fullWidth
                  label="Last name"
                  {...getFieldProps("lastName")}
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Stack>
              <Divider sx={{ my: 3 }}></Divider>
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
                  autoComplete="password"
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

                <TextField
                  fullWidth
                  autoComplete="confirm"
                  type="password"
                  label="Confirm Password"
                  {...getFieldProps("confirm")}
                  error={Boolean(touched.confirm && errors.confirm)}
                  helperText={touched.confirm && errors.confirm}
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
                Sign Up
              </LoadingButton>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
export default SignupForm;
