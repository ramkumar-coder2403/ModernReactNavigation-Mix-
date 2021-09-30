import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function Payment() {
  return (
    <View style={styles.container}>
      <Text>Payment</Text>
    </View>
  );
}

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
