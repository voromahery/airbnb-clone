import React from 'react';
import stays from '../../stays.json'

export default function SearchModal(props) {
    return (
        <div className={props.showModal?"open":"close"} >
        <div className="modal">
            <div className="modal-header">
                <p className="modal-title">Edit your search</p>
                <button className="remove-modal" onClick={props.hide}>x</button>
            </div>
            <form>
                <div className="search-container">
                    <label htmlFor="">Location</label>
                    <select onChange={props.handleChange} className="city-to-stay">
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
                    <input type="text" className="number-of-guests" placeholder="Add guests" defaultValue={props.adultNumber}/>
                </div>
                <div className="guests-to-host">
                    <h3>Adults</h3>
                    <label>Age 13 or above</label>
                    <button type="button" onClick={props.increment} className="add">Add</button> <b>{props.adultNumber}</b> <button type="button" onClick={props.decrement} className="minus">Minus</button>
                </div>
                <div className="guests-to-host">
                    <h3>children</h3>
                    <label>Age 2-12</label>
                    <button type="button" onClick={props.incrementChildren} className="add">Add</button> <b>{props.childrenNumber}</b> <button type="button" onClick={props.decrementChildren} className="minus">Minus</button>
                </div>
                <button className="modal-search-button">Search</button>
            </form>
        </div>
    </div>
    )
}
