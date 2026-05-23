import React from "react";
import { Link } from "react-router-dom";
import { buttonClasses, callToActionCardClasses } from "../css/htmlClasses";

export default function HomeHero() {
  return (
    <div className="min-h-[90vh] bg-steel-900">
      <section className="min-h-[30vh] flex flex-col">
        <div className={callToActionCardClasses.join(" ")}>
          <p>Create an account to track your workouts.</p>
          <p></p>

          <Link to="/login" className={buttonClasses.join(" ")}>
            Sign up
          </Link>
        </div>
      </section>
      <section className="min-h-[30vh]">
        <div className={callToActionCardClasses.join(" ")}></div>
      </section>
      <section className="min-h-[30vh]">
        <div className={callToActionCardClasses.join(" ")}>
          Unsure of what to go for? Explore the glossary of workouts at your
          leisure.
          <Link to="/browse-exercises">Browse</Link>
        </div>
      </section>
    </div>
  );
}
