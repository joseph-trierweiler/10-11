import React from 'react';
import './Card.css';

function Card({sectionTitle, src, alt, title, description, price}) {
    return (

            <div className="Card">
                    <img src={src} alt={alt} className="CardImg"></img>
                <div className="CardBox">
                    <h3 className="CardTitle">{title}</h3>
                    <div className="CardDescription">
                        {description}
                    </div>
                    <h4 className="CardPrice">{price}</h4>
                </div>
            </div>

    )
}

export default Card;