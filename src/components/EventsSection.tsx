// src/components/EventsSection.tsx
import React from 'react';
import '../assets/styles/App.css';

type EventsSectionProps = {};

const EventsSection: React.FC<EventsSectionProps> = () => {
  return (
    <section className="events-section">
      <h2>Upcoming Events</h2>
      <p>Stay tuned for our latest events and activities.</p>
    </section>
  );
};

export default EventsSection;