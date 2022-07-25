import React from "react";
import BeerItem from "./BeerItem";

const BeerList = ({ beer, title }) => {
    if (!beer.length) {
        return <h1 style={{ textAlign: "center" }}>Пиво не найдено</h1>;
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
                {beer.map((item, index) => (
                        <BeerItem number={index + 1} beer={item} />
                ))}
        </div>
    );
};

export default BeerList;
