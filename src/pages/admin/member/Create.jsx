import React from "react";
import apiService from "../../../service/Api";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);
    try {
      const response = await apiService.post("/user", data);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.message,
      });
      setLoading(false);
      navigate("/admin/member");
    } catch (error) {
      console.log(error);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  };

  return (
    <section className="bg-gray-2 rounded-xl">
      <div className="flex flex-row justify-between p-6">
        <h1 className="text-2xl font-bold">Add Member</h1>
        <Link to="/admin/member" className="btn btn-primary">
          Back
        </Link>
      </div>
      <div className="p-2 shadow-lg">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="w-full">
            <label className="sr-only" htmlFor="name">
              NRA
            </label>
            <input
              className="input input-solid max-w-full"
              placeholder="NRA"
              type="text"
              id="name"
              name="nra"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">
                Fakultas
              </label>
              <input
                className="input input-solid"
                placeholder="Fakultas"
                type="text"
                id="text"
                name="fakultas"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">
                Jurusan
              </label>
              <input
                className="input input-solid"
                placeholder="Jurusan"
                type="text"
                id="text"
                name="jurusan"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="sr-only" htmlFor="name">
              Nama
            </label>
            <input
              className="input input-solid max-w-full"
              placeholder="Nama"
              type="text"
              id="name"
              name="name"
            />
          </div>

          <div className="w-full">
            <label className="sr-only" htmlFor="name">
              Email
            </label>
            <input
              className="input input-solid max-w-full"
              placeholder="Email"
              type="text"
              id="name"
              name="email"
            />
          </div>

          <div className="w-full">
            <label className="sr-only" htmlFor="name">
              Password
            </label>
            <input
              className="input input-solid max-w-full"
              placeholder="Password"
              type="text"
              id="name"
              name="password"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="rounded-lg btn btn-primary btn-block"
            >
              {loading ? (
                <svg
                  className="spinner-ring spinner-success p-2"
                  viewBox="25 25 50 50"
                  stroke-width="5"
                >
                  <circle cx="50" cy="50" r="20" />
                </svg>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
