import React from "react";
import '../styles/schedule.css';

const schedule = [
    { day: 'Thursday', time: '8:00pm', game: 'Monster Hunter' },
    { day: 'Sunday', time: '6:00pm', game: 'Warframe' },
];

export default function Schedule() {
    return (
        <main id="grid-wrapper">
            <h1 className="grid-item">Stream Schedule:</h1>
            {schedule.map((entry, index) => (
                <React.Fragment key={index}>
                    <div className="grid-item">{entry.day}:</div>
                    <div className="grid-item">{entry.time}</div>
                    <div className="grid-item">{entry.game}</div>
                </React.Fragment>
            ))}
        </main>
    );
}