"use client"
import React from 'react';
import events from "../../../../../public/data/events";
import EventCard from './EventCard';

const EventsSection = () => {
    return (
        <div className="flex flex-col items-center justify-center mb-36">
            <h1 className="text-5xl font-bold mb-8 text-black">Upcoming Events</h1>
            <div className="flex flex-row flex-wrap justify-center">
                {events.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
        </div>
    );
}

export default EventsSection;
