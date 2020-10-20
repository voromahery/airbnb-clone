import React, { useEffect, useState } from 'react';
import stays from '../../stays.json'

function App() {
    const [apartment, setApartment] = useState([]);
    // To make it display only six apartment
    stays.length = 6;
  const id = stays.forEach((stay, index)=> stay.id = Date.now() + index);
  console.log(stays);
  
    return (
        <>
            {stays.map(stay =>
                <div className="card" key={stay.id}>
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