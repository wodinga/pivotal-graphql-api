module.exports.typedef = `
type Project_Membership {
    id: ID!
    Person: Person!
    role: Role!
    email: String
    name: String
    Initials: String
    project_color: String
    favorite: Boolean
}
`

module.exports.resolvers = {
    Query: {
        Project_membership: async (_source, { id }, { dataSources }) => {
            return dataSources.trackerAPI.getProjects(id);
        },
    },
    Project_membership: {
        epics: async (_source, args, { dataSources }) => {
            return dataSources.trackerAPI.getEpics(_source.id);
        },
        stories: async (_source, args, { dataSources }) => {
            return dataSources.trackerAPI.getStories(_source.id, args);
        },
        labels: async (_source, args, { dataSources }) => {
            return dataSources.trackerAPI.getLabels(_source.id);
        },
    }

}
