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

  async function deleteWorkout(id) {
    const { err } = await supabase
      .from("workouts")
      .delete()
      .eq("workout_id", id);
    getPrevWorkouts();
  }

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
        time_created: curr.time_created,
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
    <div className="bg-steel-700">
      <DashHeader session={session} />
      <CreateWorkout session={session} getWorkouts={getPrevWorkouts} />
      <PreviousWorkouts
        session={session}
        loading={loading}
        workouts={workouts}
        deleteWorkout={deleteWorkout}
      />
      <Footer />
    </div>
  );
}
