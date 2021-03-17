import React from "react";

export default function NumberOfGuest(props) {
  const guests = (
    <div className="guest-modal">
      <div className="guests-to-host adults">
        <h3>Adults</h3>
        <p>Age 13 or above</p>
        <div className="counters">
          <button type="button" onClick={props.increment} className="add">
            Add
          </button>
          <b>{props.adultNumber}</b>
          <button type="button" onClick={props.decrement} className="minus">
            Minus
          </button>
        </div>
      </div>
      <div className="guests-to-host children">
        <h3>children</h3>
        <p>Age 2-12</p>
        <div className="counters">
          <button
            type="button"
            onClick={props.incrementChildren}
            className="add"
          >
            Add
          </button>
          <b>{props.childrenNumber}</b>
          <button
            type="button"
            onClick={props.decrementChildren}
            className="minus"
          >
            Minus
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="outer-modal">
      <div className="modal">
        <div className="modal-header">
          <p className="modal-title">Edit your search</p>
          <button
            className="remove-modal"
            onClick={() => props.setIsShownGuest(!props.isShownGuest)}
          >
            x
          </button>
        </div>
        <form>
          <div className="search-container">
            <label htmlFor="">Location</label>
            {/* <button
              type="button"
              className="city-to-stay"
              name="cityToStay"
              onChange={props.handleChange}
            ></button> */}
             <input
              type="text"
              className="city-to-stay"
              name="cityToStay"
              onChange={props.handleChange}
            />
          </div>
          <div className="search-container">
            <button type="button" name="guests" className="number-of-guests">
              Guests
              <br />
              {props.guest}
            </button>
          </div>
          <div className="search-icon">
            <button className="modal-search-button desktop-button">
              Search
            </button>
          </div>
        </form>
        {guests}

        <button className="modal-search-button mobile-button">Search</button>
      </div>
    </div>
  );
}
