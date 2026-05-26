import { useState } from "react";
import { exercises } from "../assets/exercises";
import { toUpperString, toUpperStringLimited } from "../utils/helperFunctions";
import {
  buttonClasses,
  listClasses,
  mediumHeaderClasses,
  selectMenuClasses,
  textInputClasses,
} from "../css/htmlClasses";
import { supabase } from "../utils/supabase";

export default function CreateWorkout({ session, getWorkouts }) {
  const [newWorkout, setNewWorkout] = useState([]);
  const [currExercise, setCurrExercise] = useState("");
  const [reps, setReps] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (reps <= 0 || currExercise === "") {
      return;
    }
    setNewWorkout([...newWorkout, { exercise: currExercise, reps: reps }]);
    setReps("");
    setCurrExercise("");
  }
  async function prepareDataForDB() {
    let id = 0;
    const currentWorkoutId = await supabase
      .from("workouts")
      .select()
      .order("workout_id", { ascending: false });
    if (currentWorkoutId.data.length > 0) {
      id = currentWorkoutId.data[0].workout_id + 1;
    }
    console.log(id);
    const data = newWorkout.map((exercise) => {
      return { ...exercise, workout_id: id, user_id: session.user.id };
    });
    return data;
  }
  async function handleAddWorkout(e) {
    e.preventDefault();
    const preparedData = await prepareDataForDB();
    const { data, err } = await supabase.from("workouts").insert(preparedData);
    clearValues();
    getWorkouts();
  }
  function clearValues() {
    setReps("");
    setNewWorkout([]);
    setCurrExercise("");
  }
  return (
    <div className="flex flex-col items-center">
      <form
        className="flex flex-col p-12 w-full items-center gap-6 bg-steel-700 text-white py-10"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label className="flex gap-4 items-center">
          Exercise
          <select
            className={selectMenuClasses.join(" ")}
            value={currExercise}
            onChange={(e) => {
              setCurrExercise(e.target.value);
            }}
            name="exercise"
            id="exercise"
          >
            <option value="">Select an exercise to add.</option>
            {exercises.map((exercise) => (
              <option key={exercise.name} value={exercise.name}>
                {window.innerWidth < 500
                  ? toUpperStringLimited(exercise.name)
                  : toUpperString(exercise.name)}
              </option>
            ))}
          </select>
        </label>
        <label className="flex gap-4 items-center">
          Reps
          <input
            className={textInputClasses.join(" ")}
            value={reps}
            onChange={(e) => {
              setReps(e.target.value);
            }}
            type="number"
            name="reps"
            id="reps"
          />
        </label>
        <button className={buttonClasses.join(" ")}>Add to Workout</button>
      </form>
      <div className="flex flex-col w-full items-center gap-2 text-center">
        <h2 className={mediumHeaderClasses.join(" ") + " w-full"}>
          Current Workout
        </h2>
        {newWorkout.length > 0 && (
          <ul className={listClasses.join(" ")} id="currentWorkoutContainer">
            {newWorkout.map((exercise) => (
              <li
                className="border-b-2 border-b-sapphire-900 border-t-2 border-t-sapphire-900 px-2 border-x-4 border-x-steel-900 rounded-xl md:px-6 lg:px-8 h-full w-full max-w-[60%]"
                key={crypto.randomUUID()}
              >
                <p>{exercise.exercise}</p>
                <p>Reps: {exercise.reps}</p>
              </li>
            ))}
          </ul>
        )}
        <form
          className="flex flex-col items-center w-full gap-6 bg-steel-700 text-white"
          onSubmit={(e) => {
            handleAddWorkout(e);
          }}
        >
          <button className={buttonClasses.join(" ")}>Submit Workout</button>
        </form>
      </div>
      <hr />
    </div>
  );
}
