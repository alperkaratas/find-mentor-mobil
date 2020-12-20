/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Linking,
} from 'react-native';
import axios from 'axios';
import {RenderItem} from '../components/activementorships';
import {BackButton} from '../components/SVGR-Components';

const ActiveMentorships = (props) => {
  const [mentorship, setMentorships] = useState([{}]);

  useEffect(() => {
    getActiveMentorships();
  }, []);

  const getActiveMentorships = async () => {
    let response = await axios.get(
      'https://findmentor.network/activeMentorships.json',
    );
    setMentorships(response.data.mentorships);
  };

  const renderItem = ({item}) => <RenderItem data={item} />;

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButtonView}>
        <BackButton width={25} height={25} fill={'#17aa90'} />
      </TouchableOpacity>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Active Mentorships</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            'https://docs.google.com/forms/d/e/1FAIpQLSeL6-beT2prYlrD3gyRqZz2ex94CNAe2T9-Ev2I_pd92BOS7g/viewform',
          )
        }
        style={{alignSelf: 'center', marginVertical: 10}}>
        <Text style={{color: '#007bff', fontWeight: 'bold', fontSize: 15}}>
          Add your mentorship campaign
        </Text>
      </TouchableOpacity>
      <View
        style={{alignSelf: 'center', marginVertical: 20, marginHorizontal: 10}}>
        <Text>◦ This community, driven/developed by a fellow community.</Text>
        <Text>◦ As you can see, this project is the mentorship project.</Text>
        <Text>◦ Developed by mentees.</Text>
        <Text>
          ◦ You can find the mentors active mentorship campaigns below.
        </Text>
        <Text>◦ Pick one & contribute. You're mentee now.</Text>
      </View>
      <FlatList
        data={mentorship}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerView: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  headerText: {
    color: '#17aa92',
    fontSize: 27,
    fontWeight: 'bold',
  },
  backButtonView: {
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 15,
  },
});

export {ActiveMentorships};
