import React, { useState } from 'react';
import stays from '../../stays.json'

export default function SearchPlace(props) {

    const cityName =
        <ul>
            {props.apartment.map(stay => <li className="city-name" key={stay.id}>{stay.city}, {stay.country}</li>)}
        </ul>;

    return (
        <div className="outer-modal">
            <div className="modal">
                <div className="modal-header">
                    <p className="modal-title">Edit your search</p>
                    <button className="remove-modal" onClick={() => props.setIsShownPlace(!props.isShownPlace)}>x</button>
                </div>
                <form>
                    <div className="search-container">
                        <label htmlFor="">Location</label>
                        <input type="text" className="city-to-stay" name="cityToStay" onChange={props.handleChange} />
                    </div>
                    <div className="search-container">
                        <button type="button" name="guests" className="number-of-guests">Guests<br />
                            {props.guest}
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
