import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Avatar, Accessory} from 'react-native-elements';
import {Github, Linkedin, Twitter} from '../SVGR-Components';

const Card = (props) => {
  const twitterUrl = props.data.twitter_handle;
  const githubUrl = props.data.github;
  const linkedinUrl = props.data.linkedin;
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('MMDetail', {
            name: props.data.name,
            interests: props.data.interests,
            goals: props.data.goals,
            avatar: props.data.avatar,
          })
        }
        style={styles.cardView}>
        <View style={styles.iconView}>
          <TouchableOpacity
            style={styles.oneIconView}
            onPress={() => Linking.openURL(twitterUrl)}>
            <Twitter width={26} height={26} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.oneIconView}
            onPress={() => Linking.openURL(githubUrl)}>
            <Github width={26} height={26} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.oneIconView}
            onPress={() => Linking.openURL(linkedinUrl)}>
            <Linkedin width={26} height={26} />
          </TouchableOpacity>
        </View>
        <Avatar
          rounded
          source={{
            uri: props.data.avatar,
          }}
          size="large"
        />
        <View style={styles.nameView}>
          <Text style={styles.nameStyle}>{props.data.name}</Text>
        </View>
        <View style={styles.goalsView}>
          <Text style={styles.goalsText}>{props.data.displayInterests}</Text>
        </View>
        <View style={styles.goalsView}>
          <Text style={styles.goalsText}>
            {props.data.mentor === 'İkisi de'
              ? 'Mentor & Mentee'
              : props.data.mentor}
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 10,
    backgroundColor: '#222323',
    marginVertical: 15,
    alignSelf: 'center',
    width: Dimensions.get('window').width / 2.2,
    height: 300,
    alignItems: 'center',
    borderTopWidth: 7,
    borderTopColor: '#18a990',
    borderRadius: 13,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  iconView: {
    flexDirection: 'row',
    margin: 20,
  },
  oneIconView: {
    marginHorizontal: 10,
  },
  nameView: {
    marginVertical: 10,
  },
  nameStyle: {
    fontSize: 17,
    color: '#18a990',
    fontWeight: '700',
  },
  goalsView: {
    marginHorizontal: 7,
    marginVertical: 15,
    alignSelf: 'center',
  },
  goalsText: {
    color: '#898989',
  },
});

export {Card};
