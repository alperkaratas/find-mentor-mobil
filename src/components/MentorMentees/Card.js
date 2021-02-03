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
import {Avatar} from 'react-native-elements';
import {Github, Linkedin, Twitter} from '../SVGR-Components';

const Card = ({navigation, data, listType = 'mentor'}) => {
  const twitterUrl = data.twitter_handle;
  const githubUrl = data.github;
  const linkedinUrl = data.linkedin;

  const getBorderTopColor = () => {
    const mentorColor = '#17aa90';
    const menteeColor = '#2f6998';
    const bothColor = '#ffc400';

    if (listType === 'mentor') {
      return mentorColor;
    }
    if (listType === 'mentee') {
      return menteeColor;
    }
    switch (data.mentor) {
      case 'Mentor':
        return mentorColor;
      case 'Mentee':
        return menteeColor;
      default:
        return bothColor;
    }
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MMDetail', {
            slug: data.slug,
          })
        }
        style={{
          ...styles.cardView,
          borderTopColor: getBorderTopColor(),
        }}>
        <View style={styles.iconView}>
          <TouchableOpacity
            style={twitterUrl !== '' ? styles.oneIconView : {display: 'none'}}
            onPress={() => Linking.openURL(twitterUrl)}>
            <Twitter width={26} height={26} />
          </TouchableOpacity>
          <TouchableOpacity
            style={githubUrl !== '' ? styles.oneIconView : {display: 'none'}}
            onPress={() => Linking.openURL(githubUrl)}>
            <Github width={26} height={26} />
          </TouchableOpacity>
          <TouchableOpacity
            style={linkedinUrl !== '' ? styles.oneIconView : {display: 'none'}}
            onPress={() => Linking.openURL(linkedinUrl)}>
            <Linkedin width={26} height={26} />
          </TouchableOpacity>
        </View>
        <Avatar
          rounded
          source={{
            uri: data.avatar,
          }}
          size="large"
        />
        <View style={styles.nameView}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{...styles.nameStyle, color: getBorderTopColor()}}>
            {data.name}
          </Text>
        </View>
        <View style={styles.goalsView}>
          <Text numberOfLines={3} ellipsizeMode="tail" style={styles.goalsText}>
            {data.displayInterests}
          </Text>
        </View>
        {listType === 'both' && (
          <View style={styles.goalsView}>
            <Text style={styles.goalsText}>
              {data.mentor === 'İkisi de' ? 'Mentor & Mentee' : data.mentor}
            </Text>
          </View>
        )}
        <View
          style={
            data.isHireable === true
              ? [styles.hireMe, {borderColor: getBorderTopColor()}]
              : {display: 'none'}
          }>
          <Text style={[styles.hireMeText, {color: getBorderTopColor()}]}>
            Hire Me
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardView: {
    marginLeft: 12,
    backgroundColor: '#fff',
    marginVertical: 6,
    alignSelf: 'center',
    width: Dimensions.get('window').width / 2.2,
    height: 300,
    alignItems: 'center',
    borderTopWidth: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    borderRadius: 5,
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
    height: 20,
  },
  nameStyle: {
    fontSize: 17,
    fontWeight: '700',
  },
  goalsView: {
    marginHorizontal: 7,
    marginVertical: 15,
    alignSelf: 'center',
    height: 40,
  },
  goalsText: {
    color: '#898989',
  },
  hireMe: {
    width: 80,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 15,
  },
  hireMeText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
  },
});

export {Card};
