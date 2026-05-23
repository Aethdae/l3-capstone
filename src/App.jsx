import { useEffect, useState } from "react";
import { exercises } from "./assets/exercises";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ExerciseList from "./components/ExerciseList";
import { supabase } from "./utils/supabase";

export default function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getUserToken() {
    try {
      const { data, err } = await supabase.auth.getSession();
      setSession(data);
      setLoading(false);
    } catch (error) {}
  }
  async function getExercises() {
    console.log("Workin.");
  }
  useEffect(() => {
    getExercises();
    getUserToken();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home session={session} loading={loading} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/browse-exercises"
          element={<ExerciseList exercises={exercises} />}
        />
      </Routes>
    </div>
  );
}
