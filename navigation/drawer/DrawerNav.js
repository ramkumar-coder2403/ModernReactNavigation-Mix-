import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Screen from '../../constants/Screen';
import DrawerMenu from './DrawerMenu';
import HomeTab from '../bottom/HomeTab';
import Icons from '../../constants/Icons';
import Color from '../../constants/Color';

const Drawer = createDrawerNavigator();

//drawerContent={props => <DrawerMenu {...props} />}

function DrawerNav({navigation}) {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: Color.tealMedium,
        swipeEnabled: true,
        gestureEnabled: true,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Color.tealLight,
        },
        headerTintColor: 'white',
      }}
      drawerContent={props => <DrawerMenu {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeTab}
        options={{
          title: 'Home',
          headerShown: false,
          drawerIcon: ({color, size}) => (
            <Icons.MaterialCommunityIcons
              name="home-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Ledger"
        component={Screen.Ledger}
        options={{
          title: 'View Ledger',
          drawerIcon: ({color, size}) => (
            <Icons.Entypo name="book" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="PaymentPage"
        component={Screen.Payment}
        options={{
          title: 'Payment Details',
          drawerIcon: ({color, size}) => {
            return <Icons.AntDesign name="layout" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="ReturnsPage"
        component={Screen.Returns}
        options={{
          title: 'Returns Details',
          drawerIcon: ({color, size}) => {
            return (
              <Icons.AntDesign name="shoppingcart" size={size} color={color} />
            );
          },
        }}
      />
      <Drawer.Screen
        name="CratesPage"
        component={Screen.Crates}
        options={{
          title: 'Crates',
          drawerIcon: ({color, size}) => {
            return (
              <Icons.AntDesign name="filetext1" size={size} color={color} />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
