import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icons from '../../constants/Icons';
import Screen from '../../constants/Screen';

import Color from '../../constants/Color';

const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Color.tealLight,
        tabBarInactiveTintColor: Color.tealWhite,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: Color.tealDark,

          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
          height: 50,
        },
      }}>
      <Tab.Screen
        name="HomePage"
        component={Screen.Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icons.MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="UserProfilePage"
        component={Screen.Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icons.MaterialCommunityIcons
              name="account"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTab;
