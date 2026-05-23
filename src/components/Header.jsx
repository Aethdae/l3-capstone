import React from "react";
import { Link } from "react-router-dom";
import { bigHeaderClasses, linkButtonClasses } from "../css/htmlClasses";

export default function Header() {
  return (
    <div className="border-b-sapphire-500 bg-coffee-900 border-b-8 flex flex-col py-4">
      <h1 className={bigHeaderClasses.join(" ") + " text-center"}>
        Workout Hub
      </h1>
      <nav className="self-center py-3">
        <div className="flex gap-4">
          {console.log(linkButtonClasses)}
          <Link to="/" className={linkButtonClasses.join(" ")}>
            Home
          </Link>
          <Link to="/" className={linkButtonClasses.join(" ")}>
            Login
          </Link>
          <Link to="/browse-exercises" className={linkButtonClasses.join(" ")}>
            Browse Exercises
          </Link>
        </div>
      </nav>
    </div>
  );
}
