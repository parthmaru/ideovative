import React from "react";
import coverOne from "../images/coverOne.svg";
import GoogleIcon from "../images/search.svg";
import {
  SignInContainer,
  SignInLeft,
  SignInRight,
} from "../styles/SignInStyle";
import { auth, provider } from "../firebase";

const SignIn = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error));
  };

  return (
    <SignInContainer>
      <SignInLeft>
        <h1 style={{ color: "white", fontSize: "3rem", marginBottom: "1rem" }}>
          Ideovative <span style={{ color: "#6C63FF" }}>a space to share</span>
        </h1>
        <p
          style={{
            color: "gray",
            fontSize: "1.3rem",
            marginBottom: "2rem",
            textAlign: "justify",
          }}
        >
          Here you can share your innovative ideas, thoughts, your opinions
          about existing technologies, post the information about upcoming
          technologies, ask if you need any help into your existing projects and
          much more. This platform is build for Learning Purpose. “Make a habit
          of trying new things”
        </p>
        <button
          onClick={handleSignIn}
          style={{ cursor: "pointer", fontWeight: "normal" }}
        >
          <img src={GoogleIcon} alt="google" />
          Signin with Google
        </button>
      </SignInLeft>
      <SignInRight>
        <img src={coverOne} alt="cover" />
      </SignInRight>
    </SignInContainer>
  );
};

export default SignIn;
