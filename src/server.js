import express from 'express';
import bodyParser from 'body-parser';
import {graphiqlExpress,graphqlExpress} from 'apollo-server-express';
import {makeExecutableSchema} from 'graphql-tools'
import mongoose from './config/db/mongodb'
import empTypeDefs from './schema/empSchema'
import empResolvers from './resolvers/empResolvers'
import empModel from './models/employeesModel'


const empSchema = makeExecutableSchema({typeDefs: empTypeDefs, resolvers: empResolvers})

const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if ('OPTIONS' == req.method) {
    res.send('200');
  } else {
    next();
  }
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/emp', bodyParser.json(), graphqlExpress(req => {
  return {
    schema: empSchema,
    context: {
        empModel
    },
    formatError: err => {
      if (err.originalError && err.originalError.error_message) {
        err.message = err.originalError.error_message;
      }

      return err;
    }
  }
}))


app.use('/graphiql', graphiqlExpress({endpointURL: '/emp'}))

app.listen(3001, () => {
 console.log(`server started on port 3001`);
});
