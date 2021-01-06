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
import {Search} from '../components/SVGR-Components';
import { Appbar, IconButton,Colors  } from 'react-native-paper';
const Mentees = (props) => {
  const [person, setPerson] = useState(['']);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const [search, setSearch] = useState(false)
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

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="black"/>
   <Appbar.Header theme={{colors: {primary: "#222323"}}}>
     {
       search ? <View style={styles.searchView}>
       <Appbar.BackAction onPress={() => {setSearch(e => !e);setText("")}} color={"#2f6998"} />
       <SearchBar
         onSearch={(text) => setText(text)}
         value={text}
         placeHolder="Search in mentees by name..."
         placeHolderTextColor="black"
       />
     </View> :<><Appbar.Content title="Mentees" color="#2f6998" />
     <Appbar.Action icon="magnify" onPress={() => {setSearch(e => !e)}} color={"#2f6998"} /></>
     }

    </Appbar.Header>
      
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
