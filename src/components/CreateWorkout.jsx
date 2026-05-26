import { useState } from "react";
import { exercises } from "../assets/exercises";
import { toUpperString } from "../utils/helperFunctions";
import {
  buttonClasses,
  listClasses,
  selectMenuClasses,
  textInputClasses,
} from "../css/htmlClasses";
import { supabase } from "../utils/supabase";

export default function CreateWorkout({ session, getWorkouts }) {
  const [newWorkout, setNewWorkout] = useState([]);
  const [currExercise, setCurrExercise] = useState("");
  const [reps, setReps] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    if (reps <= 0 || currExercise === "") {
      return;
    }
    setNewWorkout([...newWorkout, { exercise: currExercise, reps: reps }]);
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
    setReps(0);
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
              <option key={exercise.name} value={exercise.exercise}>
                {toUpperString(exercise.name)}
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
      <form
        className="flex flex-col p-12 items-center w-full gap-6 bg-steel-700 text-white py-10"
        onSubmit={(e) => {
          handleAddWorkout(e);
        }}
      >
        <button className={buttonClasses.join(" ")}>Submit Workout</button>
      </form>
      <hr />
      <ul className={listClasses.join(" ")} id="currentWorkoutContainer">
        {newWorkout.length > 0 &&
          newWorkout.map((exercise) => (
            <li key={crypto.randomUUID()}>
              <p>{exercise.exercise}</p>
              <p>Reps: {exercise.reps}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
