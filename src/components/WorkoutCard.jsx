import React from "react";
import { toUpperString } from "../utils/helperFunctions";
import { exerciseCardClasses } from "../css/htmlClasses";

export default function WorkoutCard({ workout }) {
  return (
    <div className={exerciseCardClasses.join(" ")} id="workoutContainer">
      <p>Workout Number: {workout[0].workout_id + 1}</p>
      {workout.map((work) => (
        <div key={crypto.randomUUID()}>
          <p>{toUpperString(work.exercise)}</p>
          <p>Reps done: {work.reps}</p>
        </div>
      ))}
    </div>
  );
}
