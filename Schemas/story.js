module.exports.typedef = `
type Story {
    id: ID
    project: Project
    name: String
    description: String
		"Story that appears before in list of stories in the project"
		before: Story
		"Story that appears after in list of stories in the project"
		after: Story
    story_type: Story_type
    current_state: Current_state
    estimate: Float
    accepted_at: String
    deadline: String
    projected_completion: String
    points_accepted: Float
    points_total: Float
    counts_accepted: Int
    counts_total: Int
    requested_by_id: Person
    owners: [Person]
    labels: [Label]
    tasks: [Task]
    pull_request_ids: [ID]
    blocker: [Person]
    follower: [Person]
    comments: [Comment]
    created_at: String
    updated_at: String
    before_id: ID
    after_id: ID
    integration_id: ID
    external_id: String
    url: String
}
`

module.exports.resolvers = {
  Story: {
    comments: async (_source, args, {dataSources}) => {
      let comments = await dataSources.trackerAPI.getComments(
        _source.project_id,
        _source.id
      )
      return comments
    },
    project: async (_source, args, {dataSources}) => {
      return dataSources.trackerAPI.getProject(_source.project_id)
    },

    labels: async (_source, args, {dataSources}) => {
      return dataSources.trackerAPI.getStoryLabels(
        _source.project_id,
        _source.id
      )
    },

    before: async (_source, args, {dataSources}) => {
      return _source.before_id
        ? dataSources.trackerAPI.getStory(_source.project_id, _source.before_id)
        : null
    },

    after: async (_source, args, {dataSources}) => {
      return _source.after_id
        ? dataSources.trackerAPI.getStory(_source.project_id, _source.after_id)
        : null
    },
    owners: async (_source, args, {dataSources}) => {
      return dataSources.trackerAPI.getStoryOwners(
        _source.project_id,
        _source.id
      )
    }
  }
}
