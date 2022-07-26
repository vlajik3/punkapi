import React from "react";
import "../styles/style.scss";
import MyInput from "./UI/input/MyInput";

const BeerFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                type="text"
                value={filter.query}
                onChange={(e) => setFilter({ ...filter, query: e.target.value })}
                placeholder="Поиск..."
            />
        </div>
    );
};

export default BeerFilter;
