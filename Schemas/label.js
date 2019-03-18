module.exports.typedef = `
type Label{
    id: ID!
    project: Project!
    name: String!
    created_at: String
    updated_at: String
    counts: Int!
}
`

module.exports.resolvers = {
    Label: {
        project: async (_source, {project_id}, {dataSources}) => {
            return dataSources.trackerAPI.getProject(_source.project_id)
        },
    }
}
