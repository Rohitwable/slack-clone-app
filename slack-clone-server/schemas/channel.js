export default `
type Channel {
    id: Int!
    name: String!
    public: Boolean!
    messages: [Message!]!
    users: [User!]!
}

type Mutation {
    addChannel(name: String!, teamId: Int!, public: Boolean=false): Boolean
}
`