import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Linking,
  Image,
  ScrollView,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {Logo} from '../components/SVGR-Components';

const WelcomePage = (props) => {
  const githubFindMentor = 'https://github.com/cagataycali/find-mentor';
  const joinNow =
    'https://docs.google.com/forms/d/e/1FAIpQLSc3uWpEeBUCXMoGAJ5qm31p9URBppxXT5L4RJFrTOJee9TFjQ/viewform';
  const discorUrl =
    'https://discord.com/widget?id=786277089577402418&theme=dark';
  return (
    <ScrollView style={{flex: 1}}>
      <SafeAreaView style={styles.main}>
        <View style={styles.iconView}>
          <Logo width={40} height={40} />
          <Text style={styles.headerText}>Find Mentor & Mentees</Text>
        </View>

        <TouchableOpacity
          onPress={() => Linking.openURL(githubFindMentor)}
          style={{marginVertical: 20}}>
          <Text style={styles.text1Style}> Feel free to contribute! </Text>
        </TouchableOpacity>
        <View style={{marginHorizontal: 19}}>
          <Text>
            Every night & every deploy, the spread sheet will be parsed by
            GitHub actions, then generate this beauty.
          </Text>
        </View>
        <View style={styles.discordView}>
          <WebView
            style={styles.webView}
            source={{
              uri: discorUrl,
            }}
          />
        </View>
        <View style={styles.discordTextView}>
          <Text>You can join this channel to communicate with each other.</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => Linking.openURL(joinNow)}
            style={styles.joinButton}>
            <Text style={styles.buttonText}>Join Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ActiveMentorships')}
            style={styles.activeMentorshipsButton}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.buttonText}>Active</Text>
            </View>
            <Text style={styles.buttonText}>Mentorships</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  text1View: {
    marginTop: 150,
  },
  text1Style: {
    fontSize: 25,
    color: '#007bff',
    fontWeight: 'bold',
  },
  iconView: {
    alignItems: 'center',
    marginVertical: 20,
  },
  iconStyle: {
    width: Dimensions.get('window').width / 9,
    height: Dimensions.get('window').height / 22,
  },
  headerText: {
    color: 'grey',
    fontSize: 17,
    fontWeight: '600',
  },
  discordView: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 2.4,
    alignContent: 'center',
    alignSelf: 'center',
    marginVertical: 30,
  },
  webView: {
    borderRadius: 10,
  },
  discordTextView: {
    marginHorizontal: 5,
    marginBottom: 25,
  },
  joinButton: {
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 11,
    borderWidth: 1,
    padding: 12,
    borderRadius: 50,
    backgroundColor: '#17aa92',
    borderColor: '#17aa92',
  },
  activeMentorshipsButton: {
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 2.5,
    height: Dimensions.get('window').height / 11,
    borderWidth: 1,
    padding: 12,
    borderRadius: 50,
    backgroundColor: '#17aa92',
    borderColor: '#17aa92',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});

export {WelcomePage};
