import React from "react";
import Card from "../../../components/Card";

export default function Index() {
    const data = [
        {
            title: "Events",
            text: "Check out all the events",
        },
        {
            title: "Attendees",
            text: "Check out all the attendees",    
        }
    ];
  return (
    <div class="flex w-full flex-row flex-wrap gap-4 p-6">
      <div class="my-4 grid w-full grid-cols-2 gap-4">
        
        <div class="flex h-40 w-full col-span-2 items-center justify-center border-2 border-dashed border-border bg-gray-1">
          <h1 class="text-xl font-bold text-navy-700 dark:text-white">
            Welcome to Admin Dashboard
          </h1>
        </div>
        

        {data.map((item) => (
            <Card title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}
