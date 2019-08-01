import 'dotenv/config';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import expressPlayground from 'graphql-playground-middleware-express';

import './services/cache';
import routes from './routes';
import { connectDb } from './models';

const app = express();

app.use(express.json());
app.use('/graphql', graphqlHTTP({
  schema: {},
  graphiql: true
}));
app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

routes(app);

connectDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}`);
  });
});