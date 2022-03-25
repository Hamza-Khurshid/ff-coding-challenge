import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLoader from "../../components/AppLoader";
import { loadEvents } from "../../redux/actions/event";
import EventList from "../../components/event/EventList";

export default function Home() {
  const dispatch = useDispatch();
  const { events, loading } = useSelector(({ Event }) => Event);

  useEffect(() => {
    dispatch(loadEvents());
  }, []);

  return loading ? (
    <AppLoader text={"events"} />
  ) : (
    <>
      <EventList events={[...events]} />
    </>
  );
}
