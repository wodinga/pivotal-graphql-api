module.exports.typedef = `
type Release {
	id: ID!
	project: Project
	name: String
	description: String
	current_state: Current_state
	accepted_at: String
	deadline: String
	labels: [Label]
	stories: [Story]
	created_at: String
	updated_at: String
	url: String
	projected_completion: String
	projected_completion_interval: Datetime_interval
	points_accepted: Float
	points_total: Float
	counts_accepted: Int
	counts_total: Int
}
`
