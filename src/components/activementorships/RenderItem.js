import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import axios from 'axios';

const RenderItem = (props) => {
  
  const goToDetail = async () => {
    var mentorSlug = props.data.mentor.replace('https://findmentor.network/peer/', '');// get slug from mentor link
    let user={};
    let response = await axios.get('https://findmentor.network/persons.json');
    let filtered = response.data.filter((x) => x.mentor !== 'Mentee')
    
    filtered.forEach(m => { // get slug from persons.js
      if( m.slug === mentorSlug ){
        user = m;
        return;
      }
    });

    if(!(filtered.length === 1 && filtered[0] == ''))
      props.navigation.navigate('MMDetail', {
        name: user.name,
        interests: user.interests,
        goals: user.goals,
        avatar: user.avatar,
        mentor: user.mentor,
        slug: user.slug,
        twitter_handle: user.twitter_handle,
        github: user.github,
        linkedin: user.linkedin,
      })
  }
  return (
    <View style={styles.box}>
      <TouchableOpacity onPress={ goToDetail }>
      <Text style={styles.header}>{ props.data.slug }</Text>
      <Text>{ props.data.goal }</Text>
      </TouchableOpacity>
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
    elevation: 5
  },
  header:{
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});

export {RenderItem};
