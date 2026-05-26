import React from "react";
import { callToActionCardClasses } from "../css/htmlClasses";

export default function WorkoutPlaceholder() {
  return (
    <div className={callToActionCardClasses.join(" ") + " my-2"}>
      <p>Create some workouts!</p>
    </div>
  );
}
