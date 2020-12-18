/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {Card} from '../components/MentorMentees';
import {Divider} from 'react-native-elements';
import {SearchBar} from '../components/SearchBar';
import {Search} from '../components/SVGR-Components';

const Mentors = (props) => {
  const [person, setPerson] = useState(['']);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');

  useEffect(() => {
    getPersons();
  }, []);

  const getPersons = async () => {
    let response = await axios.get('https://findmentor.network/persons.json');
    setPerson(response.data.filter((x) => x.mentor !== 'Mentee'));
    setLoading(false);
  };

  const renderItem = ({item}) => (
    <Card data={item} navigation={props.navigation} listType="mentor" />
  );

  const filteredData = text
    ? person.filter((item) => {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
    : person;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>👉Mentors</Text>
        <Divider style={{backgroundColor: '#454646', height: 3}} />
      </View>
      <View style={styles.searchView}>
        <Search width={27} height={27} />
        <SearchBar
          onSearch={(text) => setText(text)}
          value={text}
          placeHolder="Search in mentors by name..."
          placeHolderTextColor="white"
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
    marginVertical: 20,
  },
  headerText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#17aa90',
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

export {Mentors};
