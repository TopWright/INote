import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

import classes from "./SignupForm.module.css";

import Input from "../UI/Input";
import Button from "../UI/Button";
import ErrorMessage from "../UI/ErrorMsg";

const SignupForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object().shape({
      fullName: Yup.string()
        .min(3, "Character must be more than 3")
        .max(30, "Character must be less than 30")
        .required("fullName is required"),

      email: Yup.string()
        .email("Email is invalid")
        .matches("[a-z0-9]+@[a-z]+.[a-z]{2,3}", "Email is invalid")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),

    onSubmit: (userAuthValues) => {
      console.log(userAuthValues);
      router.push("/dashboard");
    },
  });
  // console.log(formik.errors.password);

  const nameError = formik.touched.fullName && formik.errors.fullName && (
    <ErrorMessage content={ formik.errors.fullName } />
  );
  const emailError = formik.touched.email && formik.errors.email && (
    <ErrorMessage content={formik.errors.email} />
  );
  const passwordError = formik.touched.password && formik.errors.password && (
    <ErrorMessage content={formik.errors.password} />
  );
  const confirmPasswordError = formik.touched.confirmPassword &&
    formik.errors.confirmPassword && (
      <ErrorMessage content={formik.errors.confirmPassword} />
    );
  
  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <h1>Create Account</h1>
      <Input
        label="Full Name"
        input={{
          id: "fullName",
          type: "text",
        }}
        className={classes.input}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.fullName}
        errorMessage={nameError}
      />
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
      <Input
        label="Confirm Password"
        input={{
          id: "confirmPassword",
          type: "password",
        }}
        className={classes.input}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
        errorMessage={confirmPasswordError}
      />
      <Button type="submit" className={classes.button}>
        Create Account
      </Button>

      {/* Alter native form ---- LOGIN */}
      <div className={classes.login}>
        <span>Already have an account? </span>
        <Button>Login</Button>
      </div>
    </form>
  );
};

export default SignupForm;

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
