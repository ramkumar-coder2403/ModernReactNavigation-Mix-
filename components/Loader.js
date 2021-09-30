import React from 'react';
import {
  ModalBaseProps,
  ActivityIndicator,
  StyleSheet,
  Modal,
  Text,
  View,
} from 'react-native';

const Loader = props => {
  const {loading, ...atributes} = props;
  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={loading}
      onRequestClose={() => {
        console.log('close model');
      }}>
      <View style={styles.modelBackground}>
        <View style={styles.activityIndicaterWrapper}>
          <ActivityIndicator
            animating={true}
            color="#000000"
            size="large"
            style={styles.activityIndicator}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  modelBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicaterWrapper: {
    backgroundColor: '#fff',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
