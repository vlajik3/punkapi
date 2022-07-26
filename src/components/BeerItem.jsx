import React from "react";
import { useNavigate } from "react-router-dom";

const BeerItem = ({ beer }) => {
    let navigate = useNavigate();
    return (
        <div className="beer" onClick={() => navigate(`${beer.id}`)}>
            <div className="beer__image">
                <img src={beer.image_url} alt="beer_image" />
            </div>
            <div
                className="beer__content"
                onClick={(e) => {
                    e.preventDefault();
                    navigate(`${beer.id}`);
                }}
            >
                <h2>{beer.name}</h2>
                <div className="beer__body">
                    {beer.tagline.length >= 140
                        ? beer.tagline.slice(139, beer.tagline.length) + "..."
                        : beer.tagline}
                </div>
            </div>
        </div>
    );
};

export default BeerItem;
