export default `
type Message {
    id: Int!
    text: String!
    user: User!
    channel: Channel!
}

type Mutation {
    sendMessage(channelId: Int!, text: String!): Boolean!
}
`