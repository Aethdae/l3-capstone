import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginForm from "./LoginForm";

export default function Login({ error, session, handleSignUp, handleLogIn }) {
  return (
    <div>
      <Header session={session} />
      <LoginForm handleSignUp={handleSignUp} handleLogIn={handleLogIn} />
      <Footer />
    </div>
  );
}
