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
