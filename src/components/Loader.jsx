import spinner from "../assets/spinner.svg";
import { spinnerClasses } from "../css/htmlClasses";

export default function Loader() {
  return (
    <div className="flex justify-center bg-steel-700 min-h-20 items-center rounded-2xl border-steel-900/70 border-8 px-40 max-w-[60%] mx-auto">
      <img
        className={spinnerClasses.join(" ")}
        src={spinner}
        alt="loading spinner"
      />
    </div>
  );
}
