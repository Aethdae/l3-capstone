import React from "react";

export default function Footer() {
  return (
    <div>
      <hr />
      <div className="flex justify-end text-white py-4 mr-4">
        <p>Copyright &copy; {new Date().getFullYear()} Tyler Long</p>
      </div>
    </div>
  );
}
