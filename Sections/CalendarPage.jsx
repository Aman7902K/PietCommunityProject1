import React from 'react';
import EventsCalendar from '../Components/EventsCalendar';

const CalendarPage = () => {
  return (
    <div className=" flex flex-col justify-center min-h-screen  bg-white p-24">
      <div> <h1 className="text-3xl font-bold text-center mb-6 ">College Events Calendar</h1></div>
      <div><EventsCalendar /></div>
    </div>
  );
};

export default CalendarPage;
