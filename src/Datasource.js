const RESTDataSource = require('apollo-datasource-rest').RESTDataSource
module.exports = class TrackerAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://www.pivotaltracker.com/services/v5/';
    }

    willSendRequest(request) {
        request.headers.set('X-TrackerToken', "6460ea07df7608e56028f7f8a009c08d");
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
    async getComments() {
        return this.get('projects');
    }
    async getProjects() {
        return this.get('projects');
    }
};
