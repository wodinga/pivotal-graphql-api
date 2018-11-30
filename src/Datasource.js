const { RESTDataSource } = require('apollo-datasource-rest');

const token = "46284357a3bf81dafd39bd71e6fe900a"

module.exports = class TrackerAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://www.pivotaltracker.com/services/v5/';
        console.log("TrackerAPI class instantiated")
    }

    willSendRequest(request) {
        request.headers.set('X-TrackerToken', token);
        console.log(request)
    }


    async getProjects(account_ids) {
        console.log(account_ids)
        return this.get(`projects?account_ids=${account_ids}`);
    }

    // async getMostViewedMovies(limit = 10) {
    //     const data = await this.get('movies', {
    //         per_page: limit,
    //         order_by: 'most_viewed',
    //     });
    //     return data.results;
    // }
}
