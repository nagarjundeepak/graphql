import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//components
import BookList  from './components/BookList';
import AddBook from './components/AddBook';

// apoolo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div id="main">
      <h1>React GraphQL MongoDB App</h1>
      <hr/>
      <h2>My Reading List</h2>
      <BookList/>
      <AddBook/>
    </div>
    </ApolloProvider>
  );
}

export default App;
