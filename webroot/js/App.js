import React, { useEffect, useState } from 'react';
import stays from '../../stays.json';
import Stay from './Stay.js';
import NumberOfGuest from './NumberOfGuest';
import SearchPlace from './PlaceNameModal';

// To make it display only six apartment
stays.length = 6;

function App() {
    const [apartment, setApartment] = useState(stays);
    const [adultNumber, setAdultNumber] = useState(0);
    const [childrenNumber, setChildrenNumber] = useState(0);
    const [isShownGuest, setIsShownGuest] = useState(false);
    const [isShownPlace, setIsShownPlace] = useState(false);

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

    const showGuest = () => {
        setIsShownGuest(!isShownGuest);
    }

    const showPlace = () => {
        setIsShownPlace(!isShownPlace);
    }

    /////////////////////// NUMBER OF GUEST OPERATION ///////////////////////////////////////////

    const increment = () => {
        setAdultNumber(prevCount => prevCount + 1);
        filteredByguestNumber();
    }

    const decrement = () => {
        if (adultNumber <= 0) {
            return;
        }
        setAdultNumber(prevCount => prevCount - 1);
        filteredByguestNumber();
    }

    const incrementChildren = () => {
        setChildrenNumber(prevCount => prevCount + 1);
        filteredByguestNumber()
    }

    const decrementChildren = () => {
        if (childrenNumber <= 0) {
            return;
        }
        setChildrenNumber(prevCount => prevCount - 1);
        filteredByguestNumber();
    }

    let guest = "";

    if (adultNumber + childrenNumber <= 0) {
        guest = "Add guest"
    }

    if (adultNumber + childrenNumber <= 1) {
        guest = `${adultNumber + childrenNumber} guest`
    }

    if (adultNumber + childrenNumber > 1) {
        guest = `${adultNumber + childrenNumber} guests`
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
                        <button type="button" className="search" onClick={showPlace}>{`${stays[0].city}, ${stays[0].country}`}</button>
                        <button type="button" id="addGuest" className="add-guest" onClick={showGuest}>Add guest</button>
                        <button type="button" className="search-button">Search</button>
                    </form>
                </header>
                <div className="stay-details">
                    <h2 className="heading">Stay in Finland</h2>
                    <span className="number-of-stays">{apartment.length}+ stays</span>
                </div>
            </div>
            <div className="card-container">
                {apartment.map(stay =>
                    <Stay key={stay.id} stay={stay} />
                )}
            </div>
            {isShownGuest ?
                <NumberOfGuest
                    apartment={apartment}
                    handleChange={handleChange}
                    decrement={decrement}
                    increment={increment}
                    decrementChildren={decrementChildren}
                    incrementChildren={incrementChildren}
                    adultNumber={adultNumber}
                    childrenNumber={childrenNumber}
                    isShownGuest={isShownGuest}
                    setIsShownGuest={setIsShownGuest}
                    isShownPlace={isShownPlace}
                    setIsShownPlace={setIsShownPlace}
                    guest={guest}
                /> : null
            }
            {isShownPlace ?
                <SearchPlace
                    isShownGuest={isShownGuest}
                    setIsShownGuest={setIsShownGuest}
                    apartment={apartment}
                    handleChange={handleChange}
                    isShownPlace={isShownPlace}
                    setIsShownPlace={setIsShownPlace}
                    guest={guest}
                /> : null
            }
        </>
    )
}

export default App;