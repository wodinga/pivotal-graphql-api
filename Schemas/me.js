module.exports.typedef = `
type Me {
    id: ID!
    name: String
    initials: String
    timezone: timezone
    has_google_identity: Boolean!
    receives_in_app_notifications: Boolean!
    accounts: [Account]
    projects: [Project]
    email: String
    created_at: String
    updated_at: String
}
`

module.exports.resolvers = {
    Query: {
        me: async (_source, {api_token}, { dataSources }) => {
            return dataSources.trackerAPI.getMe(api_token);
        },
    },
    Me: {
        projects: async (_source, {id}, { dataSources }) => {
            return dataSources.trackerAPI.getProjects();
        },
        accounts: async (_source, {id}, { dataSources }) => {
            return dataSources.trackerAPI.getAccounts();
        },
    }
}
