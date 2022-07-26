import React from "react";
import BeerItem from "./BeerItem";

const BeerList = ({ beer }) => {
    if (!beer.length) {
        return <h1 style={{ textAlign: "center" }}>Пиво не найдено</h1>;
    }

    return (
        <div className="beer_list">
            {beer.map((item, index) => (
                <BeerItem number={index + 1} beer={item} />
            ))}
        </div>
    );
};

export default BeerList;
