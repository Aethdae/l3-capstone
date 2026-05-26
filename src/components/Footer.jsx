import React from "react";

export default function Footer() {
  return (
    <footer className="bottom-0 w-full">
      <hr />
      <div className="flex justify-end text-white py-4 mr-4">
        <p>Copyright &copy; {new Date().getFullYear()} Tyler Long</p>
      </div>
    </footer>
  );
}
