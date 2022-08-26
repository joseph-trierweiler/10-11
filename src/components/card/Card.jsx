import React from 'react';
import './Card.css';

function Card({id,title, image, description, price}) {
    return (

            <div className="card" key={id}>
                    <img src={image}  alt= {title} className="card-img"></img>
                <div className="card-box">
                    <h3 className="card-title">{title}</h3>
                    <div className="card-description">
                        {description}
                    </div>
                    <h4 className="card-price">{price}</h4>
                </div>
            </div>

    )
}

export default Card;