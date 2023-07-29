import React from "react";

export default function Modal() {
  return (
    <div className="modal">
      <label className="modal-overlay"></label>
      <div className="modal-content flex flex-col gap-5">
        <label
          htmlFor="modal-3"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </label>
        <h2 className="text-xl">{title}</h2>
        <span>{text}</span>
        <div className="flex gap-3">
          <button className="btn btn-error btn-block">Delete</button>
          <button className="btn btn-block">Cancel</button>
        </div>
      </div>
    </div>
  );
}
