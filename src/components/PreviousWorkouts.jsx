import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import Loader from "./Loader";
import WorkoutCard from "./WorkoutCard";
import WorkoutPlaceholder from "./WorkoutPlaceholder";
import { exerciseCardClasses, mediumHeaderClasses } from "../css/htmlClasses";

export default function PreviousWorkouts({
  session,
  loading,
  workouts,
  deleteWorkout,
}) {
  return (
    <div className={exerciseCardClasses.join(" ") + " gap-2"}>
      <h2
        className={
          mediumHeaderClasses.join(" ") +
          " rounded-md border-b-2 border-b-steel-900 w-full"
        }
      >
        Previous Workouts
      </h2>
      <ul className="flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-3">
        {loading && <Loader />}
        {!loading && workouts.length < 1 ? (
          <WorkoutPlaceholder />
        ) : (
          workouts.map((workout, index) => (
            <li key={index}>
              <WorkoutCard workout={workout} deleteWorkout={deleteWorkout} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
