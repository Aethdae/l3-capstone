import { spinnerClasses } from "../css/htmlClasses";

export default function Loader() {
  return (
    <img
      className={spinnerClasses.join(" ") + " w-16 h-auto"}
      src="/src/assets/spinner.png"
      alt="loading spinner"
    />
  );
}
