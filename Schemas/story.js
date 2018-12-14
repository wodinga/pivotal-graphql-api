module.exports.typedef = `
type Story {
    id: ID
    project: Project
    description: String
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
    owner_ids: [Person]
    labels: [Label]
    tasks: [Task]
    pull_request_ids: [ID]
    blocker_ids: [Person]
    follower_ids: [Person]
    comment_ids: [Comment]
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
    Project: {
        labels: async (_source, args, { dataSources }) => {
            return dataSources.trackerAPI.getLabels(_source.id);9
        },
    }

}
