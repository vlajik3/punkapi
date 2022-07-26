import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/UI/loader/Loader";
import { useFetching } from "../../hooks/useFetching";
import BeerService from "../../API/BeerService";
import { Link } from "react-router-dom";
import s from "./BeerIdPage.module.scss"

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

    return isLoading ? (
        <Loader />
    ) : (
            <>
            <Link to="/" className={s.back_button}>Go back</Link>
                {beer.map((b) => (
                    <div key={b.name} className={s.container}>
                        <h1>{b.name}</h1>
                        <img
                            src={b.image_url}
                            alt="beer_image"
                        />
                        <h4 className={s.tagline}>{b.tagline}</h4>
                        <h4 className={s.description}>{b.description}</h4>
                        <h4 className={s.abv}>ABV: {b.abv}</h4>
                        <ul className={s.food_pairing}>
                            <h2>This pairs well with:</h2>
                            {b.food_pairing.map(f => (
                                <li key={f}>🔥{f}</li>
                            )) }
                        </ul>
                    </div>
                ))}
            </>
    );
};

export default BeerIdPage;
