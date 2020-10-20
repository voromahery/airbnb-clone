import React from 'react';

export default function Stay({ stay }) {
    return (
        <>
            <div className="card" key={stay.id}>
                <img src={stay.photo} className="" alt="" />
                <div className="details">
                    <button className="super-host">Super host</button>
                    <div className="container">
                        <span className="type">{stay.type} </span>
                        <span className="number-of-bed">. {stay.beds} beds</span>
                    </div>
                    <span className="star-rating">{stay.rating}</span>
                </div>
                <p className="title">{stay.title}</p>
            </div>
        </>
    )
} 