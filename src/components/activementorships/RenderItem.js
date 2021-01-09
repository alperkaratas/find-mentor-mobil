import React from 'react';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const RenderItem = (props) => {

  return (
    <View style={styles.box}>
      <Text style={styles.header}>{props.data.slug}</Text>
      <Text>{props.data.goal}</Text>
      <View style={{ marginTop: 15, flexDirection: 'row' }}>
        <Text>➡️ Visit</Text>
        <TouchableOpacity onPress={() => {
          props.navigation.navigate('MMDetail', {
            slug: props.data.mentor.replace('https://findmentor.network/peer/', '')
          })
        }}>
          <Text style={{ color: '#047bfe', fontSize: 15 }}> Mentor Profile</Text>
        </TouchableOpacity>
        <Text> and </Text>
        <TouchableOpacity onPress={() => {
          Linking.openURL(props.data.project_adress)
        }}>
          <Text style={{ color: '#047bfe', fontSize: 15 }}>Project repo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
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
    elevation: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export { RenderItem };
