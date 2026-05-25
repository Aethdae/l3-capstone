import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginForm from "./LoginForm";

export default function Login({ error, session }) {
  return (
    <div>
      <Header session={session} />
      <LoginForm />
      <Footer />
    </div>
  );
}
