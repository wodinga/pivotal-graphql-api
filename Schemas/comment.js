const gql = require('apollo-server')
module.exports.typedef = gql`
type Comment {
    id: Int!
    text: String
    created_at: String
    updated_at: String
}
`
