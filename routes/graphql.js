import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from '../resolvers';
import { typeDefs } from '../schema';

const router = express.Router();
const schema = makeExecutableSchema({ typeDefs, resolvers });

router.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

export default router;
