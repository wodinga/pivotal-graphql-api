const RESTDataSource = require('apollo-datasource-rest').RESTDataSource
module.exports = class TrackerAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://www.pivotaltracker.com/services/v5/'
  }

  willSendRequest (request) {
    request.headers.set('X-TrackerToken', this.context.token)
    request.headers.set('Content-Type', 'application/json')
    // request.path += "&envelope=true"
    console.log(request)
  }

  async getEpics (project_id) {
    return this.get(`projects/${project_id}/epics`)
  }

  async getProjectLabels (project_id) {
    return this.get(`projects/${project_id}/labels`)
  }

  async getStoryOwners (project_id, story_id) {
    return this.get(`projects/${project_id}/stories/${story_id}/owners`)
  }

  async getStoryLabels (project_id, story_id) {
    return this.get(`projects/${project_id}/stories/${story_id}/labels`)
  }
  async getProjectMemberships (project_id) {
    return this.get(`projects/${project_id}/memberships`).then((memberships) => memberships.map((membership) => membership.person))
  }

  async getProject (project_id) {
    return this.get(`projects/${project_id}`)
  }

  async getStory (project_id, story_id) {
    return this.get(`projects/${project_id}/stories/${story_id}`)
  }

  async getStories (project_id, params) {
    // let data = await this.get(`projects/${project_id}/stories?envelope=true`)
    // console.log(data.pagination)
    // return data.data

    let filteredObj = Object.fromEntries(Object.entries(params).filter(element => element[1] !== undefined))

    let filteredParams = new URLSearchParams(filteredObj)

    return this.get(`projects/${project_id}/stories/?${filteredParams.toString()}`)
  }
  async getComments (project_id, story_id) {
    return this.get(`projects/${project_id}/stories/${story_id}/comments`)
  }
  async getAccounts () {
    return this.get('accounts')
  }
  async getMe (api_token) {
    this.context.token = api_token

    return this.get('me')
  }
  async getProjects () {
    return this.get('projects')
  }
}
