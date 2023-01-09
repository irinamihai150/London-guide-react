import React from "react";

function Button({ setSelectedButton }) {
  return (
    <div className="btn-container">
      <button
        type="button"
        onClick={() => {
          setSelectedButton("pharmacies");
        }}
      >
        Pharmacies
      </button>
      <button
        type="button"
        onClick={() => {
          setSelectedButton("colleges");
        }}
      >
        Colleges
      </button>
      <button
        type="button"
        onClick={() => {
          setSelectedButton("hospitals");
        }}
      >
        Hospitals
      </button>
      <button
        type="button"
        onClick={() => {
          setSelectedButton("doctors");
        }}
      >
        Doctors
      </button>
    </div>
  );
}

export default Button;
