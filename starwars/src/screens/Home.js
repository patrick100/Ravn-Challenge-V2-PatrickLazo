import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

function Home({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Info" onPress={() => {navigation.navigate('Info');}}/>
    </View>
  );
}

export default Home;