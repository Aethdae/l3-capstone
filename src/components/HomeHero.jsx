import React from "react";
import { Link } from "react-router-dom";
import {
  buttonClasses,
  callToActionCardClasses,
  ctaButtonClasses,
} from "../css/htmlClasses";

export default function HomeHero({ session }) {
  return (
    <div className="min-h-[90vh] bg-steel-900 gap-4 flex flex-col items-center">
      {!session && (
        <section className="min-h-[30vh] max-w-[90%] flex">
          <div className={callToActionCardClasses.join(" ")}>
            <p className="text-center">
              Create an account to track your workouts.
            </p>
            <p className="text-center"></p>

            <Link to="/login" className={ctaButtonClasses.join(" ")}>
              Sign up
            </Link>
          </div>
        </section>
      )}
      {session && (
        <section className="min-h-[30vh] max-w-[90%] flex">
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
      <section className="min-h-[30vh] max-w-[90%] flex">
        <div className={callToActionCardClasses.join(" ")}>
          <p className="text-center">
            Create custom workouts and save your progress.
          </p>
          <img src="https://www.placehold.co/300" alt="ph-img" />
        </div>
      </section>
      <section className="min-h-[30vh] max-w-[90%] flex">
        <div className={callToActionCardClasses.join(" ")}>
          <p className="text-center">
            Unsure of what to go for? Explore the glossary of workouts at your
            leisure.
          </p>
          <Link to="/browse-exercises" className={ctaButtonClasses.join(" ")}>
            Excercise Gallery
          </Link>
        </div>
      </section>
    </div>
  );
}
