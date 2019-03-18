module.exports.typedef = `
type Blocker {
    id: ID!
		story: Story!
		person: Person
		description: String
		resolved: Boolean
		created_at: String
		updated_at: String
}
`
