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
        p.contributions.length === 0 ? setIsContributer(false) : setContributions(p.contributions);
        setLoading(false)
      }
    });
  };

  axios.get(`https://publish.twitter.com/oembed?url=${person.twitter_handle}`)
    .then(resp => {
      setTwitterHtml(resp.data.html)
    }
    )

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
        <Text style={{ fontSize: 18, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 3 }}>
          {item.slug}
        </Text>
        <Text style={{ textAlign: 'justify' }}>
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
          fill={
            person.mentor === 'Mentor' || person.mentor === 'Both' ? '#17aa90' : '#2c7cfe'
          }
        />
      </TouchableOpacity>
      {loading ? (
        <View style={{marginVertical: 10}}>
          <ActivityIndicator size="large" color="#32475b"/>
        </View>
      ) : (
      <ScrollView style={{ flex: 1, backgroundColor: '#222323' }} ref={scrollRef} >
        <View style={{ alignItems: 'center' }}>
          <View style={styles.mmView}>
            {
              person.mentor === 'Both' ? (
                <Text
                  style={{ color: '#ffc400', fontWeight: 'bold', fontSize: 23 }}>
                  Mentor & Mentee
                </Text>
              ) : (
                <Text
                  style={{ color: '#ffc400', fontWeight: 'bold', fontSize: 23 }}>
                  Mentor & Mentee
                </Text>
              )
                ||
                person.mentor !== 'İkiside' ? (
                    person.mentor === 'Mentor' ? (
                      <Text
                        style={{ color: '#17aa90', fontWeight: 'bold', fontSize: 23 }}>
                        Mentor
                      </Text>
                    ) : (
                      <Text
                        style={{ color: '#ffc400', fontWeight: 'bold', fontSize: 23 }}>
                        Mentor & Mentee
                      </Text>
                    )

                      ||

                      person.mentor === 'Mentee' ? (
                          <Text
                            style={{ color: '#2f6998', fontWeight: 'bold', fontSize: 23 }}>
                            Mentee
                          </Text>
                        ) : (
                          <Text
                            style={{ color: '#ffc400', fontWeight: 'bold', fontSize: 23 }}>
                            Mentor & Mentee
                          </Text>
                        )
                  ) : (
                    <Text
                      style={{ color: '#ffc400', fontWeight: 'bold', fontSize: 23 }}>
                      Mentor & Mentee
                    </Text>
                  )
            }
          </View>
          <View
            style={
              person.mentor === 'Both' ? {
                marginVertical: 20,
                borderWidth: 2,
                borderRadius: 100,
                borderColor: '#ffc400'
              } : styles.avatarView

                ||

                person.mentor !== 'İkiside' ? (
                    person.mentor === 'Mentor' ? {
                      marginVertical: 20,
                      borderWidth: 2,
                      borderRadius: 100,
                      borderColor: '#17aa90'
                    } : styles.avatarView

                      ||

                      person.mentor === 'Mentee' ? {
                          marginVertical: 20,
                          borderWidth: 2,
                          borderRadius: 100,
                          borderColor: '#2f6998'
                        } : styles.avatarView

                  ) : styles.avatarView
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
            <Text style={styles.nameText}>{person.name}</Text>
            <Divider
              style={{ backgroundColor: 'white', height: 1, marginVertical: 5 }}
            />
          </View>
          <View style={person.isHireable === true ? [styles.hireMe, { backgroundColor: person.mentor === 'Mentee' ? '#2f6998' : (person.mentor === 'Both' || person.mentor === 'İkiside' ? '#ffc400' : '#17aa90') }] : { display: 'none' }}>
            <Text style={styles.hireMeText}>
              Hire Me
              </Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 15,
            }}
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
          {person.mentor === 'Mentor' || person.mentor === 'Both' ? (
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
                  fill={'#222323'}
                />
                <Text
                  style={{ fontSize: 17, fontWeight: '600', color: '#222323' }}>
                  Ask for a mentorship project
                </Text>
              </View>
            </TouchableOpacity>
          ) : null}
          <ScrollView style={styles.infoView}>
            <View style={styles.interestView}>
              <Text
                style={{ color: '#22262a', fontSize: 20, fontWeight: 'bold' }}>
                Interests:{' '}
              </Text>
              <Text style={{ color: '#23272b' }}>{person.interests}</Text>
            </View>
            <View style={styles.goalsView}>
              <Text
                style={{ color: '#22262a', fontSize: 20, fontWeight: 'bold' }}>
                Goals:{' '}
              </Text>
              <Text style={{ color: '#23272b' }}>{person.goals}</Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={styles.oneIconView}
                onPress={() => Linking.openURL(person.twitter_handle)}>
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
              <View style={{ marginRight: 10 }}>
                <Github width={35} height={35} />
              </View>
              <Text
                style={{ fontSize: 25, fontWeight: 'bold', color: '#22262a' }}>
                GitHub
              </Text>
            </View>
            <Divider
              style={{ backgroundColor: '#d6d6d6', height: 1, marginVertical: 8 }}
            />
          </ScrollView>
          <ScrollView style={person.mentor == 'Mentee' ? { display: 'none' } : styles.activeMshipsView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{ fontSize: 25, fontWeight: 'bold', color: '#22262a' }}>
                Active Mentorships
              </Text>
            </View>
            <Divider
              style={{ backgroundColor: '#d6d6d6', height: 1, marginVertical: 8 }}
            />
          </ScrollView>
          <View style={isContributer ? styles.contView : { display: 'none' }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{ fontSize: 25, fontWeight: 'bold', color: '#22262a' }}>
                Contributed
              </Text>
            </View>
            <Divider
              style={{ backgroundColor: '#d6d6d6', height: 1, marginVertical: 8 }}
            />
            <View>
              <Contributions />
            </View>
          </View>
          <ScrollView style={person.twitter_handle !== "" ? styles.tweetsView : { display: 'none' }}>
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
          <View style={styles.qrCodeView}>
            <QRCode size={210} value={qrValue} />
          </View>
        </View>
      </ScrollView>)}
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
    display: 'flex',
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 15,
    marginHorizontal: 3,
    width: Dimensions.get('window').width / 1.1,
    backgroundColor: 'white',
    margin: 20,
  },
  tweetsView: {
    borderRadius: 5,
    borderWidth: 0.5,
    marginHorizontal: 3,
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 1.45,
    backgroundColor: 'white',
    margin: 20
  },
  interestView: { marginVertical: 7 },
  goalsView: { marginVertical: 7, marginBottom: 13 },
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
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 2.5,
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
