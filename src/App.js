import React from "react";
import Header from "./components/Header";
import MessageArea from "./components/MessageArea";
import Sidebar from "./components/Sidebar";
import SignIn from "./components/SignIn";
import { MainContainer } from "./styles/MainSectionStyle";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      {!user ? (
        <SignIn />
      ) : (
        <>
          <Header />
          <MainContainer>
            <Sidebar />
            <MessageArea />
          </MainContainer>
        </>
      )}
    </>
  );
}

export default App;
