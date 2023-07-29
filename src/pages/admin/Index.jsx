import React from "react";
import { Suspense } from "react";

export default function Index() {
  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }

  React.useEffect(() => {
    console.log("admin");
  }, []);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-row justify-between">
          <h1>Admin</h1>
          <h2>Loading</h2>
        </div>
      </Suspense>
    </div>
  );
}
