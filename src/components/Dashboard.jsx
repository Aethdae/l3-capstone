import React, { useEffect, useState } from "react";
import Header from "./Header";
import CreateWorkout from "./CreateWorkout";
import PreviousWorkouts from "./PreviousWorkouts";
import Footer from "./Footer";
import DashHeader from "./DashHeader";
import { supabase } from "../utils/supabase";

export default function Dashboard({ error, session }) {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getPrevWorkouts() {
    try {
      const { data, err } = await supabase
        .from("workouts")
        .select()
        .eq("user_id", session.user.id);
      if (err) {
        throw new Error(err);
      }
      createWorkouts(data);
    } catch (error) {
      console.error(error);
    }
  }
  function createWorkouts(data) {
    const newData = data.reduce((accum, curr) => {
      if (!accum[curr.workout_id]) {
        accum[curr.workout_id] = [];
      }
      accum[curr.workout_id].push({
        exercise: curr.exercise,
        reps: curr.reps,
        workout_id: curr.workout_id,
      });
      return accum;
    }, []);
    setLoading(false);
    setWorkouts(newData);
  }
  useEffect(() => {
    getPrevWorkouts();
  }, []);
  return (
    <div>
      {console.log(session)}
      <DashHeader session={session} />
      <CreateWorkout session={session} getWorkouts={getPrevWorkouts} />
      <PreviousWorkouts
        session={session}
        loading={loading}
        workouts={workouts}
      />
      <Footer />
    </div>
  );
}
