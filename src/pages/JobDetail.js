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

const JobDetail = ({ route, props, navigation }) => {
  const Job = route.params.job
  
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButtonView}>
        <BackButton width={25} height={25} fill={'#17aa90'} />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.jobBox}>
          <Image source={{ uri: Job.logo }} style={{ width: Dimensions.get('window').width / 3, height: Dimensions.get('window').width / 3, resizeMode: 'contain' }} />
          <Text style={{ color: '#000000e6', fontWeight: 'bold',fontSize: 24 }}>
            {Job.company}
          </Text>
          <Text style={{ color: '#00000080', fontSize: 20  }}>
            {Job.position}
          </Text>
          <Text>
            {Job.description}
          </Text>
          <Text>
            {'Job.tags'}
          </Text>
          <Text>
            Remote: {Job.remote}
          </Text>
          <TouchableOpacity 
            style={styles.applyButton}
            onPress={() => { Linking.openURL(Job.address) }}
          >
            <Text style={{color: '#fff', fontWeight:'bold'}}>
              APPLY
            </Text>
          </TouchableOpacity>
          <Text>
            {Job.date.slice(0, 10).replace('.', ' ').replace('.', ' ')}
          </Text>
        </View>
      </ScrollView>
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
    flex: 1,
  },
  jobBox: {
    width: Dimensions.get('window').width / 1.05,
    minHeight: Dimensions.get('window').height / 1.07,
    margin: 10,
    marginBottom: 50,
    backgroundColor: '#fff',
    padding: 10,
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
  applyButton:{
    backgroundColor: '#ffc400',
    padding: 15,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 15
  }
});

export { JobDetail };
