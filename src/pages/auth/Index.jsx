import React from "react";
import apiService from "../../service/Api";
import Swal from "sweetalert2";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      apiService
        .post("/login", {
          email: e.target.email.value,
          password: e.target.password.value,
        })
        .then((res) => {
          console.log(res.data.data.role);
          if (res.data.success === true) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: res.message,
            });
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.data.role);
            localStorage.setItem("id", res.data.data.id);
            if (res.data.data.role === "admin") {
              navigate("/admin");
            }
            if (res.data.data.role === "user") {
              navigate("/user");
            }
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: res.message,
            });
          }
        });
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message,
      });
    }
  };
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Sign In</h1>
        <p className="text-sm">Sign in Dafa to access your account</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="form-group">
          <div className="form-field">
            <label className="form-label">Email address</label>

            <input
              placeholder="Type here"
              type="text"
              className="input max-w-full"
              name="email"
            />
          </div>
          <div className="form-field">
            <label className="form-label">Password</label>
            <div className="form-control">
              <input
                placeholder="Type here"
                type="password"
                className="input max-w-full"
                name="password"
              />
            </div>
          </div>
          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button type="submit" className="btn btn-primary w-full">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
