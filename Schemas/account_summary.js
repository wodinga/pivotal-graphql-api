module.exports.typedef = `
type Account_Membership {
    id: ID!
    name : String
    status: Status!
    days_left: Int
    over_the_limit: Boolean
    owner: Person
    admin: [Person]
    number_of_projects: Int!
    number_of_private_projects: Int!
    project_limit: Int
    is_enterprise_guest: Boolean
    plan: String
}
`
