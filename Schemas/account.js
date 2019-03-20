module.exports.typedef = `
type Account {
    id: ID
    name: String
    plan: String
    status: String
    days_left: Int
    over_the_limit: Boolean
    created_at: String
    updated_at: String
    memberships: [Account_Membership]
}
`

module.exports.resolvers = {
  Account: {
    memberships: async (_source, args, {dataSources}) => {
     return dataSources.trackerAPI.getAccountMemberships(_source.account_id)
    }
  }
}
