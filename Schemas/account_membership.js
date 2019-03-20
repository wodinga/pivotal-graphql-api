module.exports.typedef = `
type Account_Membership {
    id: ID!
    person: Person!
    account: Account
    created_at: String
    updated_at: String
    owner: Boolean
    admin: Boolean
    project_creator: Boolean
}
`
module.exports.resolvers = {
  Account_Membership: {
    account: async (_source, args, {dataSources}) => {
     return dataSources.trackerAPI.getAccount(_source.account_id)
    }
  }
}
