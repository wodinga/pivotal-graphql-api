const {printSchema} = require('graphql/utilities')
const graphqlTools = require('graphql-tools')
const makeExecutableSchema = graphqlTools.makeExecutableSchema
// const datasource = require('./Datasource')


// Schema for all the types
const Account = require('../Schemas/account')
const Analytics = require('../Schemas/analytics')
const Account_Membership = require('../Schemas/account_membership')
const Comment = require('../Schemas/comment')
const Current_State = require('../Schemas/current_state')
const Epic = require('../Schemas/epic')
const Iteration = require('../Schemas/iteration')
const Label = require('../Schemas/label')
const Daily_History_Container = require('../Schemas/Daily_History_Container')
const Person = require('../Schemas/person')
const Project = require('../Schemas/project')
const Project_Membership = require('../Schemas/project_membership')
const Status = require('../Schemas/status')
const Story = require('../Schemas/story')
const Story_type = require('../Schemas/story_type')
const Task = require('../Schemas/task')
const Timezone = require('../Schemas/timezone')
const Week_start_day = require('../Schemas/week_start_day')
const Me = require('../Schemas/me')

//Root query, which is required
const Query = `
    type Query{
        Projects: [Project]
        me(api_token: String!): Me
    }
`

const schemas = [Account,
  Account_Membership,
  Analytics,
  Comment,
  Daily_History_Container,
  Iteration,
  Project ,
  Current_State,
  Epic,
  Label,
  Project_Membership,
  Person,
  Status,
  Story,
  Story_type,
  Task,
  Timezone,
  Week_start_day,
   Me]

const typeDefs = [Query].concat(schemas.map((schema) => schema.typedef))
const resolvers = schemas.filter((schema) => schema.resolvers !== undefined).map((schema) => schema.resolvers)

//Make and merge schemas
const schema = makeExecutableSchema({typeDefs, resolvers})

console.log(printSchema(schema))
module.exports = schema
