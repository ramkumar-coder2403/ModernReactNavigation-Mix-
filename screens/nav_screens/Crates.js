import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function Crates() {
  return (
    <View style={styles.container}>
      <Text>Crates</Text>
    </View>
  );
}

export default Crates;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
