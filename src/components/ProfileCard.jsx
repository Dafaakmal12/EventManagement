import React from "react";

export default function ProfileCard({ title, text }) {
  return (
    <div className="card">
      <div className="flex flex-col p-2 text-left">
        <h2 className="">{title}</h2>
        <p className="text-content3">{text}</p>
      </div>
    </div>
  );
}
