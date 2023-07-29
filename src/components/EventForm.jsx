import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const EventForm = () => {
  const navigate = useNavigate();
  const api = import.meta.env.VITE_API_URL + "/event";
  const [formData, setFormData] = useState({
    nama: "",
    tempat: "",
    deskripsi: "",
    dateTime: "",
    startTime: "",
    endTime: "",
    file: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      file: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Buat objek FormData untuk mengirim data ke API
    const formDataToSend = new FormData();
    formDataToSend.append("nama", formData.nama);
    formDataToSend.append("tempat", formData.tempat);
    formDataToSend.append("deskripsi", formData.deskripsi);
    formDataToSend.append("dateTime", formData.dateTime);
    formDataToSend.append("startTime", formData.startTime);
    formDataToSend.append("endTime", formData.endTime);
    formDataToSend.append("file", formData.file);

    // Kirim data ke API menggunakan fetch
    fetch(api, {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Tanggapan dari backend
        // Lakukan sesuatu setelah data berhasil disimpan, seperti menampilkan notifikasi atau mengarahkan ke halaman lain.
        Swal.fire({
          icon: "success",
          title: "Success",
          text: data.message,
        });
        navigate("/admin/event");
      })
      .catch((error) => {
        console.error(error);
        // Tangani kesalahan jika ada.
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      });
  };

  return (
    <section className="bg-gray-2 rounded-xl p-4">
      <div className="flex flex-row justify-between p-6">
        <h1 className="text-2xl font-bold">Add Event</h1>
        <Link to="/admin/event" className="btn btn-primary">
          Back
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>
          Nama:
          <input
            className="input input-solid max-w-full"
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Nama Event"
          />
        </label>
        <label>
          Tempat:
          <input
            className="input input-solid max-w-full"
            type="text"
            name="tempat"
            value={formData.tempat}
            onChange={handleChange}
            placeholder="Tempat"
          />
        </label>
        <label>
          Deskripsi:
          <textarea
            className="input input-solid max-w-full"
            name="deskripsi"
            value={formData.deskripsi}
            onChange={handleChange}
            placeholder="Deskripsi"
          />
        </label>
        <label>
          Tanggal
          <input
            className="input input-solid max-w-full"
            type="date"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            placeholder="Tanggal"
          />
        </label>
        <label>
          Mulai:
          <input
            className="input input-solid max-w-full"
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            placeholder="Mulai"
          />
        </label>
        <label>
          Selesai:
          <input
            className="input input-solid max-w-full"
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            placeholder="Selesai"
          />
        </label>
        <label>
          Unggah File PDF:
          <input
            type="file"
            className="input-file input-file-primary my-2"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </label>
        <button className="btn btn-primary my-2" type="submit">
          Simpan
        </button>
      </form>
    </section>
  );
};

export default EventForm;
