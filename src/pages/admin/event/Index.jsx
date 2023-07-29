import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiService from "../../../service/Api";
import Swal from "sweetalert2";
import { shortName } from "../../../utils/shortName";

export default function Index() {
  const [data, setData] = useState(null);
  const [links, setLinks] = useState(null);

  const getData = async (page) => {
    try {
      const response = await apiService.get(`/event?page=${page}`);
      setData(response.data.data.data);
      setLinks(response.data.data.links);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      const response = await apiService.delete(`/event/${id}`);
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
    <div className="">
      <h1 className="text-4xl font-bold">Agenda Kegiatan</h1>
      <div className="flex flex-row justify-between">
        <h2>Daftar Agenda</h2>
        <Link className="btn btn-active" to="/admin/event/create">
          Tambah Agenda
        </Link>
      </div>
      <div className="flex flex-col w-full overflow-x-auto my-2">
        <table className="table-hover table overflow-x-auto table-auto md:table-fixed lg:table-fixed">
          <thead>
            <tr>
              <th>Nama Agenda</th>
              <th>Deskripsi</th>
              <th>Tempat</th>
              <th>Tanggal</th>
              <th>Mulai</th>
              <th>Berakhir</th>
              <th>Document</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="truncate">
            {data ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td className="truncate">{item.nama}</td>
                  <td className="truncate">{item.deskripsi}</td>
                  <td>{item.tempat}</td>
                  <td>{shortName(item.dateTime)}</td>
                  <td>{item.startTime}</td>
                  <td>{item.endTime}</td>
                  <td className="truncate">{item.file}</td>
                  <td>
                    <Link to={`/admin/event/edit/${item.id}`}>
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
                    </Link>
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
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="mx-auto">
                  <div className="spinner-simple"></div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
