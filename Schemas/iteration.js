module.exports.typedef = `
type Iteration {
	id: ID!
	"""teration number starting from 1 for the first iteration in the project. This field is read only. This field is always returned."""
	number: Int
	project: Project
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

//module.exports.resolvers = {
  //Query: {
    //Projects: async (_source, {id}, {dataSources}) => {
      //return dataSources.trackerAPI.getProjects(id)
    //}
  //},
  //Project: {
    //epics: async (_source, args, {dataSources}) => {
      //return dataSources.trackerAPI.getEpics(_source.id)
    //},
    //story: async (_source, {id}, {dataSources}) => {
      //return dataSources.trackerAPI.getStory(_source.id, id)
    //},
    //stories: async (_source, args, {dataSources}) => {
      //return dataSources.trackerAPI.getStories(_source.id, args)
    //},
    //members: async (_source, args, {dataSources}) => {
      //return dataSources.trackerAPI.getProjectMemberships(_source.id)
    //},
    //labels: async (_source, args, {dataSources}) => {
      //return dataSources.trackerAPI.getProjectLabels(_source.id)
    //}
  //}
//}
