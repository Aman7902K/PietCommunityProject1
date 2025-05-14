import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; 

const EventsCalendar = () => {
  const events = [
    { title: 'Event 1', date: '2025-06-01' },
    { title: 'Meeting', date: '2025-06-05' },
    { title: 'Hackathon', date: '2025-06-10' },
    { title: 'Cybersecurity Workshop', date: '2025-05-14' },
  ];

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
        className="text-wrap text-sm"
      />
    </div>
  );
};

export default EventsCalendar;
