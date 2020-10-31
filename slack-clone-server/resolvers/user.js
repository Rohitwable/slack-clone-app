export default {
    Query: {
        allUsers: (parent, args, { models }) => {
            return models.User.findAll();
        },
        getUser: (parent, { id }, { models }) => {
            return models.User.findOne({ where: { id }})
        }
    },

    Mutation: {
        addUser: (parent, args, { models }) => {
            return models.User.create(args);
        }
    }
}