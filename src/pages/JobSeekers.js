import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';
import axios from 'axios';
import { Card } from '../components/MentorMentees';

const JobSeekers = (props) => {
  const [person, setPerson] = useState(['']);
  useEffect(() => {
    getPersons();
  }, []);

  const getPersons = async () => {
    let response = await axios.get('https://findmentor.network/persons.json');
    let hirePersons = response.data.filter(p => p.isHireable === true);
    setPerson(hirePersons.sort(function (a, b) { return b.contributions.length - a.contributions.length }))
  };

  const renderItem = ({ item }) => (
    <Card data={item} navigation={props.navigation} listType="name" />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={{ paddingLeft: 10}}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://docs.google.com/forms/d/e/1FAIpQLSdP5wCQAyGnWrtRIO0otVqqbYsuVRYqQXou7SreJ5XPDUOwPQ/viewform',
              )
            }
            style={{ marginVertical: 10 }}>
            <Text style={{ color: '#32475b', fontWeight: 'bold', fontSize: 18 }}>
              Add yourself as a Job Seeker!
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{ marginBottom: 3 }}>This platform getting 1m+ page views per month. Add yourself as a job seeker, totally free to add!
              The job seekers are  <Text style={{ fontWeight: "bold" }}>sorted by contributions</Text>.
              You can contribute to the <TouchableOpacity style={{ margin: 0 }} onPress={() => { props.navigation.navigate('ActiveMentorships') }}>
                <Text style={{ color: '#007bff', position: 'relative', top: 3 }}>mentorship</Text></TouchableOpacity> projects, that's the way you can be shown your profile.</Text>
          </View>
        </View>
        <View>
          <FlatList
            data={person}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            numColumns={2}
          />
        </View>
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
});

export { JobSeekers };
