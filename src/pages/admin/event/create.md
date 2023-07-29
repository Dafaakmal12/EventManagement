
```
import React, { useState } from "react";
import apiService from "../../../service/Api";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";

export default function Create() {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();

      // Append other form fields to the formData
      formData.append("nama", e.target.nama.value);
      formData.append("tempat", e.target.tempat.value);
      formData.append("deskripsi", e.target.deskripsi.value);
      formData.append("tanggal", e.target.tanggal.value);
      formData.append("startTime", e.target.startTime.value);
      formData.append("endTime", e.target.endTime.value);
      formData.append("file", file);

      const response = await apiService.post("/event", formData);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.message,
      });
      setLoading(false);
      navigate("/admin/event");
      console.log(response);
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
        <h1 className="text-2xl font-bold">Create Event</h1>
        <Link to="/admin/event" className="btn btn-primary">
          Back
        </Link>
      </div>
      <div className="p-2 shadow-lg">
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="w-full">
            <label className="sr-only" htmlFor="name">
              Nama Event
            </label>
            <input
              className="input input-solid max-w-full"
              placeholder="nama event"
              type="text"
              id="name"
              name="nama"
            />
          </div>

          <div className="w-full">
            <label className="sr-only" htmlFor="name">
              Tempat
            </label>
            <input
              className="input input-solid max-w-full"
              placeholder="Tempat"
              type="text"
              id="name"
              name="tempat"
            />
          </div>
          <div className="w-full">
            <label className="sr-only" htmlFor="name">
              Deskripsi
            </label>
            <textarea
              className="input input-solid max-w-full"
              placeholder="Deskripsi"
              type="text"
              id="name"
              name="deskripsi"
            />
          </div>
          <div className="w-full">
            <label className="sr-only" htmlFor="name">
              Tanggal(yyyy-mm-dd)
            </label>
            <input
              className="input input-solid max-w-full"
              placeholder="Tanggal"
              type="date"
              id="name"
              name="tanggal"
            />
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">
                Mulai
              </label>
              <input
                className="input input-solid"
                placeholder="Mulai"
                type="time"
                id="text"
                name="startTime"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">
                Berakhir
              </label>
              <input
                className="input input-solid"
                placeholder="Berakhir"
                type="time"
                id="text"
                name="endTime"
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="phone">
              Upload File
            </label>
            <input
              className="input input-solid"
              placeholder="Upload File"
              type="file"
              id="text"
              name="file"
              onChange={handleFile}
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
```

```
import React, { useState } from "react";
import apiService from "../../../service/Api";

export default function Create() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const [data, setData] = useState({
    nama: "",
    deskripsi: "",
    tempat: "",
    dateTime: "",
    startTime: "",
    endTime: "",
    file: selectedFile,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedFile);

    // Lakukan sesuatu dengan file yang dipilih, misalnya kirim ke server menggunakan fetch API
    // Contoh:
    // const formData = new FormData();
    // formData.append('pdfFile', selectedFile);
    // fetch('/upload', {
    //   method: 'POST',
    //   body: formData,
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error));

    // Setel kembali state ke null setelah unggahan berhasil
    try {
      const formData = new FormData();
      formData.append("nama", data.nama);
      formData.append("deskripsi", data.deskripsi);
      formData.append("tempat", data.tempat);
      formData.append("dateTime", data.dateTime);
      formData.append("startTime", data.startTime);
      formData.append("endTime", data.endTime);
      formData.append("file", selectedFile);
      const response = apiService.post("/event", formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setSelectedFile(null);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col" encType="multipart/form-data">
      <div className="flex flex-col">
        <label htmlFor="nama">Nama</label>
        <input
          type="text"
          name="nama"
          id="nama"
          value={data.nama}
          onChange={(e) => setData({ ...data, nama: e.target.value })}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="deskripsi">Deskripsi</label>
        <input
          type="text"
          name="deskripsi"
          id="deskripsi"
          value={data.deskripsi}
          onChange={(e) => setData({ ...data, deskripsi: e.target.value })}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="tempat">Tempat</label>
        <input
          type="text"
          name="tempat"
          id="tempat"
          value={data.tempat}
          onChange={(e) => setData({ ...data, tempat: e.target.value })}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="dateTime">Tanggal</label>
        <input
          type="date"
          name="dateTime"
          id="dateTime"
          value={data.dateTime}
          onChange={(e) => setData({ ...data, dateTime: e.target.value })}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="startTime">Waktu Mulai</label>
        <input
          type="time"
          name="startTime"
          id="startTime"
          value={data.startTime}
          onChange={(e) => setData({ ...data, startTime: e.target.value })}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="endTime">Waktu Selesai</label>
        <input
          type="time"
          name="endTime"
          id="endTime"
          value={data.endTime}
          onChange={(e) => setData({ ...data, endTime: e.target.value })}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="file">File</label>
        <input type="file" name="file" id="file" onChange={handleFileChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
```