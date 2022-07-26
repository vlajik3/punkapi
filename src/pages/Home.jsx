import React, { useEffect, useState } from "react";
import BeerFilter from "../components/BeerFilter";
import BeerList from "../components/BeerList/BeerList";
import { useBeer } from "../hooks/useBeer";
import BeerService from "../API/BeerService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import { useRef } from "react";
import { useObserver } from "../hooks/useObserver";

function Home() {
    const [beer, setBeer] = useState([]);
    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const SortedAndSearchedBeer = useBeer(beer, filter.sort, filter.query);
    const lastElement = useRef();
    const [fetchBeer, isBeerLoading, beerError] = useFetching(async () => {
        const response = await BeerService.getAll(limit, page);
        setBeer([...beer, ...response.data]);
        const totalCount = await BeerService.getCount()
        setTotalPages(getPageCount(totalCount, limit));
    });

    useObserver(lastElement, page < totalPages, isBeerLoading, () => {
        setPage(page + 1);
    });

    useEffect(() => {
        fetchBeer();
    }, [page]);

    return (
        <div>
            <BeerFilter filter={filter} setFilter={setFilter} />
            {beerError && <h1>{`Произошла ошибка: ${beerError}`}</h1>}
            {isBeerLoading && (
                <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
                    <Loader />
                </div>
            )}
            <BeerList beer={SortedAndSearchedBeer} />
            <div ref={lastElement} style={{ height: 20, background: "transparent" }} />
        </div>
    );
}

export default Home;
