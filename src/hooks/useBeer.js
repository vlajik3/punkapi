import { useMemo } from "react";

export const useSortedBeer = (beer, sort) => {
    const sortedBeer = useMemo(() => {
        if (sort) {
            return [...beer].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return beer;
    }, [sort, beer]);
    return sortedBeer;
};

export const useBeer = (beer, sort, query) => {
    const sortedBeer = useSortedBeer(beer, sort);
    const SortedAndSearchedBeer = useMemo(() => {
        return sortedBeer.filter((beer) => beer.name.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedBeer]);
    return SortedAndSearchedBeer;
};
