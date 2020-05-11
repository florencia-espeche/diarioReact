import React from 'react';
import './Card.css';

const Card = ({skills = [] }) => {

    return (
        <div className="card--wrapper">
            <div className="card--container">
                {skills.map((item,index) => <div key={index} className = "card--box">{item}</div>)}
            </div>
        </div>
    );
}

export default Card;