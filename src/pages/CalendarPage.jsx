import React, { useState } from 'react';

function CalendarPage({ isCollapsed }) {
  const [currentWeekStart, setCurrentWeekStart] = useState(() => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    return new Date(today.setDate(diff));
  });

  const generateCalendarData = (year) => {
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);
    const calendar = [];
    const sampleEvents = [
      { type: 'Class Meeting', description: 'CS101 Discussion, Room A-203, 10 AM' },
      { type: 'Quiz', description: 'Math101 Quiz, 2 PM' },
      { type: 'Test', description: 'Physics101 Midterm, 9 AM - 11 AM' },
    ];
    const holidays = {
      '2025-03-18': 'Holi',
      '2025-04-15': 'Mid-Term Break',
      '2025-12-25': 'Christmas',
    };

    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      const dateStr = currentDate.toISOString().split('T')[0];
      const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });
      const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;

      calendar.push({
        day: dayOfWeek,
        date: currentDate.toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        status: holidays[dateStr] ? 'Holiday' : (isWeekend ? 'Weekend' : 'Present'),
        holidayName: holidays[dateStr] || '',
        events: isWeekend || holidays[dateStr]
          ? []
          : [sampleEvents[Math.floor(Math.random() * sampleEvents.length)]],
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return calendar;
  };

  const fullCalendar = generateCalendarData(2025);

  const getWeekDates = (start) => {
    const week = [];
    const tempDate = new Date(start);
    for (let i = 0; i < 7; i++) {
      const dayEntry = fullCalendar.find((entry) =>
        entry.date === tempDate.toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      );
      week.push(dayEntry);
      tempDate.setDate(tempDate.getDate() + 1);
    }
    return week;
  };

  const currentWeek = getWeekDates(currentWeekStart);

  const goToPreviousWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() - 7);
    setCurrentWeekStart(newStart);
  };

  const goToNextWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() + 7);
    setCurrentWeekStart(newStart);
  };

  return (
    <div className={`content ${isCollapsed ? 'collapsed' : ''}`}>
      <h1>Calendar</h1>
      <section className="calendar-section">
        <div className="calendar-content">
          <div className="calendar-grid">
            {currentWeek.map((entry, index) => (
              <div className="calendar-card" key={index}>
                <div className="calendar-header">
                  <h3>{entry.day}</h3>
                  <p className="date">{entry.date}</p>
                </div>
                <div className="calendar-status">
                  <span className="label">Status:</span>
                  <span className={`value ${entry.status.toLowerCase()}`}>
                    {entry.status === 'Holiday'
                      ? `${entry.holidayName} (Holiday)`
                      : entry.status}
                  </span>
                </div>
                <div className="calendar-events">
                  <h4>Events:</h4>
                  {entry.events.length > 0 ? (
                    <ul>
                      {entry.events.map((event, idx) => (
                        <li key={idx} className={`event-${event.type.toLowerCase().replace(' ', '-')}`}>
                          <strong>{event.type}:</strong> {event.description}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No events scheduled.</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="calendar-controls">
          <button className="carousel-btn prev" onClick={goToPreviousWeek}>
            ‹ Previous Week
          </button>
          <button className="carousel-btn next" onClick={goToNextWeek}>
            Next Week ›
          </button>
        </div>
      </section>
    </div>
  );
}

export default CalendarPage;