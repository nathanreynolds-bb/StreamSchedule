import React from "react";
import '../styles/schedule.css';

const schedule = [
    { day: 'Thursday', time: '8:00pm', game: 'Monster Hunter' },
    { day: 'Sunday', time: '6:00pm', game: 'Warframe' },
];

export default function Schedule() {
    return (
        <div id="background">
            <main id="grid-wrapper">
                <h1 className="grid-item heading">Stream Schedule:</h1>
                    <h2 className="grid-item label day">Day</h2>
                    <h2 className="grid-item label time">Time</h2>
                    <h2 className="grid-item label game">Game</h2>
                {schedule.map((entry, index) => (
                    <React.Fragment key={index}>
                        <div className="grid-item day">{entry.day}:</div>
                        <div className="grid-item time">{entry.time}</div>
                        <div className="grid-item game">{entry.game}</div>
                    </React.Fragment>
                ))}
            </main>
        </div>
    );
}