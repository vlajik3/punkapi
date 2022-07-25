import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import BeerService from "../API/BeerService";

const BeerIdPage = () => {
    const params = useParams();
    const [beer, setBeer] = useState([]);

    const [fetchBeerById, isLoading, error] = useFetching(async () => {
        const response = await BeerService.getById(params.id);
        setBeer(response.data);
    });


    useEffect(() => {
        fetchBeerById();
    }, []);

    return isLoading ? (<Loader />) : (
        <div>
            <h1>Вы открыли страницу пива c ID = {params.id}</h1>
                <div>
                    {beer.map((b) => (
                        <div key={b.name} style={{ marginTop: "15px" }}>
                            <img src={b.image_url} style={{ width: 300, height: 300 }} alt="beer_image" />
                            <h4>Tagline: {b.tagline}</h4>
                            <h4>Description: {b.description}</h4>
                            <h4>ABV: {b.abv}</h4>
                            {/* <h4>{b.food_pairing}</h4> */}
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default BeerIdPage;
