const {printSchema} = require('graphql/utilities')
const {gql} = require('apollo-server') ;
const graphqlTools = require('graphql-tools')
const makeExecutableSchema = graphqlTools.makeExecutableSchema


const Comment = require("../Schemas/comment").typedef;
const Current_State = require("../Schemas/current_state").typedef;
const Epic = require("../Schemas/epic").typedef ;
const Label = require("../Schemas/label").jj ;
const Person = require("../Schemas/person").typedef;
const Project = require("../Schemas/project").typedef;
const Status = require("../Schemas/status").typedef;
const Story = require("../Schemas/story").typedef;
const Story_type = require("../Schemas/story_type").typedef;
const Task = require("../Schemas/task").typedef;
const Timezone = require("../Schemas/timezone").typedef ;
const Week_start_day = require("../Schemas/week_start_day").typedef;

const schema = makeExecutableSchema({
    // typeDefs: [gql(Comment), gql(Story), gql(Project), gql(Story_type), gql(Current_State), gql(Epic), gql(Label), gql(Person), gql(Status), gql(Task), gql(Timezone), gql(Week_start_day)],
    typeDefs: [gql(Comment), gql(Story), gql(Project), gql(Story_type), gql(Current_State), gql(Epic), gql(Label), gql(Person), gql(Status), gql(Task), gql(Timezone), gql(Week_start_day)],
    resolvers: {}
});

console.log(printSchema(schema))
module.exports = schema
