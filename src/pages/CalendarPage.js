import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useTheme } from '../contexts/ThemeContext';

const CalendarPage = () => {
  const { theme } = useTheme();
  const [events, setEvents] = useState([
    { title: 'Meeting', start: new Date() },
    { title: 'Conference', start: new Date(Date.now() + 86400000), end: new Date(Date.now() + (86400000 * 2)) },
  ]);

  const handleDateClick = (arg) => {
    const title = prompt('Enter event title:');
    if (title) {
      setEvents([...events, { title, start: arg.date, allDay: arg.allDay }]);
    }
  };

  return (
    <div className="p-4">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={events}
        dateClick={handleDateClick}
        editable={true}
        selectable={true}
        themeSystem={theme === 'dark' ? 'dark' : 'standard'}
        height="70vh"
      />
    </div>
  );
};

export default CalendarPage;