import React, { useState } from "react";
import {
  buttonClasses,
  mediumHeaderClasses,
  textInputClasses,
} from "../css/htmlClasses";

export default function LoginForm({ handleLogIn, handleSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col">
      <h2 className={mediumHeaderClasses.join(" ") + " w-full text-center"}>
        Sign up/Login
      </h2>
      <form
        className="flex flex-col items-center gap-6 bg-steel-700 text-white py-10"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="flex gap-4">
          Email
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className={textInputClasses.join(" ")}
            placeholder="Email"
            type="email"
            name="email"
            id="email"
          ></input>
        </label>
        <label className="flex gap-4">
          Password
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className={textInputClasses.join(" ")}
            placeholder="Password"
            type="password"
            name="password"
            id="password"
          ></input>
        </label>
        <div id="buttonContainer" className="flex gap-4 justify-around">
          <button
            onClick={(e) => {
              handleSignUp({ email: email, password: password });
            }}
            className={buttonClasses.join(" ")}
          >
            Sign Up
          </button>
          <button
            onClick={(e) => {
              handleLogIn({ email: email, password: password });
            }}
            className={buttonClasses.join(" ")}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
