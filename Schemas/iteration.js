module.exports.typedef = `
type Iteration {
	id: ID!
	"""Iteration number starting from 1 for the first iteration in the project. This field is read only. This field is always returned."""
	number: Int!
	project: Project!
	""" Iteration length in weeks. """
	length: Int
	stories: [Story]
	start: String
	finish: String
	velocity: Float
	points: Int
	accepted_points: Int
	effective_points: Float
	accepted: Daily_History_Container	
	created: Daily_History_Container	
	analytics: Analytics
}
`

module.exports.resolvers = {
  Iteration: {
    analytics: async (_source, args, {dataSources}) => {
      return dataSources.trackerAPI.getProject(_source.project_id)
    }
  }
}
