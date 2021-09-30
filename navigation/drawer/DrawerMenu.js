import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Alert} from 'react-native';

import {
  Avatar,
  Text,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
  Title,
  Caption,
} from 'react-native-paper';

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import Icons from '../../constants/Icons';
import Color from '../../constants/Color';

function DrawerMenu(props) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{paddingLeft: 20}}>
          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Avatar.Image
              source={{
                uri: 'https://i.pinimg.com/originals/e8/32/9b/e8329b9e180e820344285a1f6c47ded4.jpg',
              }}
              size={50}
            />
            <View
              style={{
                marginLeft: 15,
                flexDirection: 'column',
              }}>
              <Title style={styles.userName}>Actor Vijay</Title>
              <Caption style={styles.userMail}>vijay@gmail.com</Caption>
            </View>
          </View>
        </View>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icons.MaterialIcons name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
        />
      </Drawer.Section>
    </View>
  );
}

export default DrawerMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.tealDark,
    paddingTop: 20,
    paddingBottom: 40,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  userName: {
    fontSize: 16,
    color: Color.white,
    fontFamily: 'Montserrat-SemiBold',
  },
  userMail: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: 'CormorantGaramond-LightItalic',
    color: 'white',
  },
  bottomSection: {
    marginBottom: 15,
    borderTopColor: Color.tealDark,
    borderTopWidth: 1,
  },
});
