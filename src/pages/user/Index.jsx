import React from "react";
import { useState } from "react";
import { Suspense } from "react";
import apiService from "../../service/Api";

export default function index() {
  const [data, setData] = useState(null);
  const getData = async () => {
    try {
      const response = await apiService.get("/user");
      setData(response.data);
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
    <div>
      <Suspense fallback={<Loading />}>
        <h1>asu kontol</h1>
      </Suspense>
    </div>
  );
}
