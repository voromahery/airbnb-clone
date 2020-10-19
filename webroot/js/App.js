import React, { useEffect, useState } from 'react';
import stays from '../../stays.json'

console.log(stays);
function App() {
    const [apartment, setApartment] = useState([]);

    return (
        <>
            {stays.map(stay =>
                <div className="card" key={id}>
                    <img src={stay.photo} className="" alt="" />
                    <button>Super host</button>
                    <div>
                        <span className="type">{stay.type}</span>
                        <span className="number-of-bed">{stay.beds}</span>
                        <span className="rating">{stay.rating}</span>
                    </div>
                    <p className="title">{stay.title}</p>
                </div>
            )}
        </>
    )
}

export default App;