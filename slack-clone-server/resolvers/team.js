export default {
    Query: {
        hi: (parent, args, context, info) => {
            return 'hi';
        }
    },

    Mutation: {
        addTeam: async (parent, args, { models, user }) => {
            try {
                await models.Team.create({ ...args, owner: user.id });
                return true;
            } catch (err) {
                console.log('err', err)
            }
        }
    }
}