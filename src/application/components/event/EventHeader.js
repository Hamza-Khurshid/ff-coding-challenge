import React, { memo } from 'react';
import "./events.css";

export default memo(function EventHeader({ changeHandler }) {
    return (
        <div className="header-container">
            <h2 className="events-heading">Events</h2>
            <input onChange={changeHandler} placeholder="Search..." className="search-input" />
        </div>
    )
});
