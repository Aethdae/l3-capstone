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
  const [error, setError] = useState("");

  async function getUserToken() {
    try {
      const { data, err } = await supabase.auth.getSession();
      setSession(data);
      setLoading(false);
    } catch (error) {}
  }

  async function handleSignIn(user) {
    try {
      const { data, err } = await supabase.auth.signUp(user);
      if (err) {
        setError(err.message);
        throw new Error(err);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSignUp(user) {}

  async function handleSignOut(user) {}

  useEffect(() => {
    getUserToken();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home error={error} session={session} loading={loading} />}
        />
        <Route
          path="/login"
          element={<Login error={error} session={session} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard error={error} session={session} />}
        />
        <Route
          path="/browse-exercises"
          element={
            <ExerciseList
              exercises={exercises}
              error={error}
              session={session}
            />
          }
        />
      </Routes>
    </div>
  );
}
