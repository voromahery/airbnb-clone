import React from 'react';

export default function SearchModal() {
    return (
        <div>
            <div className="modal-header">
                <p className="modal-title">Edit your search</p>
                <button className="remove-modal">x</button>
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
                    <input type="text" className="number-of-guests" placeholder="Add guests" />
                </div>
                <div>
                    <h3>Adults</h3>
                    <label>Age 13 or above
                    <button type="button" onClick={increment}>+</button> {adultNumber} <button type="button" onClick={decrement}>-</button>
                    </label>
                </div>
                <div>
                    <h3>children</h3>
                    <label>Age 2-12
                    <button type="button" onClick={incrementChildren}>+</button> {childrenNumber} <button type="button" onClick={decrementChildren}>-</button>
                    </label>
                </div>
                <button className="modal-search-button">Search</button>
            </form>
        </div>
    )
}
