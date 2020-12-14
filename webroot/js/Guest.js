import React from "react";

export default function Guest(props) {
  return (
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
}
