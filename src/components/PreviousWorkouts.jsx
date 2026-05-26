import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import Loader from "./Loader";
import WorkoutCard from "./WorkoutCard";
import WorkoutPlaceholder from "./WorkoutPlaceholder";
import { exerciseCardClasses, mediumHeaderClasses } from "../css/htmlClasses";

export default function PreviousWorkouts({ session, loading, workouts }) {
  return (
    <div className={exerciseCardClasses.join(" ")}>
      <ul>
        <h2 className={mediumHeaderClasses.join(" ")}>Previous Workouts</h2>
        <hr />
        {loading && <Loader />}
        {!loading && workouts.length < 1 ? (
          <WorkoutPlaceholder />
        ) : (
          workouts.map((workout, index) => (
            <li key={index}>
              <WorkoutCard workout={workout} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
