import React, { useState } from 'react';
import stays from '../../stays.json'

export default function SearchModal(props) {

    let modalDetails = "";

    const numberOfGuests =
        <div className="guest-modal">
            <div className="guests-to-host adults">
                <h3>Adults</h3>
                <p>Age 13 or above</p>
                <div className="counters">
                    <button type="button" onClick={props.increment} className="add">Add</button>
                    <b>{props.adultNumber}</b>
                    <button type="button" onClick={props.decrement} className="minus">Minus</button>
                </div>
            </div>
            <div className="guests-to-host children">
                <h3>children</h3>
                <p>Age 2-12</p>
                <div className="counters">
                    <button type="button" onClick={props.incrementChildren} className="add">Add</button>
                    <b>{props.childrenNumber}</b>
                    <button type="button" onClick={props.decrementChildren} className="minus">Minus</button>
                </div>
            </div>
        </div>;


    const cityName =
        <ul>
            {props.apartment.map(stay => <li className="city-name" key={stay.id}>{stay.city}, {stay.country}</li>)}
        </ul>;

    function modalFunction(e) {
        if (e.target.name === "cityToStay") {
            modalDetails = cityName;
            console.log(modalDetails);
        }

        if (e.target.name === "guests") {
             modalDetails = numberOfGuests;
             console.log(modalDetails);
         }
    }

    let guest = "";

    if (props.adultNumber + props.childrenNumber <= 0) {
        guest = "Add guest"
    }

    if (props.adultNumber + props.childrenNumber <= 1) {
        guest = `${props.adultNumber + props.childrenNumber} guest`
    }

    if (props.adultNumber + props.childrenNumber > 1) {
        guest = `${props.adultNumber + props.childrenNumber} guests`
    }

    return (
        <div className="open">
            <div className="modal">
                <div className="modal-header">
                    <p className="modal-title">Edit your search</p>
                    <button className="remove-modal" onClick={() => props.setIsShown(!props.isShown)}>x</button>
                </div>
                <form>
                    <div className="search-container">
                        <label htmlFor="">Location</label>
                        <input type="text" className="city-to-stay" name="cityToStay" onChange={props.handleChange} onClick={modalFunction} />
                    </div>
                    <div className="search-container">
                        <button type="button" name="guests" className="number-of-guests" onClick={modalFunction}>Guests<br/>
                        {guest}
                        </button>
                    </div>
                    <div>
                        {cityName}
                    </div>
                    <button className="modal-search-button">Search</button>
                </form>
            </div>
        </div>
    )
}
