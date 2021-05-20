import React from "react";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
} from "../styles/HeaderStyle";
import icon from "../images/ideas.svg";
import Avatar from "@material-ui/core/Avatar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = (e) => {
    e.preventDefault();
    auth.signOut();
  };

  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <img src={icon} alt="" style={{ marginRight: ".8rem" }} />
        <h1 style={{ fontSize: "1.5rem" }}>Ideovative</h1>
      </HeaderLeft>
      {/* Header Right */}
      <HeaderRight>
        <h3
          onClick={handleSignOut}
          style={{ cursor: "pointer", fontSize: "1rem" }}
        >
          Sign out
        </h3>
        <Avatar src={user.photoURL} style={{ marginLeft: "1rem" }} />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
