module.exports.typedef = `
type Project {
    id: ID
    name: String
    status: String
    version: Int
    interation_length: Int
    week_start_day: Week_start_day
    point_scale: String
    point_scale_is_custom: Boolean
    created_at: String
    updated_at: String
    labels: [Label]
    epics: [Epic]

}
`

// module.exports.resolvers = {
//
// }
