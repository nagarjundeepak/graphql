const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');


const app = express();

// connect to mlab database
mongoose.connect("mongodb://nagarjun:oneplus5@ds349247.mlab.com:49247/graphql");
mongoose.connection.once('open',()=>{
    console.log('connection made to database');
})


app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(4000, ()=>{
    console.log('Now listening to the port 4000');
});