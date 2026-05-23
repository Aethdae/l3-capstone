import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav>
        <div></div>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/">Login</Link>
          <Link to="/browse-exercises">Browse Exercises</Link>
        </div>
      </nav>
    </div>
  );
}
