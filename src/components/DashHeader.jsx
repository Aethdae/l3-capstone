import React from "react";
import { Link } from "react-router-dom";
import { bigHeaderClasses, linkButtonClasses } from "../css/htmlClasses";
import { supabase } from "../utils/supabase";

export default function DashHeader({ session }) {
  async function handleSignOut() {
    try {
      const { err } = await supabase.auth.signOut();
      if (err) {
        throw new Error(err);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <header className="border-b-sapphire-500 bg-coffee-900 border-b-8 flex flex-col py-4">
      <h1 className={bigHeaderClasses.join(" ") + " text-center"}>
        Workout Hub
      </h1>
      <nav className="self-center py-3">
        <div className="flex gap-4">
          <Link to="/" className={linkButtonClasses.join(" ")}>
            Home
          </Link>
          <Link to="/browse-exercises" className={linkButtonClasses.join(" ")}>
            Browse Exercises
          </Link>
          <button
            className={linkButtonClasses.join(" ")}
            onClick={() => {
              handleSignOut();
            }}
          >
            Sign Out
          </button>
        </div>
      </nav>
    </header>
  );
}
