const RESTDataSource = require('apollo-datasource-rest').RESTDataSource
module.exports = class TrackerAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://www.pivotaltracker.com/services/v5/'
  }

  willSendRequest(request) {
    request.headers.set('X-TrackerToken', this.context.token)
    request.headers.set('Content-Type', 'application/json')
    // request.path += "&envelope=true"
    console.log(request)
  }

  async getAccounts() {
    return this.get('accounts')
  }

  async getAccount(account_id) {
    return this.get(`accounts/${account_id}`)
  }

  async getAccountMemberships(account_id) {
    return this.get(`accounts/${account_id}/memberships`)
  }

  async getAttachments(project_id, story_id, comment_id, file_attachment_id) {
    return this.get(`/projects/${project_id}/stories/${story_id}/comments/${comment_id}/file_attachments/${file_attachment_id}`)
  }

  async getBlockers(project_id, story_id) {
    return this.get(`projects/${project_id}/stories/${story_id}/blocker`)
  }

  async getComments(project_id, story_id) {
    return this.get(`projects/${project_id}/stories/${story_id}/comments`)
  }

  async getEpic(project_id,epic_id) {
    return this.get(`projects/${project_id}/epics/${epic_id}`)
  }

  async getIterations(project_id) {
    return this.get(`projects/${project_id}/iterations?fields=:default,velocity,points,accepted_points`)
  }

  async getIteration(project_id, iteration_num) {
    return this.get(`projects/${project_id}/iterations/${iteration_num}?fields=:default,velocity,points,accepted_points`)
  }

  async getEpics(project_id) {
    return this.get(`projects/${project_id}/epics`)
  }

  async getMe(api_token) {
    this.context.token = api_token

    return this.get('me')
  }

  async getProjects() {
    return this.get('projects')
  }

  async getProject(project_id) {
    console.log(await this.get(`projects/${project_id}`))
    return this.get(`projects/${project_id}`)
  }

  async getProjectMemberships(project_id) {
    //return this.get(`projects/${project_id}/memberships`).then((memberships) => memberships.map((membership) => membership.person))
    return this.get(`projects/${project_id}/memberships`)
  }

  async getProjectLabels(project_id) {
    return this.get(`projects/${project_id}/labels`)
  }

  async getProjectHistory(project_id) {
    return this.get(`projects/${project_id}/history/days`)
  }

  async getReleases(project_id, story_id, params) {
    return this.get(`/projects/${project_id}/releases`)
  }

  async getStoryOwners(project_id, story_id) {
    return this.get(`projects/${project_id}/stories/${story_id}/owners`)
  }

  async getStoryLabels(project_id, story_id) {
    return this.get(`projects/${project_id}/stories/${story_id}/labels`)
  }
  async getStory(project_id, story_id) {
    return this.get(
      `projects/${project_id}/stories/${story_id}?fields=:default,after_id,before_id`
    )
  }

  async getStories(project_id, params) {
    // let data = await this.get(`projects/${project_id}/stories?envelope=true`)
    // console.log(data.pagination)
    // return data.data

    let filteredObj = Object.fromEntries(
      Object.entries(params).filter(element => element[1] !== undefined)
    )

    let filteredParams = new URLSearchParams(filteredObj)

    return this.get(
      `projects/${project_id}/stories/?${filteredParams.toString()}`
    )
  }
  async getStoryTasks(project_id, story_id) {
    return this.get(
      `projects/${project_id}/stories/${story_id}/tasks`
    )
  }
}
