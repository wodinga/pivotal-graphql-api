module.exports.typedef = `
type File_Attachment {
	id: ID!
	filename: String
	created_at: String
	uploader_id: ID
	thumbnailable: Boolean
	height: Int
	width: Int
	size: Int
	download_url: String!
	content_type: String
	uploaded: Boolean
	big_url: String
	thumbnail_url: String
}
`
