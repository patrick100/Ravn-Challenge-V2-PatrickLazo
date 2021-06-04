import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View,SafeAreaView,TouchableOpacity} from 'react-native';
import { fakeServer } from './fakeServer';
import Loading from '../../components/Loading/Loading';
import { GET_ALL_PEOPLE } from '../../api/Query';
import { useQuery } from '@apollo/client';
import ItemList from '../../components/ItemList/ItemList';
import styles from './List.style.js';

const ListFooterComponent = () => (<Loading/>);

export default function List({ navigation }) {

    console.log(navigation);
    const { data, loading } = useQuery(GET_ALL_PEOPLE);
    if (loading) {
      return <Loading />
    }

  renderSeparator = () => {
    return (
      <View style={styles.separator}/>
    );
  };
  return (
    <SafeAreaView  style={styles.container}>    
    <FlatList 
      data={data.allPeople.people}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Info',{item: item})}> 
          <ItemList item={item}/>
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={renderSeparator}
      keyExtractor={(item) => item.id.toString()}
    />
    </SafeAreaView >
  );
}

