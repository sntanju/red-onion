import React from 'react';

const Dinner = (props) => {
    const {img, title, description} = props.breakfast;
    return (
        <div>
            <h3>dinner</h3>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <h4>{description}</h4>
        </div>
    );
};

export default Dinner;