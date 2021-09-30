// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screen from './constants/Screen';
import DrawerNav from './navigation/drawer/DrawerNav';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="initial" component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
