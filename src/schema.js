const {printSchema} = require('graphql/utilities')
const graphqlTools = require('graphql-tools')
const Comment = require("../Schemas/comment") ;
const Current_State = require("../Schemas/current_state") ;
const Epic = require("../Schemas/epic") ;
const Label = require("../Schemas/label") ;
const Person = require("../Schemas/person");
const Project = require("../Schemas/project");
const Status = require("../Schemas/status");
const Story = require("../Schemas/story");
const Story_type = require("../Schemas/story_type");
const Task = require("../Schemas/task");
const Timezone = require("../Schemas/timezone") ;
const Week_start_day = require("../Schemas/week_start_day");

const makeExecutableSchema = graphqlTools.makeExecutableSchema
const mergeSchemas = graphqlTools.mergeSchemas

const schema = mergeSchemas({
    typeDefs: [Comment, Current_State, Epic, Label, Person, Project, Status, Story, Story_type, Task, Timezone, Week_start_day],
    resolvers: []
});
console.log(printSchema(schema))
module.exports = schema
