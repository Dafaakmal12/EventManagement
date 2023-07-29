import React from "react";

export default function Card({ title, text }) {
  return (
    <div className="card w-full">
      <div className="card-body text-left">
        <h2 className="card-header">{title}</h2>
        <p className="text-content">{text}</p>
        <div className="card-footer">
          <button className="btn-secondary btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}
