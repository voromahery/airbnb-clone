import React from "react";

export default function SearchPlace(props) {
  const cityName = (
    <ul>
      {props.apartment.map((stay) => (
        <li className="city-name" key={stay.id}>
          {stay.city}, {stay.country}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="outer-modal">
      <div className="modal">
        <div className="modal-header">
          <p className="modal-title">Edit your search</p>
          <button
            className="remove-modal"
            onClick={() => props.setIsShownPlace(!props.isShownPlace)}
          >
            clear
          </button>
        </div>

        <form>
          <div className="search-container">
            <label htmlFor="">Location</label>
            <button
              type="button"
              className="city-to-stay"
              name="cityToStay"
              onChange={props.handleChange}
            ></button>
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
        <div>{cityName}</div>
        <button className="modal-search-button mobile-button">Search</button>
      </div>
    </div>
  );
}
