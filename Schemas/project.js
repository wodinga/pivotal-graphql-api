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
    stories: [Story]

}
`

module.exports.resolvers = {
    Query: {
        Projects: async (_source, { id }, { dataSources }) => {
            return dataSources.trackerAPI.getProjects(id);
        },
    },
    Project: {
        epics: async (_source, args, { dataSources }) => {
            return dataSources.trackerAPI.getEpics(_source.id);
        },
        stories: async (_source, args, { dataSources }) => {
            return dataSources.trackerAPI.getStories(_source.id);9
        },
        labels: async (_source, args, { dataSources }) => {
            return dataSources.trackerAPI.getLabels(_source.id);9
        },
    }

}
