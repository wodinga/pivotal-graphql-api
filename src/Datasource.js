const RESTDataSource = require('apollo-datasource-rest').RESTDataSource
var token = process.env.TOKEN
module.exports = class TrackerAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://www.pivotaltracker.com/services/v5/';
    }

    willSendRequest(request) {
        request.headers.set('X-TrackerToken', token);
        request.headers.set('Content-Type', "application/json");
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
    async getStories(project_id) {
        return this.get(`projects/${project_id}/stories`);
    }
    async getComments(project_id, story_id) {
        return this.get(`projects/${project_id}/stories/${story_id}/comments`);
    }
    async getAccounts() {
        return this.get('accounts');
    }
    async getMe(api_token) {
        token = api_token
        let me = await this.get('me');
        return me
    }
    async getProjects() {
        return this.get('projects');
    }
};
