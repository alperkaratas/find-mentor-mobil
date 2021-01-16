import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
  Linking
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BackButton } from '../components/SVGR-Components';

const Jobs = (props) => {

  const [Jobs, setJobs] = useState([{
    date: 'defaultValue',
    company: 'defaultValue',
    position: 'defaultValue',
    address: 'defaultValue',
    description: 'defaultValue',
    location: 'defaultValue',
    logo: 'defaultValue',
    tags: 'defaultValue',
    remote: 'defaultValue',
    isRemoveAllowed: 'defaultValue'
  }])
  useEffect(() => {
    getJobs()
  }, [])
  const getJobs = async () => {
    const res = await axios.get('https://findmentor.network/jobs.json')
    setJobs(res.data.jobs)
  }
  const JobInfo = (item) => {
    console.warn(item.company);
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('JobDetail', {
          job: item
        })}
      >
        <View style={styles.JobBox}>
          <View>
            <Image source={{ uri: item.logo }} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
          </View>
          <View>
            <Text style={{ color: '#000000e6', fontWeight: 'bold' }}>{item.company}</Text>
            <Text style={{ color: '#00000080' }}>{item.position}</Text>
          </View>
          <View>
            <Text>{item.date.slice(0, 10).replace('.', ' ').replace('.', ' ')}</Text>
            <Text>Remote: {item.remote}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }



  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButtonView}>
        <BackButton width={25} height={25} fill={'#17aa90'} />
      </TouchableOpacity>
      <ScrollView>
        <View>
          <View style={styles.box}>
            <Text style={styles.boxHeader}>
              Jobs
          </Text>
            <Text>
              This community, driven/developed by a fellow community.</Text>
            <Text>
              As you can see, this project is the mentorship project. Developed by mentees.
          </Text>
            <Text>
              You can list your job listing below for 30 days.
          </Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSehaOyJDsY_mKOPNYtwrgLv3ynbLUBDsIUFJqyTnNfW16ijPA/viewform')}>
              <Text style={styles.link}>
                Add your job listing
            </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={Jobs}
            keyExtractor={(item, index) => item.date}
            renderItem={({ item }) => JobInfo(item)}
          />
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  backButtonView: {
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  box: {
    margin: 10,
    backgroundColor: '#e9ecef',
    padding: 10,
    paddingTop: 5,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    shadowColor: '#dcdcdc',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5
  },
  boxHeader: {
    marginBottom: 5,
    fontSize: 22,
    color: '#212529',
    fontWeight: 'bold'
  },
  link: {
    color: '#007bff',
    position: 'relative',
    top: 4,
    fontWeight: 'bold'
  },
  JobBox: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width / 1.05,
    height: 100,
    margin: 10,
    padding: 10,
    paddingTop: 5,
    backgroundColor: '#F7F6F8',
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,

    shadowColor: '#dcdcdc',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5
  }
});

export { Jobs };
