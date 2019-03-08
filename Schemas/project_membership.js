module.exports.typedef = `
type Project_Membership {
    id: ID!
    person: Person!
    email: String!
    name: String!
    Initials: String!
    project_color: String
    favorite: Boolean
}
`

//module.exports.resolvers = {
    //Project_Membership: {
        //epics: async (_source, args, {dataSources}) => {
            //return dataSources.trackerAPI.getEpics(_source.id)
        //},
        //stories: async (_source, args, {dataSources}) => {
            //return dataSources.trackerAPI.getStories(_source.id, args)
        //},
        //labels: async (_source, args, {dataSources}) => {
            //return dataSources.trackerAPI.getLabels(_source.id)
        //}
    //}

//}
