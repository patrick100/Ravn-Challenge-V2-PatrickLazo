import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import Detail from '../components/Detail/Detail.js';

function Info({route, navigation}) {

  const {item} = route.params;

  useEffect(() => {
    navigation.setOptions({ title: item.name })
  },[])

  return(
    <Detail info={item}/>
  );
}

export default Info;