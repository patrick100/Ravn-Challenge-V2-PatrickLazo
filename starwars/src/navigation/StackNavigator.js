import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Info from '../screens/Info';
import {colors,styles} from '../theme.js';

const Stack = createStackNavigator();

function RootNavigator(): React.ReactElement {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.RavnBlack,
        },
        headerTintColor: colors.white,
        headerTitleStyle: styles.headerText,
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen name="People of Star Wars" component={Home} />
      <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;