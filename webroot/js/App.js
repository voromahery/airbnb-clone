import React, { useEffect, useState } from 'react';
import stays from '../../stays.json';
import Stay from './Stay.js';

// To make it display only six apartment
stays.length = 6;

function App() {
    const [apartment, setApartment] = useState(stays);
    const [searchStay, setSearchStay] = useState("");

    // Adding different id to each object
    const id = apartment.forEach((stay, index) => stay.id = Date.now() + index);

    const handleChange = e => {
        const form = e.currentTarget;
        const data = form.value;

        // let searchList = apartment.map(stay => {
        //     return (stay.city.toLowerCase());
        // })

        // console.log("map", searchList);

        if (apartment !== "") {
            const nameList = apartment.filter(stay => stay.city.toLowerCase().includes(data.toLowerCase()));
            console.log("name",nameList);
            setSearchStay(nameList);
            return nameList;
        } 
        else {
            setSearchStay(apartment);
        }
    }

    return (
        <>
            <div>
                <header className="header">
                    <h1 className="page-title">
                        <a href="/" className="page-title-link">Windbnb</a>
                    </h1>
                    <form className="search-form">
                        <label htmlFor="search"></label>
                        <input type="text" name="search-place" id="search" onChange={handleChange} className="search" />
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
                <Stay key={stay.id} stay={stay}/>
            )}
        </>
    )
}

export default App;