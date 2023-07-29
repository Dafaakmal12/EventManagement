import React, { useState, Suspense } from "react";
import apiService from "../../../service/Api";
import ProfileCard from "../../../components/ProfileCard";

export default function Index() {
  const [data, setData] = useState(null);
  const id = localStorage.getItem("id");
  const getData = async () => {
    try {
      const response = await apiService.get(`/user/${id}`);
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <section className="card max-w-full">
      <div className="w-full my-2 text-left">
        <h4 className="text-2xl font-bold">Profile Information</h4>
        <p className="text-md text-navy-700 dark:text-white">
          As we live, our hearts turn colder. Cause pain is what we go through
          as we become older. We get insulted by others, lose trust for those
          others. We get back stabbed by friends. It becomes harder for us to
          give others a hand. We get our heart broken by people we love, even
          that we give them all...
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        {data ? (
          <>
            <ProfileCard title="Name" text={data.data.name} />
            <ProfileCard title="Fakultas" text={data.data.fakultas} />
            <ProfileCard title="Jurusan" text={data.data.jurusan} />
            <ProfileCard title="NRA" text={data.data.nra} />
            <ProfileCard title="Email" text={data.data.email} />
            <ProfileCard title="Password" text={data.data.password} />
          </>
        ) : (
          <div class="spinner-dot-pulse">
            <div class="spinner-pulse-dot"></div>
          </div>
        )}
      </div>
    </section>
  );
}
