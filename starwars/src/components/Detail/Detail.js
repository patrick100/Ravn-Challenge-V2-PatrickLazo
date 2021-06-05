import React, { Component } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import styles from './Detail.style.js';

function Detail({info}) {
  
  const GeneralInformationData = 
  [
    {name:'Eye Color',  value: info.eyeColor},
    {name:'Hair Color', value: info.hairColor},
    {name:'Skin Color', value: info.skinColor},
    {name:'Birth Year', value: info.birthYear}  
  ];

  const renderItemGeneralInformation = ({ item }) => (
    <View style={styles.content_name_value}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.value}>{item.value}</Text>
    </View>
  );
  const renderItemVechicles = ({ item }) => (
    <View style={styles.content_name}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
  const renderSeparator = () => {
    return (
      <View style={styles.separator}/>
    );
  };

  return(
        <View style={styles.container}>
            <Text style={styles.header}>General Information</Text>
            <FlatList
                data={GeneralInformationData}
                ItemSeparatorComponent={renderSeparator}
                ListFooterComponent={renderSeparator}
                renderItem={renderItemGeneralInformation}
                keyExtractor={(item, index) => index.toString()}
            />
            <Text style={styles.header}>Vehicles</Text>
            <FlatList
                data={info.vehicleConnection.vehicles}
                ItemSeparatorComponent={renderSeparator}
                ListFooterComponent={renderSeparator}
                renderItem={renderItemVechicles}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

export default Detail;