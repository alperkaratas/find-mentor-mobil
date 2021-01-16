import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Linking,
  ScrollView,
  FlatList
} from 'react-native';

const Link = (props) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(props.url)}>
      <Text style={props.style || styles.link}> {props.text} </Text>
    </TouchableOpacity>
  );
};

const EventInfo = (props) => {
  return (
    <View style={styles.eventBox}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
        <View style={{ width: Dimensions.get('window').width / 1.28 }}>
          <View>
            <Link text={props.data.event_name} url={props.data.link} style={{ fontSize: 18, color: '#212529', fontWeight: 'bold', textAlign: 'justify', marginBottom: 5 }} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {
              props.data.speakers.length < 2 ?
                <Link text={props.data.speakers[0].name} url={props.data.speakers[0].twitter} style={{ color: '#8a8a8a', fontWeight: 'bold' }} />
                :
                <View style={{ flexDirection: 'row' }}>
                  <Link text={props.data.speakers[0].name} url={props.data.speakers[0].twitter} style={{ color: '#8a8a8a', fontWeight: 'bold' }} />
                  <Text style={{ color: '#a6a6a6'}}>,{' '}</Text>
                  <Link text={props.data.speakers[1].name} url={props.data.speakers[1].twitter} style={{ color: '#8a8a8a', fontWeight: 'bold' }} />
                </View>
            }
            <Text style={{ color: '#48909F' }}>{props.data.date}</Text>
          </View>
        </View>
        <View>
          <Link text={'>'} url={props.data.link} style={{ fontSize: 34, fontWeight: 'bold', color: '#6e6e6e', opacity: 0.4, top: 10, left: 10 }} />
        </View>
      </View>
    </View>
  );
}

const Events = (props) => {

  var data = [
    {
      event_name: 'Q/A About Technical Interviews with Orhan ÖZALP',
      speakers: [
        {
          name: 'Çağatay Çalı',
          twitter: 'https://twitter.com/cagataycali',
        },
        {
          name: 'Orhan ÖZALP',
          twitter: 'https://twitter.com/ocozalp',
        },
      ],
      link: 'https://www.youtube.com/watch?v=5ntPmkZXxb8&t=2s',
      date: '2020/12/24',
      status: 'done',
    },
    {
      event_name: 'What is the findmentor? How was start?',
      speakers: [
        {
          name: 'Çağatay Çalı',
          twitter: 'https://twitter.com/cagataycali',
        },
      ],
      link: 'https://www.youtube.com/watch?v=IhNCyOx-2Yc&t=1s',
      date: '2020/12/20',
      status: 'done',
    }
  ]

  return (
    <ScrollView style={{ flex: 1 }}>
      <SafeAreaView style={styles.main}>
        <View style={styles.box}>
          <Text style={styles.boxHeader}>
            Events Page
            </Text>
          <Text>
            You can find all the events organized by <Link text={'findmentor.network'} url={'https://findmentor.network/'} />
          </Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.event_name}
          renderItem={({ item }) => <EventInfo data={item} />}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1
  },
  box: {
    margin: 10,
    backgroundColor: '#e9ecef',
    padding: 10,
    paddingTop: 5,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    shadowColor: '#dcdcdc',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5
  },
  boxHeader: {
    marginBottom: 5,
    fontSize: 22,
    color: '#212529',
    fontWeight: 'bold'
  },
  link: {
    color: '#007bff',
    position: 'relative',
    top: 4,
    fontWeight: 'bold'
  },
  eventBox: {
    width: Dimensions.get('window').width / 1.05,
    margin: 10,
    backgroundColor: '#F7F6F8',
    padding: 10,
    paddingTop: 5,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    shadowColor: '#dcdcdc',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5
  }
});

export { Events };
