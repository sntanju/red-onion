import React from 'react';
import { useState, useEffect } from 'react';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
const Breackfast = () => {

    const [breakfasts, setBreakfasts] = useState([]);  //Set Data In A State For Course Router


    useEffect( () => {      //Loaded Data From API(Fake Data) for Course Router
        fetch('/foods.json')
        .then(res => res.json())
        .then(data => setBreakfasts(data))
    }, []);


    return (
        <div>
            {
                breakfasts.map(breakfast => <Dinner
                breakfast={breakfast}
                >

                </Dinner>)
            }
        </div>
    );
};

export default Breackfast;