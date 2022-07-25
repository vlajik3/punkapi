import React from "react";
import "../styles/style.css";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const BeerFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                type="text"
                value={filter.query}
                onChange={(e) => setFilter({ ...filter, query: e.target.value })}
                placeholder="Поиск..."
            />
            <MySelect
                value={filter.sort}
                onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="Сортировка"
                options={[
                    { value: "title", name: "По названию" },
                    { value: "body", name: "По описанию" },
                ]}
            />
        </div>
    );
};

export default BeerFilter;
