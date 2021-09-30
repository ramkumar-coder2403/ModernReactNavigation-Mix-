import React, {useState, useEffect} from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TextInput} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

import Color from '../constants/Color';
import Icon from '../constants/Icons';

function DatePick(props, {navigation}) {
  //first Date selection
  const [date, setDate] = useState(new Date());
  var FirstDate = moment(date).format('DD-MMM-YYYY');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  //second Date selection
  const [dateSecond, setDateSecond] = useState(new Date());
  var secondDate = moment(dateSecond).format('DD-MMM-YYYY');
  const [modeSecond, setModeSecond] = useState('date');
  const [showSecond, setShowSecond] = useState(false);
  //For Visibility
  const {showPicker, close} = props;

  /* const [visible, setVisible] = useState(false);
  if (showPicker) {
    setVisible(true);
  } else {
    setVisible(false);
  } */

  //First Date
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  //second Date selection
  const onChangeSecond = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowSecond(false);
    setDateSecond(currentDate);
  };

  const showDatepickerSecond = () => {
    setShowSecond(true);
  };

  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={showPicker}
      onRequestClose={() => {
        console.log('close model');
      }}>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#fff',
            height: 200,
            width: 360,
            borderRadius: 10,
            display: 'flex',
            padding: 10,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <View style={styles.secondBody}>
            <Text style={styles.subHeader}>Opening Date</Text>
            <Text style={styles.calendarText} onPress={showDatepicker}>
              {FirstDate}
            </Text>
            <Icon.AntDesign
              name="calendar"
              size={30}
              color={Color.tealMedium}
              onPress={showDatepicker}
            />
          </View>
          <View style={styles.secondBody}>
            <Text style={styles.subHeader}>End Date</Text>
            <Text style={styles.calendarText} onPress={showDatepickerSecond}>
              {secondDate}
            </Text>
            <Icon.AntDesign
              name="calendar"
              size={30}
              color={Color.tealMedium}
              onPress={showDatepickerSecond}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                close;
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                alert(FirstDate + '///' + secondDate);
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Select</Text>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                display="default"
                onChange={onChange}
                minimumDate={new Date(2018, 0, 1)}
                maximumDate={new Date(2040, 11, 30)}
              />
            )}
            {showSecond && (
              <DateTimePicker
                testID="dateTimePicker"
                value={dateSecond}
                mode={modeSecond}
                display="default"
                onChange={onChangeSecond}
                minimumDate={new Date(2018, 0, 1)}
                maximumDate={new Date(2040, 11, 30)}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default DatePick;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000040',
    paddingRight: 20,
    paddingLeft: 20,
  },
  calendarText: {
    borderWidth: 1,
    borderColor: Color.tealMedium,
    borderRadius: 5,
    fontSize: 16,
    padding: 5,
    alignItems: 'center',
    flex: 1,
    color: Color.black,
  },
  secondBody: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  subHeader: {
    marginEnd: 20,
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonStyle: {
    borderRadius: 5,
    backgroundColor: Color.tealDark,
    padding: 10,
    margin: 5,
  },
});
