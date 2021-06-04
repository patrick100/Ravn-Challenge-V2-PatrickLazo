import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import List from '../components/List/List.js';


function Home({ navigation }) {
  return(<List navigation={navigation}/>);
}

export default Home;