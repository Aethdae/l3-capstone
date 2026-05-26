import React from "react";
import { Link } from "react-router-dom";
import {
  buttonClasses,
  callToActionCardClasses,
  ctaButtonClasses,
  heroSectionClasses,
} from "../css/htmlClasses";

export default function HomeHero({ session }) {
  const exampleImage = new URL("../assets/example.png", import.meta.url).href;

  return (
    <div className="min-h-[90vh] bg-steel-900 gap-4 flex flex-col items-center">
      {!session && (
        <section className={heroSectionClasses.join(" ")}>
          <div className={callToActionCardClasses.join(" ")}>
            <p className="text-center">
              Create a free account to track your workouts.
            </p>
            <p className="text-center">
              Keep up with your goals and gains easily.
            </p>

            <Link to="/login" className={ctaButtonClasses.join(" ")}>
              Sign up
            </Link>
          </div>
        </section>
      )}
      {session && (
        <section className={heroSectionClasses.join(" ")}>
          <div className={callToActionCardClasses.join(" ")}>
            <p className="text-center">
              Explore your workouts and manage your saved goals.
            </p>{" "}
            <Link to="/dashboard" className={ctaButtonClasses.join(" ")}>
              Dashboard
            </Link>
          </div>
        </section>
      )}
      <section className={heroSectionClasses.join(" ")}>
        <div className={callToActionCardClasses.join(" ")}>
          <p className="text-center">
            Create custom workouts and save your progress.
          </p>
          <img src={exampleImage} alt="exercise example" />
        </div>
      </section>
      <section className={heroSectionClasses.join(" ")}>
        <div className={callToActionCardClasses.join(" ")}>
          <p className="text-center">
            Unsure of what to go for? Explore the glossary of workouts at your
            leisure.
          </p>
          <Link to="/browse-exercises#" className={ctaButtonClasses.join(" ")}>
            Excercise Gallery
          </Link>
          <p className="text-center">
            Once you have a plan in mind, create an account and add it!
          </p>
        </div>
      </section>
    </div>
  );
}
