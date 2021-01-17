import React from 'react';
import { Button } from 'react-native';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  Linking
} from 'react-native';
import { BackButton } from '../components/SVGR-Components';
import { SuitCase, Clock, PaperPlane } from '../components/SVGR-Components';

const JobDetail = ({ route, props, navigation }) => {
  const Job = route.params.job

  const renderTags = () => {

    let array = Job.tags.map(t => {
      return (
        <Text style={{
          backgroundColor: '#f0f0f0',
          color: '#000',
          fontWeight: 'bold',
          margin: 3,
          padding: 3,
          paddingHorizontal: 12,
          borderRadius: 15,
        }}>
          {t}
        </Text>
      )
    })
    return array
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.main}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButtonView}>
          <BackButton
            width={25}
            height={25}
            fill={'#17aa90'}
          />
        </TouchableOpacity>
        <ScrollView>
          <View style={styles.jobBox}>
            <Image
              source={{
                uri: Job.logo
              }}
              style={styles.logo}
            />
            <Text style={{
              color: '#000000e6',
              fontWeight: 'bold',
              fontSize: 24,
              margin: 6
            }}>
              {Job.company}
            </Text>
            <View style={styles.iconAndText}>
              <SuitCase
                width={18}
                height={18}
                fill='#00000040'
                top={5}
                marginRight={5}
              />
              <Text style={{
                color: '#00000080',
                fontSize: 20
              }}>
                {Job.position}
              </Text>
            </View>
            <Text style={{ textAlign: 'justify' }}>
              {Job.description}
            </Text>
            <View style={styles.tags}>
              {renderTags()}
            </View>
            <View style={styles.iconAndText}>
              <PaperPlane
                width={18}
                height={18}
                fill='#000'
                top={5}
                marginRight={5}
              />
              <Text style={{
                color: '#212529',
                fontSize: 20,
                fontWeight: 'bold'
              }}>
                Remote: <Text style={{
                  color: '#2e3237',
                  fontWeight: 'normal',
                  fontSize: 18
                }}>
                  {Job.remote}
                </Text>
              </Text>
            </View>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => { Linking.openURL(Job.address) }}
            >
              <Text style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 20
              }}
              >
                APPLY
            </Text>
            </TouchableOpacity>
            <View style={styles.iconAndText}>
              <Clock
                width={18}
                height={18}
                fill='#000'
                top={5}
                marginRight={5}
              />
              <Text style={{
                color: '#2e3237',
                fontWeight: 'normal',
                fontSize: 18
              }}
              >
                {Job.date.slice(0, 10).replace('.', ' ').replace('.', ' ')}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backButtonView: {
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  main: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1
  },
  jobBox: {
    width: Dimensions.get('window').width / 1.05,
    margin: 10,
    backgroundColor: '#fff',
    padding: 13,
    paddingTop: 5,
    alignSelf: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,

    shadowColor: '#dcdcdc',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5
  },
  applyButton: {
    backgroundColor: '#ffc400',
    padding: 15,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 15,
    margin: 6
  },
  iconAndText: {
    display: 'flex',
    flexDirection: 'row',
    margin: 6
  },
  logo: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    resizeMode: 'contain'
  },
  tags: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 6
  }
});

export { JobDetail };
