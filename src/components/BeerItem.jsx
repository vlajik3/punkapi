import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const BeerItem = ({ beer }) => {
    let navigate = useNavigate();
    return (
        <div className="beer">
            <div
                className="beer__content"
                onClick={(e) => {
                    e.preventDefault();
                    navigate(`/beer/${beer.id}`);
                }}
            >
                <strong>
                    {beer.id}. {beer.name}
                </strong>
                <div className="beer__body">{beer.description}</div>
            </div>
            <div className="beer__btns">
                <MyButton onClick={() => navigate(`/beer/${beer.id}`)} className="beer__btn">
                    Открыть
                </MyButton>
            </div>
        </div>
    );
};

export default BeerItem;
