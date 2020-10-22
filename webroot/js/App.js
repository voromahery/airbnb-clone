import React, { useEffect, useState } from 'react';
import stays from '../../stays.json';
import Stay from './Stay.js';
import SearchModal from './SearchModal.js';

// To make it display only six apartment
stays.length = 6;

function App() {
    const [apartment, setApartment] = useState(stays);
    const [adultNumber, setAdultNumber] = useState(0);
    const [childrenNumber, setChildrenNumber] = useState(0);
    const [showModal, setShowModal] = useState(false);

    // Adding different id to each object
    const stayId = apartment.forEach((stay, index) => stay.id = Date.now() + index);

    const handleChange = e => {
        const form = e.currentTarget;
        const data = form.value;
        if (apartment !== "") {
            let nameList = [];
            nameList = stays.filter(stay => stay.city.toLowerCase().includes(data.toLowerCase()));
            console.log("name", nameList);
            setApartment(nameList);
            return apartment;
        }
    }

    const filteredByguestNumber = () => {
        let increment = [];
        increment = stays.filter(stay => stay.maxGuests > adultNumber + childrenNumber || stay.maxGuests > adultNumber === childrenNumber);
        console.log("name", increment);
        setApartment(increment);
        return apartment;
    }

    const increment = () => {
        console.log('yes');
        setAdultNumber(prevCount => prevCount + 1);
        filteredByguestNumber();
    }

    const decrement = () => {
        let decrement = []
        console.log('yes');
        setAdultNumber(prevCount => prevCount - 1);
        filteredByguestNumber();
    }

    const incrementChildren = () => {
        console.log('yes');
        setChildrenNumber(prevCount => prevCount + 1);
        filteredByguestNumber()
    }

    const decrementChildren = () => {
        console.log('yes');
        setChildrenNumber(prevCount => prevCount - 1);
        filteredByguestNumber();
    }

    const hide = () => {
        setShowModal(false);
    }

    const show = () => {
        setShowModal(true)
    }

    //////////////////////////// MODAL //////////////////////////////////
    return (
        <>
            <div>
                <header className="header">
                    <h1 className="page-title">
                        <a href="/" className="page-title-link">Windbnb</a>
                    </h1>
                    <form className="search-form">
                        <label htmlFor="search"></label>
                        <input type="text" name="search-place" id="search" className="search" defaultValue={`${stays[0].city}, ${stays[0].country}`} />
                        <input type="text" name="add-guest" id="addGuest" className="add-guest" placeholder="Add guest" />
                        <button type="button" className="search-button" onClick={show}>Search</button>
                    </form>
                </header>
                <div className="stay-details">
                    <h2 className="heading">Stay in Finland</h2>
                    <span className="number-of-stays">12+ stays</span>
                </div>
            </div>
            <div className="card-container">
            {apartment.map(stay =>
                <Stay key={stay.id} stay={stay} />
            )}
            </div>
            <div className={showModal?"open":"close"} >
                <div className="modal">
                    <div className="modal-header">
                        <p className="modal-title">Edit your search</p>
                        <button className="remove-modal" onClick={hide}>x</button>
                    </div>
                    <form>
                        <div className="search-container">
                            <label htmlFor="">Location</label>
                            <select onChange={handleChange} className="city-to-stay">
                                <option value={stays[0].city}>{stays[0].city},{stays[0].country}</option>

                                {stays.map(stay => {
                                    return (
                                        <option value={stay.city} key={stay.id}>{stay.city}, {stay.country}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="search-container">
                            <label htmlFor="">Guests</label>
                            <input type="text" className="number-of-guests" placeholder="Add guests" defaultValue={adultNumber}/>
                        </div>
                        <div className="guests-to-host">
                            <h3>Adults</h3>
                            <label>Age 13 or above</label>
                            <button type="button" onClick={increment} className="add">Add</button> <b>{adultNumber}</b> <button type="button" onClick={decrement} className="minus">Minus</button>
                        </div>
                        <div className="guests-to-host">
                            <h3>children</h3>
                            <label>Age 2-12</label>
                            <button type="button" onClick={incrementChildren} className="add">Add</button> <b>{childrenNumber}</b> <button type="button" onClick={decrementChildren} className="minus">Minus</button>
                        </div>
                        <button className="modal-search-button">Search</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default App;