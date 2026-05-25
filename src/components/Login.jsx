import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginForm from "./LoginForm";

export default function Login({ error }) {
  return (
    <div>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}
