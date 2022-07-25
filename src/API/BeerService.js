import axios from "axios";

export default class BeerService {

    static async getAll(limit = 10, page = 1) {
        const response = await axios.get("https://api.punkapi.com/v2/beers", {
            params: {
                _limit: limit,
                _page: page,
            },
        });
        return response;
    }

    static async getById(id) {
        const response = await axios.get("https://api.punkapi.com/v2/beers/" + id);
        return response;
    }
}
