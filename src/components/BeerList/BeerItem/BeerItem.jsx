import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./BeerItem.module.scss";

const BeerItem = ({ beer }) => {
    let navigate = useNavigate();
    return (
        <div className={s.beer} onClick={() => navigate(`${beer.id}`)}>
            <div className={s.image}>
                <img src={beer.image_url} alt="beer_image" />
            </div>
            <div
                className={s.content}
                onClick={(e) => {
                    e.preventDefault();
                    navigate(`${beer.id}`);
                }}
            >
                <h2>{beer.name}</h2>
                <div className={s.body}>
                    {beer.tagline.length >= 140
                        ? beer.tagline.slice(139, beer.tagline.length) + "..."
                        : beer.tagline}
                </div>
            </div>
        </div>
    );
};

export default BeerItem;
