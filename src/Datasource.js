const RESTDataSource = require('apollo-datasource-rest').RESTDataSource
module.exports = class TrackerAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://www.pivotaltracker.com/services/v5/';
    }

    willSendRequest(request) {
        request.headers.set('X-TrackerToken', this.context.token);
        request.headers.set('Content-Type', "application/json");
        // request.path += "&envelope=true"
        console.log(request)
    }

    async getEpics(project_id) {
        return this.get(`projects/${project_id}/epics`);
    }

    async getLabels(project_id) {
        return this.get(`projects/${project_id}/labels`);
    }
    async getProject(project_id) {
        return this.get(`projects/${project_id}`);
    }
    async getStories(project_id, {offset, filter}) {
        // let data = await this.get(`projects/${project_id}/stories?envelope=true`)
        // console.log(data.pagination)
        // return data.data
        let obj = {offset, filter}
        let filteredObj = Object.fromEntries(Object.entries(obj).filter(element => element[1] != undefined))

        let params = new URLSearchParams(filteredObj)

        return this.get(`projects/${project_id}/stories/?${params.toString()}`)
    }
    async getComments(project_id, story_id) {
        return this.get(`projects/${project_id}/stories/${story_id}/comments`);
    }
    async getAccounts() {
        return this.get('accounts');
    }
    async getMe(api_token) {
        this.context.token = api_token

        return this.get('me');
    }
    async getProjects() {
        return this.get('projects');
    }
};
