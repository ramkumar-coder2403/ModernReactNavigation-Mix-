import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import DatePick from '../../components/DatePick';

function Ledger({navigation}) {
  const [showPicker, setShowPicker] = useState(true);
  //const close = navigation.replace('initial');

  return (
    <View style={styles.container}>
      <Text>Ledger</Text>
    </View>
  );
}

export default Ledger;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
