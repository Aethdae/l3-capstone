import React from "react";
import { exerciseCardSpanClasses } from "../css/htmlClasses";
import { toUpperString } from "../utils/helperFunctions";

export default function ExerciseCard({ exercise }) {
  return (
    <div className="flex flex-col justify-center items-center bg-steel-600 shadow-md mx-4 border-2 border-steel-900/40 rounded-xl text-white p-2 ">
      <h2 className=" bg-coffee-400 font-bold text-xl w-full text-black text-center border-coffee-600 rounded-4xl border-2">
        {toUpperString(exercise.name)}
      </h2>
      <p>
        <span className={exerciseCardSpanClasses.join(" ")}>Level</span>:{" "}
        {toUpperString(exercise.level)}
      </p>
      {exercise.mechanic && (
        <p>
          <span className={exerciseCardSpanClasses.join(" ")}>Mechanic</span>:{" "}
          {toUpperString(exercise.mechanic)}
        </p>
      )}
      <p>
        <span className={exerciseCardSpanClasses.join(" ")}>Equipment</span>:{" "}
        {toUpperString(exercise.equipment)}
      </p>
      <p>
        <span className={exerciseCardSpanClasses.join(" ")}>Category</span>:{" "}
        {toUpperString(exercise.category)}
      </p>
      <ul className="self-start">
        {exercise.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>
      {exercise.primaryMuscles.length > 0 && (
        <>
          <h2
            className={"font-bold text-xl " + exerciseCardSpanClasses.join(" ")}
          >
            Primary Muscles
          </h2>
          <ul className="flex flex-col items-center">
            {exercise.primaryMuscles.map((muscle) => (
              <li key={muscle}>{toUpperString(muscle)}</li>
            ))}
          </ul>
        </>
      )}
      {exercise.secondaryMuscles.length > 0 && (
        <>
          <h2
            className={"font-bold text-xl " + exerciseCardSpanClasses.join(" ")}
          >
            Secondary Muscles
          </h2>
          <ul className="flex flex-col items-center">
            {exercise.secondaryMuscles.map((muscle) => (
              <li key={muscle}>{toUpperString(muscle)}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

/*
name: "3/4 Sit-Up",
      force: "pull",
      level: "beginner",
      mechanic: "compound",
      equipment: "body only",
      primaryMuscles: ["abdominals"],
      secondaryMuscles: [],
      instructions: [
        "Lie down on the floor and secure your feet. Your legs should be bent at the knees.",
        "Place your hands behind or to the side of your head. You will begin with your back on the ground. This will be your starting position.",
        "Flex your hips and spine to raise your torso toward your knees.",
        "At the top of the contraction your torso should be perpendicular to the ground. Reverse the motion, going only ¾ of the way down.",
        "Repeat for the recommended amount of repetitions.",
      ],
      category: "strength",
      */
