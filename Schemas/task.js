module.exports.typedef = `
type Task{
    id: ID
    story_id: Story!
    description: String
    complete: Boolean
    position: Int
    created_at: String
    updated_at: String
}
`
