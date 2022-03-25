import "./events.css";
import EventItem from "./EventItem";
import EventHeader from "./EventHeader";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Events({ events }) {
  const [evnts, setEvents] = useState([]);
  const { events: allEvents } = useSelector(({ Event }) => Event);

  useEffect(() => {
    setEvents(events);
  }, [events]);

  const changeHandler = (e) => {
    let query = e.target.value;
    let filteredEvents = allEvents.filter(event => event.title.toLowerCase().includes(query.toLowerCase()));
    setEvents(filteredEvents);
  };

  return (
    <>
      <EventHeader changeHandler={changeHandler} />

      <div className="cards-container">
        {evnts.map((event) => (
          <EventItem
            id={event._id}
            key={event._id}
            date={event.date}
            title={event.title}
            address={event.address}
            category={event.category}
            description={event.description}
          />
        ))}
      </div>
    </>
  );
}
