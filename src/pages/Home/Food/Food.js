import React from 'react';
import { NavLink } from 'react-router-dom';

const Food = () => {
    return (
        <div className="p-5 m-3">
            <NavLink style={{textDecoration:"none", color:"black",margin:"20px", padding:"10px", fontSize:"20px"}} to="/breakfast">Breakfast</NavLink>
            <NavLink style={{textDecoration:"none", color:"black",margin:"20px", padding:"10px", fontSize:"20px"}}  to="/lunch">Lanch</NavLink>
            <NavLink style={{textDecoration:"none", color:"black",margin:"20px", padding:"10px", fontSize:"20px"}}  to="/dinner">Dinner</NavLink>
        </div>
    );
};

export default Food;