import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
// import typeDefs from './schema';
// import resolvers from './resolver';
import models from './models';
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schemas')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));
const graphqlEndpoint = '/graphql';
const app = express();

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})
app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({
    schema: schema,
    context: {
        models, 
        user: {
            id: 1
        }
    }
}));
app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));
//{ force: true }
models.sequelize.sync().then(()=>{
    app.listen(4002)
});
