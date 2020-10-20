import React, { useEffect, useState } from 'react';
import stays from '../../stays.json'

// To make it display only six apartment
    stays.length = 6;

function App() {
    const [apartment, setApartment] = useState(stays);

    // Adding different id to each object
    const id = apartment.forEach((stay, index) => stay.id = Date.now() + index);
    console.log(apartment);

    return (
        <>
            {apartment.map(stay =>
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
            )}
        </>
    )
}

export default App;