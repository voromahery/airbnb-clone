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
            <div>
                <header className="header">
                    <h1 className="page-title">
                        <a href="/" className="page-title-link">Windbnb</a>
                    </h1>
                    <form className="search-form">
                        <label htmlFor="search"></label>
                        <input type="text" name="search-place" id="search" className="search" />
                        <input type="text" name="add-guest" id="addGuest" className="add-guest" placeholder="Add guest" />
                        <button className="search-button">Search</button>
                    </form>
                </header>
                <div className="stay-details">
                    <h2 className="heading">Stay in Finland</h2>
                    <span className="number-of-stays">12+ stays</span>
                </div>
            </div>
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