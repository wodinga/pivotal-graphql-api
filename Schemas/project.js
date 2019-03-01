module.exports.typedef = `
type Project {
    id: ID!
    name: String
    status: String
    version: Int
    interation_length: Int
    week_start_day: Week_start_day!
    point_scale: String
    point_scale_is_custom: Boolean
    created_at: String
    updated_at: String
    labels: [Label]
    epics: [Epic]
    members(offset: Int,  limit: Int = 10) : [Person]
    stories(offset: Int, 
            limit: Int = 10,
            filter: String,
            with_state: Current_state,
            with_label: String,
            created_after: String,
            with_story_type: Story_type): [Story]
}
`

module.exports.resolvers = {
  Query: {
    Projects: async (_source, { id }, { dataSources }) => {
      return dataSources.trackerAPI.getProjects(id)
    }
  },
  Project: {
    epics: async (_source, args, { dataSources }) => {
      return dataSources.trackerAPI.getEpics(_source.id)
    },
    stories: async (_source, args, { dataSources }) => {
      return dataSources.trackerAPI.getStories(_source.id, args)
    },
    members: async (_source, args, { dataSources }) => {
      return dataSources.trackerAPI.getProjectMemberships(_source.id)
    },
    labels: async (_source, args, { dataSources }) => {
      return dataSources.trackerAPI.getLabels(_source.id)
    }
  }

}
