import { useEffect, useState } from "react";
import { exercises } from "./assets/exercises";
import { Navigate, Route, Routes, ScrollRestoration } from "react-router-dom";
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
      if (data.session) {
        setSession(data.session);
      }
      setLoading(false);
    } catch (error) {}
  }

  async function handleLogIn(user) {
    try {
      const { data, err } = await supabase.auth.signInWithPassword(user);
      if (err) {
        setError(err.message);
        throw new Error(err);
      }
      if (data.session) {
        setSession(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSignUp(user) {
    try {
      const { data, err } = await supabase.auth.signUp(user);
      if (err) {
        setError(err.message);
        throw new Error(err);
      }
      setSession(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function authChange() {
    const { data } = await supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }

  useEffect(() => {
    authChange();

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
          element={
            session ? (
              <Dashboard session={session} />
            ) : (
              <Login
                error={error}
                session={session}
                handleLogIn={handleLogIn}
                handleSignUp={handleSignUp}
              />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            session ? (
              <Dashboard error={error} session={session} />
            ) : (
              <Navigate to={"/login"} />
            )
          }
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
