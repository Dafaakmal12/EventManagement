import React from "react";

export default function EventCard({name, date}) {
  return (
      <div className="my-2 flex w-full items-start justify-between rounded-2xl card p-3 text-left dark:bg-white">
        <div className="overflow-auto">
          <div class="ml-4">
            <h4 class="font-bold text-black">{name}</h4>
            <p class="mt-2 text-sm text-gray-600">{date}</p>
          </div>
        </div>
      </div>
  );
}
