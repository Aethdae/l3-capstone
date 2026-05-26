import React from "react";
import Header from "./Header";
import CreateWorkout from "./CreateWorkout";
import PreviousWorkouts from "./PreviousWorkouts";
import Footer from "./Footer";

export default function Dashboard({ error, session }) {
  return (
    <div>
      <Header session={session} />
      <CreateWorkout />
      <PreviousWorkouts />
      <Footer />
    </div>
  );
}
