import React, { Component } from 'react'
import RootNavigator from './navigation/StackNavigator';
import {ApolloProvider} from '@apollo/client';
import { client } from './api/Client';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootNavigator/>
      </ApolloProvider>
    )
  }
}
export default App;