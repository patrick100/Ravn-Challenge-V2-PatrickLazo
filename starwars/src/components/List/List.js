import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import Loading from '../../components/Loading/Loading';
import { GET_ALL_PEOPLE } from '../../api/Query';
import { useQuery } from '@apollo/client';
import ItemList from '../../components/ItemList/ItemList';
import styles from './List.style.js';

export default function List({ navigation }) {

    const { data, loading, error, fetchMore } = useQuery(GET_ALL_PEOPLE);   
    if (loading) {return <Loading />}
    if (error) {return <Text style={styles.error}>Failed to Load Data</Text>}
    const renderSeparator = () => (<View style={styles.separator}/>);

    function renderFooter(){
        if(data.allPeople.pageInfo.hasNextPage == true) 
              return <View>{renderSeparator()}<Loading/></View>
        return renderSeparator()
    }

    const fetchData = async ()  => {  
      fetchMore({
        variables: {
          cursor: data.allPeople.pageInfo.endCursor,
        }
      });
    };
    
    //Call data asynchronously 
    if( data.allPeople.pageInfo.hasNextPage ) {
      fetchData();
    }

    return (
        <SafeAreaView  style={styles.container}>    
          <FlatList 
            data={data.allPeople.people}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Info',{item: item})}> 
                {<ItemList item={item} />}
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={renderSeparator}
            ListFooterComponent={renderFooter}
            keyExtractor={(item) => item.id.toString()}
          />
        </SafeAreaView >
    );
}

