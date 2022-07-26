import React from "react";
import BeerItem from "./BeerItem/BeerItem";

const BeerList = ({ beer }) => {
    if (!beer.length) {
        return <h1 style={{ textAlign: "center" }}>Пиво не найдено</h1>;
    }

    return (
        <>
            {beer.map((item, index) => (
                <BeerItem key={item.name} number={index + 1} beer={item} />
            ))}
        </>
    );
};

export default BeerList;
