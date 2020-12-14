import React from "react";

export default function Place(props) {
  return (
    <ul>
      {props.apartment.map((stay) => (
        <li className="city-name" key={stay.id}>
          {stay.city}, {stay.country}
        </li>
      ))}
    </ul>
  );
}
