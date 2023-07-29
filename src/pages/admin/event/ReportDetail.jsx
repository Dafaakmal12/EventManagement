import React from "react";
import apiService from "../../../service/Api";
import { useParams } from "react-router-dom";

export default function ReportDetail() {
  const { id } = useParams();
  const [event, setEvent] = React.useState({});
  const [members, setMembers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const getData = async () => {
    try {
      const response = await apiService.get(`/event/${id}`);
      setEvent(response.data.data);
      setMembers(response.data.data.attendance);
      setLoading(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <section className="card max-w-full">
      <div className="w-full my-2 text-center">
        <h4 className="text-2xl font-bold">{event.nama}</h4>
        <h2 className="text-md text-navy-700 dark:text-white text-left my-4">
          {event.deskripsi}
        </h2>
        <p className="text-left">
          <span className="font-bold">Tanggal: </span>
          {event.dateTime}
        </p>
        <p className="text-left">
          <span className="font-bold">Tempat: </span>
          {event.tempat}
        </p>
        <p className="text-left">
          <span className="font-bold">Mulai: </span>
          {event.startTime}
        </p>
        <p className="text-left">
          <span className="font-bold">Berakhir: </span>
          {event.endTime}
        </p>
        <p className="text-left">
          <span className="font-bold">Document: </span>
          {event.file ? event.file : "Tidak ada file"}
        </p>
      </div>
      <div className="w-full my-2 text-center">
        <h4 className="text-2xl font-bold">Daftar Hadir</h4>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Nama</th>
              <th className="px-4 py-2">NIM</th>
            </tr>
          </thead>
          <tbody>
            {members.length > 0 ? (
              members.map((member, index) => (
                <tr key={member.id}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{member.user.name}</td>
                  <td className="border px-4 py-2">{member.user.nra}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="border px-4 py-2 text-center" colSpan="3">
                  Tidak ada data yang hadir
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
