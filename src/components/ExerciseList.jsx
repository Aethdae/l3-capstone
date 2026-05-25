import React from "react";
import ExerciseCard from "./ExerciseCard";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import { toUpperString } from "../utils/helperFunctions";
import { buttonClasses, selectMenuClasses } from "../css/htmlClasses";

export default function ExerciseList({ exercises, error }) {
  const [filter, setFilter] = useState("");

  return (
    <div className="flex flex-col gap-4 bg-steel-800">
      <Header />
      <div className="flex justify-center mx-auto bg-sapphire-600 py-4 rounded-xl border-4 border-sapphire-800/40 w-full">
        <label className="flex gap-4 items-center text-white">
          Filter by category
          <select
            className={selectMenuClasses.join(" ")}
            name="filter"
            id="filter"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          >
            <option value="">Filter by category...</option>
            {exercises
              .reduce((arr, curr) => {
                if (!arr.includes(curr.category)) {
                  arr.push(curr.category);
                }
                return arr;
              }, [])
              .map((category) => (
                <option key={category} value={category}>
                  {toUpperString(category)}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div id="exerciseContainer" className="flex flex-col gap-4">
        {filter &&
          exercises
            .filter((exercise) => exercise.category == filter)
            .map((exercise) => (
              <ExerciseCard key={exercise.name} exercise={exercise} />
            ))}
        {!filter &&
          exercises.map((exercise) => (
            <ExerciseCard key={exercise.name} exercise={exercise} />
          ))}
      </div>
      <Footer />
    </div>
  );
}
