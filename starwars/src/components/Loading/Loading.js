import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native'
import {SpinColor,styles} from './Loading.style.js';

export default function Loading() {
    return(
        <View  style={[styles.container, styles.horizontal]}>
        <ActivityIndicator  size="large" color={SpinColor} />
            <Text
                style={styles.loadingText}
            >Loading</Text>
        </View>
    );

}