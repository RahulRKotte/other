import React from "react";
import { useLocation } from "react-router-dom";

const TrackingPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const ticketId = queryParams.get("ticketId");

  return (
    <div>
      <h1>Tracking Ticket: {ticketId}</h1>
      {/* Render additional tracking details here */}
    </div>
  );
};

export default TrackingPage;
