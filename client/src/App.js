import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//components
import BookList  from './components/BookList';

// apoolo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider>
    <div id="main">
      <h1>React GraphQL MongoDB App</h1>
      <hr/>
      <h2>My Reading List</h2>
      <BookList/>
    </div>
    </ApolloProvider>
  );
}

export default App;
