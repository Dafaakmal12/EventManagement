import React from "react";
import apiService from "../../../service/Api";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Event() {
  const { id } = useParams();
  const [event, setEvent] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();
  const pdfUrl = `http://onlineattendancesystem.test/api/event/${id}/pdf`;
  const now = new Date();
  const user_id = localStorage.getItem("id");
  const getData = async () => {
    try {
      const response = await apiService.get(`/event/${id}`);
      setEvent(response.data.data);
      setLoading(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAbsen = async () => {
    try {
      const response = await apiService.post("/attendance", {
        id_event: id,
        id_user: user_id,
        tanggal: new Date().toISOString().slice(0, 10),
      });
      console.log(response);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.message,
      });
      navigate("/user");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
      navigate("/user");
    }
  };

  React.useEffect(() => {
    getData();
    console.log(now.toISOString().slice(0, 10));
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
          {event.file}
        </p>
      </div>
      <iframe
        src={pdfUrl}
        title="PDF Viewer"
        width="100%"
        height="500px"
        style={{ border: "none" }}
      />
      <div className="flex flex-col justify-center">
          <button className="btn btn-primary" onClick={handleAbsen}>
            Absen
          </button>
      </div>
    </section>
  );
}
