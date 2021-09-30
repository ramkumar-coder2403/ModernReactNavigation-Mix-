import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function Returns() {
  return (
    <View style={styles.container}>
      <Text>Returns</Text>
    </View>
  );
}

export default Returns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
