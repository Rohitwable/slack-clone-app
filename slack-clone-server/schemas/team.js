export default `
type Team {
    owner: User!
    members: [User!]!
    channels: [Channel!]!
}

type Mutation {
    addTeam(name: String!): Boolean!
}
`