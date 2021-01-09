/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {Card} from '../components/MentorMentees';
import {SearchBar} from '../components/SearchBar';
const Mentees = (props) => {
  const [person, setPerson] = useState(['']);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');

  useEffect(() => {
    getPersons();
  }, []);

  const getPersons = async () => {
    let response = await axios.get('https://findmentor.network/persons.json');
    setPerson(response.data.filter((x) => x.mentor !== 'Mentor'));
    setLoading(false);
  };

  const renderItem = ({item}) => (
    <Card data={item} navigation={props.navigation} listType="name" />
  );
  const filteredData = text
    ? person.filter((item) => {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
    : person;
  const count = Object.keys(person).length;
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="black" />
      <View style={styles.headerView}>
        <Text style={styles.headerText}>👉Mentees ({count})</Text>
      </View>
      <View style={styles.searchView}>
        <SearchBar
          onSearch={(text) => setText(text)}
          value={text}
          placeHolder="Search in mentees by name..."
          placeHolderTextColor="black"
        />
      </View>

      {loading ? (
        <View style={{marginVertical: 10}}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <FlatList
            data={filteredData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
            numColumns={2}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerView: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  headerText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#2c7cfe',
  },
  textInput: {
    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
  },
  searchView: {
    marginVertical: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Mentees};
