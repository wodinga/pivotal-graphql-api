module.exports.typedef = `
type Epic{
    id: ID!
    project: Project!
    name: String!
    labels: [Label]
    description: String
    comments: [Comment]
    followers: [Person]
    created_at: String
    updated_at: String
    url: String
    completed_at: String
}
`
