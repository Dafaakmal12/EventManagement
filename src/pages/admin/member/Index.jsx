import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiService from "../../../service/Api";
import Swal from "sweetalert2";
export default function Index() {
  const [data, setData] = useState(null);
  const [links, setLinks] = useState(null);
  const getData = async (page) => {
    try {
      const response = await apiService.get(`/user?page=${page}`);
      setData(response.data.data.data);
      setLinks(response.data.data.links);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      const response = await apiService.delete(`/user/${id}`);
      console.log(response);
      getData();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.message,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold">Anggota</h1>
      <div className="flex flex-row justify-between">
        <h2>Daftar Anggota</h2>
        <Link className="btn btn-active" to="/admin/member/create">
          Tambah Anggota
        </Link>
      </div>
      <div className="flex flex-col w-full overflow-x-auto my-2">
        <table className="table-hover table overflow-x-auto">
          <thead>
            <tr>
              <th>NRA</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Password</th>
              <th>Fakultas</th>
              <th>Jurusan</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item.nra}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.fakultas}</td>
                  <td>{item.jurusan}</td>
                  <td>
                    <div className="btn-group btn-group-scrollable">
                      <button class="text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-file-edit"
                        >
                          <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
                          <polyline points="14 2 14 8 20 8" />
                          <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => deleteData(item.id)}
                        class="text-red-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-x-circle"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="m15 9-6 6" />
                          <path d="m9 9 6 6" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">
                  <div className="spinner-simple"></div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="pagination my-2">
          {links &&
            links.map((link, index) => (
              <button
                key={index}
                className={`btn ${link.active ? "btn-active" : ""}`}
                onClick={() => getData(link.label)}
              >
                {link.label}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
