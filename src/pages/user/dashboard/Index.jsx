import React from "react";
import Card from "../../../components/Card";
import apiService from "../../../service/Api";
import EventCard from "../../../components/EventCard";
import { shortName } from "../../../utils/shortName";
import { Link } from "react-router-dom";

export default function Index() {
  const [event, setEvent] = React.useState(null);
  const [time, setTime] = React.useState(new Date().toLocaleString());
  const data = [
    {
      title: "Events",
      text: "Check out all the events",
    },
    {
      title: "History",
      text: "Check out all outdated events",
    },
  ];

  const getUpcomingEvents = async () => {
    try {
      const response = await apiService.get("/upcoming");
      setEvent(response.data.data.data);
      console.log(response.data.data);
      console.log(event);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    getUpcomingEvents();
  }, []);

  return (
    <div class="flex w-full flex-row flex-wrap gap-4 p-6">
      <div class="my-4 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="flex h-40 w-full col-span-2 items-center justify-center border-2 border-dashed border-border bg-gray-1">
          {time}
        </div>
        <div className="card hidden lg:block lg:row-span-3">
          <div className="w-full text-center">
            <h4 class="text-xl font-bold text-navy-700 dark:text-white">
              Upcoming Events
            </h4>
            <p class="px-2 text-base text-gray-600">List of upcoming events</p>
          </div>
          {/* rendering list here */}
          <div className="overflow-auto h-80">
            {event ? (
              event.map((item) => (
                <Link to={`/user/event/${item.id}`}>
                  <EventCard name={item.nama} date={shortName(item.dateTime)} />
                </Link>
              ))
            ) : (
              <div className="flex justify-center">
                <div className="spinner-simple"></div>
              </div>
            )}
          </div>
          {/* rendering list ends here */}
        </div>
        {data.map((item) => (
          <div className="col-span-2 lg:col-span-1 w-full">
            <Card title={item.title} text={item.text} />
          </div>
        ))}
      </div>
    </div>
  );
}
