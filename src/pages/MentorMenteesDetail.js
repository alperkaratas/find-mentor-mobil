import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Linking,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Avatar } from 'react-native-elements';
import { BackButton } from '../components/SVGR-Components';
import { Divider } from 'react-native-elements';
import WebView from 'react-native-webview'

import {
  Github,
  Linkedin,
  Twitter,
  ShareTwitter,
  Question,
} from '../components/SVGR-Components';
import axios from 'axios';

const MentorMenteesDetail = ({ route, navigation, props }) => {

  const [person, setPerson] = useState({});
  const [contributions, setContributions] = useState([{}]);
  const [isContributer, setIsContributer] = useState(true);
  const [twitterHtml, setTwitterHtml] = useState(''); // twitter timeline html
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPersonInfo(route.params.slug);
  }, []);

  const linkedinUrl = person.linkedin;
  const qrValue = `https://findmentor.network/peer/${person.slug}`;
  const githubUrl = person.github;
  const scrollRef = useRef();

  const getPersonInfo = async (slug) => {
    const response = await axios.get('https://findmentor.network/persons.json');
    response.data.forEach(p => {
      if (p.slug === slug) {
        setPerson(p);
        setLoading(false)
        p.contributions.length === 0 ? setIsContributer(false) : setContributions(p.contributions);
      }
    });
  };

  axios.get(`https://publish.twitter.com/oembed?url=${person.twitter_handle}`)
    .then(resp => {
      setTwitterHtml(resp.data.html)
    }
    )

  const getColor = () => {
    const mentorColor = '#17aa90';
    const menteeColor = '#2f6998';
    const bothColor = '#ffc400';

    return person.mentor === 'Mentee' ? menteeColor : (person.mentor === 'Both' || person.mentor === 'İkiside' ? bothColor : mentorColor)
  }

  const Contributions = () => {

    const ContributerImages = (props) => {

      const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() =>
          item.fmn_url == "" ? Linking.openURL(item.github_address)
            : (getPersonInfo(item.fmn_url.replace('/peer/', '')) && scrollRef.current?.scrollTo({
              y: 0,
              animated: true,
            }))
        }>
          <Image
            style={{
              height: 30,
              width: 30,
              borderRadius: 30,
              opacity: 0.8,
              margin: 4,
            }}
            source={{
              uri: item.avatar,
            }}
          />
        </TouchableOpacity>
      );

      return (
        <View style={{ alignItems: 'center' }}>
          <FlatList
            data={props.data}
            renderItem={renderItem}
            keyExtractor={(item) => item.username}
            numColumns={7}
            style={{ alignItems: 'center' }}
          />
        </View>
      );
    };

    const renderItem = ({ item }) => (
      <View style={{ marginBottom: 10 }}>
        <Text style={[{ fontSize: 18, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 3 }, styles.TextColor]}>
          {item.slug}
        </Text>
        <Text style={[{ textAlign: 'justify' }, styles.TextColor]}>
          {item.goal}
        </Text>
        <ContributerImages data={item.contributors} />
      </View>
    );

    return (
      <View>
        <FlatList
          data={contributions}
          renderItem={renderItem}
          keyExtractor={(item) => item.slug}
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.mainView}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.buttonView}>
        <BackButton
          width={25}
          height={25}
          fill={getColor()}
        />
      </TouchableOpacity>
      {loading ? (
        <View style={{ marginVertical: 10 }}>
          <ActivityIndicator size="large" color="#32475b" />
        </View>
      ) : (
          <ScrollView style={{ flex: 1 }} ref={scrollRef} >
            <View style={{ alignItems: 'center' }}>
              <View style={[styles.box, styles.infoView, { borderTopColor: getColor() }]}>
                <View style={[styles.mmView, { borderColor: getColor() }]}>
                  <Text
                    style={{ color: getColor(), fontWeight: 'bold', fontSize: 23 }}>
                    {person.mentor === 'Both' || person.mentor === 'İkiside' ? 'Mentor & Mentee' : (person.mentor === 'Mentor' ? 'Mentor' : 'Mentee')}
                  </Text>
                </View>
                <View
                  style={[styles.avatarView, { borderColor: getColor() }]
                  }
                >
                  <Avatar
                    rounded
                    source={{
                      uri: person.avatar,
                    }}
                    size="xlarge"
                  />
                </View>
                <View style={styles.nameView}>
                  <Text style={[styles.nameText, styles.TextColor]}>
                    {person.name}
                  </Text>
                  <Divider
                    style={{ backgroundColor: styles.TextColor.color, height: 1, marginVertical: 5 }}
                  />
                </View>
                <View style={person.isHireable === true ? [styles.hireMe, { backgroundColor: getColor() }] : { display: 'none' }}>
                  <Text style={styles.hireMeText}>
                    Hire Me
                  </Text>
                </View>
                <TouchableOpacity
                  style={person.twitter_handle !== '' ? {
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 15,
                  }: {display: 'none'}}
                  onPress={() =>
                    Linking.openURL(
                      `https://twitter.com/intent/tweet?text=Hey!%20Here%20my%20find-mentor%20profile&url=https://findmentor.network/peer/${person.slug}`,
                    )
                  }>
                  <View style={{ marginRight: 10 }}>
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
                {person.mentor !== 'Mentee' ? (
                  <TouchableOpacity
                    onPress={() => Linking.openURL(person.twitter_handle)}
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
                        style={{ marginRight: 10 }}
                        width={25}
                        height={25}
                        fill={styles.box.backgroundColor}
                      />
                      <Text
                        style={{ fontSize: 17, fontWeight: '600', color: styles.box.backgroundColor }}>
                        Ask for a mentorship project
                </Text>
                    </View>
                  </TouchableOpacity>
                ) : null}
                <View style={styles.interestView}>
                  <Text
                    style={[styles.viewHeader, styles.TextColor]}>
                    Interests:{' '}
                  </Text>
                  <Text style={styles.TextColor}>
                    {person.interests}
                  </Text>
                </View>
                <View style={styles.goalsView}>
                  <Text
                    style={[styles.viewHeader, styles.TextColor]}>
                    Goals:{' '}
                  </Text>
                  <Text style={styles.TextColor}>
                    {person.goals}
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: 'center',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    style={person.twitter_handle !== '' ? styles.oneIconView : {display: 'none'}}
                    onPress={() => Linking.openURL(person.twitter_handle)}>
                    <Twitter width={40} height={40} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={person.github !== '' ? styles.oneIconView : {display: 'none'}}
                    onPress={() => Linking.openURL(githubUrl)}>
                    <Github width={40} height={40} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={person.linkedin !== '' ? styles.oneIconView : {display: 'none'}}
                    onPress={() => Linking.openURL(linkedinUrl)}>
                    <Linkedin width={40} height={40} />
                  </TouchableOpacity>
                </View>
              </View>
              <ScrollView style={person.github !== '' ? [styles.box, styles.githubView] : {display: 'none'} }>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{ marginRight: 10 }}>
                    <Github width={35} height={35} />
                  </View>
                  <Text
                    style={[styles.viewHeader, styles.TextColor]}>
                    GitHub
                  </Text>
                </View>
                <Divider
                  style={{ backgroundColor: styles.TextColor.color, height: 1, marginVertical: 8 }}
                />
              </ScrollView>
              <ScrollView style={person.mentorships.length === 0 ? { display: 'none' } : [styles.box, styles.activeMshipsView]}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={[styles.viewHeader, styles.TextColor]}>
                    Active Mentorships
                  </Text>
                </View>
                <Divider
                  style={{ backgroundColor: styles.TextColor.color, height: 1, marginVertical: 8 }}
                />
              </ScrollView>
              <View style={isContributer ? [styles.box, styles.contView] : { display: 'none' }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={[styles.viewHeader, styles.TextColor]}>
                    Contributed
              </Text>
                </View>
                <Divider
                  style={{ backgroundColor: styles.TextColor.color, height: 1, marginVertical: 8 }}
                />
                <View>
                  <Contributions />
                </View>
              </View>
              <ScrollView style={person.twitter_handle !== "" ? [styles.box, styles.tweetsView] : { display: 'none' }}>
                <WebView source={{
                  html:
                    `<!DOCTYPE html>\
                <html>\
                  <head>\
                    <meta charset="utf-8">\
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">\
                    </head>\
                    <body>\
                      <div style="border-radius: $border-radius: 5px;">
                      ${twitterHtml}\
                    </body>\
                </html>`
                }} style={{
                  flex: 1,
                  width: styles.tweetsView.width,
                  height: styles.tweetsView.height,
                  border: styles.tweetsView.borderRadius
                }} />
              </ScrollView>
              <View style={[styles.qrCodeView, styles.box]}>
                <QRCode size={210} value={qrValue} />
              </View>
            </View>
          </ScrollView>)}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#f1f1f1',
    flex: 1,
    alignItems: 'center'
  },
  box: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 20,
    marginHorizontal: 3,
    borderRadius: 5,
    shadowColor: '#dcdcdc',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5
  },
  infoView: {
    borderTopWidth: 5,
    width: Dimensions.get('window').width / 1.1,
    alignSelf: 'center',
    alignItems: 'center'
  },
  githubView: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 2.5,
  },
  activeMshipsView: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 2.2
  },
  contView: {
    display: 'flex',
    width: Dimensions.get('window').width / 1.1
  },
  tweetsView: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 1.45,
    padding: 0
  },
  qrCodeView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 2.5,
  },
  viewHeader: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  TextColor: {
    color: '#212529'
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
  },
  nameView: {
    marginBottom: 15,
  },
  nameText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 23,
  },
  mmView: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
  },
  mmText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 23,
  },
  interestView: {
    marginVertical: 7,
    alignSelf: 'flex-start'
  },
  goalsView: {
    marginVertical: 7,
    marginBottom: 13
  },
  oneIconView: {
    marginHorizontal: 20,
  },
  hireMe: {
    width: 110,
    borderRadius: 5,
    padding: 5,
    marginBottom: 15
  },
  hireMeText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 23
  }
});

export { MentorMenteesDetail };