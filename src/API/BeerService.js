import axios from "axios";

export default class BeerService {
    static async getCount() {
        const response = await axios.get("https://api.punkapi.com/v2/beers");
        // console.log(response.data.length);
        return response.data.length;
    }

    static async getAll(limit = 10, page = 1) {
        const response = await axios.get("https://api.punkapi.com/v2/beers", {
            params: {
                page: page,
                per_page: limit,
            },

        });
        return response;
    }

    static async getById(id) {
        const response = await axios.get("https://api.punkapi.com/v2/beers/" + id);
        return response;
    }
}
