import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {Avatar, Accessory} from 'react-native-elements';
import {BackButton} from '../components/SVGR-Components';
import {Divider} from 'react-native-elements';

const MentorMenteesDetail = ({route, navigation, props}) => {
  const {name, interests, goals, avatar} = route.params;
  return (
    <SafeAreaView style={styles.mainView}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.buttonView}>
        <BackButton width={25} height={25} />
      </TouchableOpacity>

      <View style={styles.avatarView}>
        <Avatar
          rounded
          source={{
            uri: avatar,
          }}
          size="xlarge"
        />
      </View>

      <View style={styles.nameView}>
        <Text style={styles.nameText}>{name}</Text>
        <Divider
          style={{backgroundColor: 'white', height: 1, marginVertical: 5}}
        />
      </View>

      <Text>Interests: {interests}</Text>
      <Text>Goals: {goals}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#222323',
  },
  buttonView: {
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  avatarView: {
    marginVertical: 30,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: 'white',
  },
  nameView: {
    marginVertical: 20,
  },
  nameText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
  },
  interestView: {},
  interestText: {},
});

export {MentorMenteesDetail};
