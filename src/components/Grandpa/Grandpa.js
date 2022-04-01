import React, { createContext, useState } from 'react';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

/*  
    1. call createContext() with default value
    2. set a variable of the context with uppercase
    3. make sure export the context to use in other places
    4. wrap child content using RingContext.Provider
    5. provide a value
    6. to consume the context from child component
    7. useContext hook and you will you need to pass the contextName
 
 */
//Context API and introduction to react dev tool

export const RingContext = createContext('ring');

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h2>Grandpa</h2>
                <p>House: {house} <button onClick={handleBuyAHouse}>Buy a House</button></p>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;