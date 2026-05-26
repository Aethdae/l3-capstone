import { spinnerClasses } from "../css/htmlClasses";

export default function Loader() {
  const url = new URL("../assets/spinner.png", import.meta.url).href;
  return (
    <img
      className={spinnerClasses.join(" ") + " w-16 h-auto"}
      src={url}
      alt="loading spinner"
    />
  );
}
