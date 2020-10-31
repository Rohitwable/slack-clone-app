export default {
    Query: {
        hi: (parent, args, context, info) => {
            return 'hi';
        }
    },
    Mutation: {
        sendMessage: async (parent, args, { models, user }) => {
            try {
                await models.Message.create({...args, userId: user.id });
                return true;
            } catch (err) {
                console.log('err', err)
            }
        }
    }
}