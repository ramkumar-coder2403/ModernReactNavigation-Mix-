import React, {useState, useCallback} from 'react';
import {
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  Modal,
} from 'react-native';

import Icons from '../../constants/Icons';
import {Avatar, Text, Card, Title, Paragraph} from 'react-native-paper';
import Images from '../../constants/Images';
import Color from '../../constants/Color';
import Loader from '../../components/Loader';

function Home({navigation}) {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  return (
    <SafeAreaView style={styles.mainBody}>
      <View style={styles.toolBar}>
        <Icons.AntDesign
          name="bars"
          size={25}
          color="#fff"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        <Avatar.Image
          source={require('../../assets/images/jivana.png')}
          style={{backgroundColor: '#fff'}}
          size={30}
        />
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Loader loading={loading} />
        <View style={styles.subBody}>
          <Text style={styles.textHeading}>Overview</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Card elevation={4} style={styles.cardContent}>
              <Card.Content>
                <View style={{flexDirection: 'row'}}>
                  <Title style={styles.titleStyle}>Billvalue</Title>
                </View>
                <Paragraph style={{color: Color.tealWhite}}>102</Paragraph>
              </Card.Content>
            </Card>

            <Card elevation={4} style={styles.cardContent}>
              <Card.Content>
                <View style={{flexDirection: 'row'}}>
                  <Title style={styles.titleStyle}>Balance</Title>
                </View>
                <Paragraph style={{color: Color.tealWhite}}>102</Paragraph>
              </Card.Content>
            </Card>
          </View>
          <Text style={styles.textHeading}>Operations</Text>
          <View style={{margin: 10, flexDirection: 'column'}}>
            <Card
              elevation={5}
              style={{marginBottom: 20}}
              onPress={() => {
                alert('In Process...');
              }}>
              <Card.Cover source={Images.order} resizeMode="stretch" />
            </Card>
            <Card
              elevation={5}
              style={{marginBottom: 20}}
              onPress={() => {
                alert('In Process...');
              }}>
              <Card.Cover source={Images.payment} resizeMode="contain" />
              {/* <Title
                style={{
                  position: 'absolute',
                  top: 150,
                  left: 140,
                  fontWeight: 'bold',
                  color: '#00796B',
                }}>
                Pay Bills
              </Title> */}
            </Card>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
  },
  toolBar: {
    paddingStart: 10,
    paddingEnd: 20,
    paddingBottom: 10,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color.tealLight,
  },
  subBody: {
    flex: 1,
    marginRight: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  textHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Color.tealDark,
  },
  cardLiveData: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  titleStyle: {
    marginEnd: 20,
    color: Color.tealWhite,
  },
  cardContent: {
    flex: 1,
    marginEnd: 10,
    marginStart: 10,
    backgroundColor: Color.tealMedium,
  },
});
