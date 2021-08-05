import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from 'apollo-link-context';

import { cache } from './cache';

import EstiloGlobal from './componentes/EstiloGlobal';
import Paginas from './paginas'

const uri = process.env.REACT_APP_API_URI;
const httpLink = createHttpLink({ uri });
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || ''
    }
  };
});

// configura o Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <EstiloGlobal />
      <Paginas />
    </ApolloProvider>
  );
};

export default App;