import React from "react";
import { toUpperString } from "../utils/helperFunctions";
import {
  exerciseCardSpanClasses,
  workoutCardClasses,
} from "../css/htmlClasses";

export default function WorkoutCard({ workout, deleteWorkout }) {
  return (
    <div
      className={
        "flex flex-col gap-2 rounded-xl bg-sapphire-800  border-b-4 border-b-sapphire-900 px-2"
      }
      id="workoutContainer"
    >
      <p className="text-center">
        <span className={exerciseCardSpanClasses.join(" ")}>
          Workout {workout[0].workout_id + 1}:
        </span>
      </p>
      {workout.map((work) => (
        <div
          key={crypto.randomUUID()}
          className="bg-sapphire-600 p-4 flex flex-col gap-2 rounded-xl border-b-4 border-b-sapphire-900"
        >
          <h2 className="text-2xl font-bold text-center">
            {toUpperString(work.exercise)}
          </h2>
          <p className="text-center">Reps done: {work.reps}</p>
        </div>
      ))}
      <p className="text-center">
        Date: {workout[0].time_created.slice(0, 10)}
      </p>
      <div className="text-6xl flex justify-center">
        <div
          onClick={() => {
            deleteWorkout(workout[0].workout_id);
          }}
          className="bg-red-700 text-gray-300 text-shadow-md text-shadow-black rounded-xl px-4 cursor-pointer border-3 border-red-900"
        >
          🗑︎
        </div>
      </div>
    </div>
  );
}
