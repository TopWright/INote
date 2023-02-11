import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

import classes from "./SignupForm.module.css";

import Input from "../UI/Input";
import Button from "../UI/Button";
import ErrorMessage from "../UI/ErrorMsg";

const LoginForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email is invalid")
        .matches("[a-z0-9]+@[a-z]+.[a-z]{2,3}", "Email is invalid")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),

    onSubmit: (userAuthValues) => {
      console.log(userAuthValues);
      router.push("/dashboard");
    },
  });
  // console.log(formik.errors.password);

  const emailError = formik.touched.email && formik.errors.email && (
    <ErrorMessage content={formik.errors.email} />
  );
  const passwordError = formik.touched.password && formik.errors.password && (
    <ErrorMessage content={formik.errors.password} />
  );

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <h1>Login Account</h1>
      <Input
        label="Email Address"
        input={{
          id: "email",
          type: "email",
        }}
        className={classes.input}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        errorMessage={emailError}
      />
      <Input
        label="Password"
        input={{
          id: "password",
          type: "password",
        }}
        className={classes.input}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        errorMessage={passwordError}
      />
      <Button type="submit" className={classes.button}>
        Login
      </Button>

      {/* Alter native form ---- LOGIN */}
      <div className={classes.login}>
        <span>No have an account? </span>
        <Button> Create Account</Button>
      </div>
    </form>
  );
};

export default LoginForm;

// const router = useRouter();

// const {
//   value: nameInput,
//   validInput: validNameInput,
//   inValidInput: invalidNameInput,
//   inputChangeCtrl: nameChangeCtrl,
//   reset: resetNameInput,
// } = useInput((value) => value.trim === "");

// const {
//   value: emailInput,
//   validInput: validEmailInput,
//   inValidInput: invalidEmailInput,
//   inputChangeCtrl: emailChangeCtrl,
//   reset: resetEmailInput,
// } = useInput((value) => value.trim === "");

// const {
//   value: passwordInput,
//   validInput: validPasswordInput,
//   inValidInput: invalidPasswordInput,
//   inputChangeCtrl: passwordChangeCtrl,
//   reset: resetPasswordInput,
// } = useInput((value) => value.trim === "");

// const formSubmitCtrl = (e) => {
//   // Stop Page from reloading
//   e.preventDefault();

//   // Get USER-DETAILS
//   const userAuthDetails = {
//     name: nameInput,
//     email: emailInput,
//     password: passwordInput,
//   };

//   // FORWARD TO THE DATABASE
//   console.log(userAuthDetails);

//   // Clear input fields
//   resetNameInput();
//   resetEmailInput();
//   resetPasswordInput();

//   // Take USER to the Dashboard Page
//   router.push("/dashboard");
// };
