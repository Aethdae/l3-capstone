import { useEffect } from "react";
import { workouts } from "./assets/exercises";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ExerciseList from "./components/ExerciseList";

export default function App() {
  async function getExercises() {
    console.log(workouts.exercises);
  }
  useEffect(() => {
    getExercises();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/browse-exercises" element={<ExerciseList />} />
      </Routes>
    </div>
  );
}
