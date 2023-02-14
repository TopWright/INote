import { useState, useEffect } from "react";

import Image from "next/image";

import classes from "./HomePage.module.css";
import bookPic from "/public/book-bg.jpg";

import SignupForm from "../forms/SignupForm";
import LoginForm from "../forms/LoginForm";

import { useAuth } from "@/src/context/auth-context";

const HomePage = () => {
  const [logIn, setLogin] = useState(true);
  const switchtoSignup = () => {
    setLogin(false);
  };

  const switchToLogin = () => {
    setLogin(true);
  };

  const { authUser, loading } = useAuth();

  // useEffect(() => {
  //   if (authUser) {
  //     setLogin(false);
  //   }
  // }, [loading, authUser]);

  return (
    <header className={classes.header}>
      <div className={classes.info}>
        <h2>INOTE</h2>
        <h1>Get organised, Stay creative</h1>
        <p>Keep records of points or ideas to aid your memory.</p>
      </div>
      <div className={classes.sign}>
        {/* <Image
          src={bookPic}
          alt="Note Background"
          style={classes.image}
          priority
        /> */}
        <h1>Get Started</h1>
        {logIn && <LoginForm switch={switchtoSignup} />}
        {!logIn && <SignupForm switch={switchToLogin} />}
      </div>
    </header>
  );
};

export default HomePage;
