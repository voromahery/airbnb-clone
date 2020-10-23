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
        e.preventDefault();
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
        increment = stays.filter(stay => stay.maxGuests > adultNumber + childrenNumber || stay.maxGuests === adultNumber + childrenNumber);
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
            <SearchModal
                showModal={showModal}
                handleChange={handleChange}
                decrement={decrement}
                increment={increment}
                decrementChildren={decrementChildren}
                incrementChildren={incrementChildren}
                hide={hide}
                adultNumber={adultNumber}
                childrenNumber={childrenNumber}
            />
        </>
    )
}

export default App;