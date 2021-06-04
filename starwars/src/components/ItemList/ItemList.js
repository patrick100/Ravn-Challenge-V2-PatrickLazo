import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native'
import styles from './ItemList.style.js';
import Icon from 'react-native-vector-icons/FontAwesome';


function ItemList({ item }) {
    return(
        <View style={styles.content}>
            <View style={styles.info_content}>
                <Text style={styles.name}>
                    {item.name}
                </Text>
                <Text style={styles.description}>
                    {item.species? item.species.name: 'Human'} from { item.homeworld.name}
                </Text>
            </View>
            <Icon style={styles.icon} name="chevron-right" />
        </View>
    );
}

export default ItemList;