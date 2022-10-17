import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../models/HomeScreen';
import AsteroidScreen from '../models/AsteroidScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Asteroid"
          component={AsteroidScreen}
          options={{title: 'Asteroid Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
