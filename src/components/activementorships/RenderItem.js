import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RenderItem = (props) => {
  return (
    <View>
      <Text>{props.data.project_adress}</Text>
      <Text>{props.data.slug}</Text>
      <Text>{props.data.mentor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export {RenderItem};
