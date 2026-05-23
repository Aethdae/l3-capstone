import React from "react";
import ExerciseCard from "./ExerciseCard";
import Footer from "./Footer";
import Header from "./Header";

export default function ExerciseList({ exercises }) {
  return (
    <div className="flex flex-col">
      <Header />
      {console.log(exercises)}
      <div id="exerciseContainer" className="flex flex-col gap-4">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.name} exercise={exercise} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
