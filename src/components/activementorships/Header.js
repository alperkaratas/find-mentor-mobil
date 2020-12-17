import React from 'react';
import {SafeAreView, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <SafeAreView>
      <Text style={styles.headerTextStyle}>Active Mentorships</Text>
    </SafeAreView>
  );
};

const styles = StyleSheet.create({
  headerTextStyle: {
    color: '#007bff',
  },
});

export {Header};
