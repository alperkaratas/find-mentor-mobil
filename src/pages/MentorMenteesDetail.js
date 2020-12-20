/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Linking,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {Avatar} from 'react-native-elements';
import {BackButton} from '../components/SVGR-Components';
import {Divider} from 'react-native-elements';
import {
  Github,
  Linkedin,
  Twitter,
  ShareTwitter,
  Question,
} from '../components/SVGR-Components';

const MentorMenteesDetail = ({route, navigation, props}) => {
  const {
    name,
    interests,
    goals,
    avatar,
    mentor,
    slug,
    twitter_handle,
    linkedin,
    github,
  } = route.params;
  const qrValue = `https://findmentor.network/peer/${slug}`;
  const twitterUrl = twitter_handle;
  const githubUrl = github;
  const linkedinUrl = linkedin;

  return (
    <SafeAreaView style={styles.mainView}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.buttonView}>
        <BackButton
          width={25}
          height={25}
          fill={
            mentor === 'Mentor' || mentor === 'İkisi de' ? '#17aa90' : '#2c7cfe'
          }
        />
      </TouchableOpacity>
      <ScrollView style={{flex: 1, backgroundColor: '#222323'}}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.mmView}>
            {mentor === 'Mentor' || mentor === 'İkisi de' ? (
              <Text
                style={{color: '#fdc405', fontWeight: 'bold', fontSize: 23}}>
                Mentor & Mentee
              </Text>
            ) : (
              <Text style={styles.mmText}>{mentor}</Text>
            )}
          </View>
          <View
            style={
              mentor === 'Mentor' || mentor === 'İkisi de'
                ? {
                    marginVertical: 20,
                    borderWidth: 2,
                    borderRadius: 100,
                    borderColor: '#fdc405',
                  }
                : styles.avatarView
            }>
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
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 15,
            }}
            onPress={() =>
              Linking.openURL(
                `https://twitter.com/intent/tweet?text=Hey!%20Here%20my%20find-mentor%20profile&url=https://findmentor.network/peer/${slug}`,
              )
            }>
            <View style={{marginRight: 10}}>
              <ShareTwitter width={30} height={30} />
            </View>
            <Text
              style={{
                fontSize: 20,
                color: '#2c7cfe',
                fontWeight: '600',
              }}>
              Share on Twitter
            </Text>
          </TouchableOpacity>
          {mentor === 'Mentor' || mentor === 'İkisi de' ? (
            <TouchableOpacity
              onPress={() => Linking.openURL(twitterUrl)}
              style={{
                backgroundColor: '#fdc405',
                padding: 10,
                borderRadius: 5,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Question
                  style={{marginRight: 10}}
                  width={25}
                  height={25}
                  fill={'#222323'}
                />
                <Text
                  style={{fontSize: 17, fontWeight: '600', color: '#222323'}}>
                  Ask for a mentorship project
                </Text>
              </View>
            </TouchableOpacity>
          ) : null}
          <ScrollView style={styles.infoView}>
            <View style={styles.interestView}>
              <Text
                style={{color: '#22262a', fontSize: 20, fontWeight: 'bold'}}>
                Interests:{' '}
              </Text>
              <Text style={{color: '#23272b'}}>{interests}</Text>
            </View>
            <View style={styles.goalsView}>
              <Text
                style={{color: '#22262a', fontSize: 20, fontWeight: 'bold'}}>
                Goals:{' '}
              </Text>
              <Text style={{color: '#23272b'}}>{goals}</Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                marginBottom: 40,
              }}>
              <TouchableOpacity
                style={styles.oneIconView}
                onPress={() => Linking.openURL(twitterUrl)}>
                <Twitter width={40} height={40} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.oneIconView}
                onPress={() => Linking.openURL(githubUrl)}>
                <Github width={40} height={40} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.oneIconView}
                onPress={() => Linking.openURL(linkedinUrl)}>
                <Linkedin width={40} height={40} />
              </TouchableOpacity>
            </View>
          </ScrollView>
          <ScrollView style={styles.githubView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{marginRight: 10}}>
                <Github width={35} height={35} />
              </View>
              <Text
                style={{fontSize: 25, fontWeight: 'bold', color: '#22262a'}}>
                GitHub
              </Text>
            </View>
            <Divider
              style={{backgroundColor: '#d6d6d6', height: 1, marginVertical: 8}}
            />
          </ScrollView>
          <ScrollView style={styles.activeMshipsView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 25, fontWeight: 'bold', color: '#22262a'}}>
                Active Mentorships
              </Text>
            </View>
            <Divider
              style={{backgroundColor: '#d6d6d6', height: 1, marginVertical: 8}}
            />
          </ScrollView>
          <ScrollView style={styles.contView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 25, fontWeight: 'bold', color: '#22262a'}}>
                Contributed
              </Text>
            </View>
            <Divider
              style={{backgroundColor: '#d6d6d6', height: 1, marginVertical: 8}}
            />
          </ScrollView>
          <ScrollView style={styles.tweetsView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{marginRight: 10}}>
                <ShareTwitter width={35} height={35} />
              </View>
              <Text
                style={{fontSize: 25, fontWeight: 'bold', color: '#22262a'}}>
                Tweets
              </Text>
            </View>
            <Divider
              style={{backgroundColor: '#d6d6d6', height: 1, marginVertical: 8}}
            />
          </ScrollView>
          <View style={styles.qrCodeView}>
            <QRCode size={210} value={qrValue} />
          </View>
        </View>
      </ScrollView>
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
    marginVertical: 15,
  },
  avatarView: {
    marginVertical: 20,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: 'white',
  },
  nameView: {
    marginBottom: 15,
  },
  nameText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
  },
  mmView: {
    borderWidth: 0.5,
    padding: 10,
    borderColor: 'white',
    borderRadius: 5,
  },
  mmText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
  },
  infoView: {
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 15,
    marginHorizontal: 3,
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 4,
    backgroundColor: 'white',
    margin: 20,
  },
  githubView: {
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 15,
    marginHorizontal: 3,
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 2.5,
    backgroundColor: 'white',
    margin: 20,
  },
  activeMshipsView: {
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 15,
    marginHorizontal: 3,
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 2.2,
    backgroundColor: 'white',
    margin: 20,
  },
  contView: {
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 15,
    marginHorizontal: 3,
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 4,
    backgroundColor: 'white',
    margin: 20,
  },
  tweetsView: {
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 15,
    marginHorizontal: 3,
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 2,
    backgroundColor: 'white',
    margin: 20,
  },
  interestView: {marginVertical: 7},
  goalsView: {marginVertical: 7, marginBottom: 35},
  oneIconView: {
    marginHorizontal: 20,
  },
  qrCodeView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.5,
    marginVertical: 30,
    backgroundColor: 'white',
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 3.4,
  },
});

export {MentorMenteesDetail};
