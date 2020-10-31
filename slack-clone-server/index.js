import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema';
import resolvers from './resolver';
import models from './models';
const graphqlEndpoint = '/graphql';
const app = express();

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})
app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema: schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));
//{ force: true }
models.sequelize.sync({ force: true }).then(()=>{
    app.listen(4001)
});
