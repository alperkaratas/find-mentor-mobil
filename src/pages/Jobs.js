import React from 'react';
import { 
  SafeAreaView,
   View, 
   Text,
   TouchableOpacity,
   StyleSheet
} from 'react-native';
import {BackButton} from '../components/SVGR-Components';

const Jobs = (props) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButtonView}>
        <BackButton width={25} height={25} fill={'#17aa90'} />
      </TouchableOpacity>
      <Text>Jobs</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backButtonView: {
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 15,
  },
});

export { Jobs };
