import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiService from "../../../service/Api";
import Swal from "sweetalert2";
import { shortName } from "../../../utils/shortName";

export default function report() {
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      <h1 className="text-4xl font-bold">Laporan Presensi</h1>
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
                    <Link
                        to={`/admin/report/${item.id}/event`}
                        className="btn btn-primary"
                    >
                        Detail
                    </Link>
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
