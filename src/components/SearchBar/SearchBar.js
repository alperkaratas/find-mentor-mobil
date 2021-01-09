import React from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.placeHolder}
        placeholderTextColor={props.placeHolderTextColor}
        onChangeText={props.onSearch}
        style={styles.textInput}
        value={props.value}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginHorizontal: 10,
    shadowColor: '#222323',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    width: Dimensions.get('window').width / 1.2,
  },
  textInput: {
    borderRadius: 5,
    height: 40,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
    paddingLeft: 30,
  },
});
export {SearchBar};
