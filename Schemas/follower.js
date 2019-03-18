module.exports.typedef = `
type Follower {
	id: ID!
	name: String
	email: String
	initials: String
	username: String
	following: [Following]
}
`
