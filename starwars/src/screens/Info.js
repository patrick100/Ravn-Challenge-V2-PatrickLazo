import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

function Info({route}) {
  
  const {item} = route.params;
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Info Screen</Text>
      <Text>item: {JSON.stringify(item)}</Text>
    </View>
  );
}

export default Info;