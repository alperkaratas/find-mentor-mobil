import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Linking,
  ScrollView,
  Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';

const Link = (props) => {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(props.url)}
    >
      <Text style={styles.link}> {props.text}</Text>
    </TouchableOpacity>
  )
}

const GoTo = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate(`${props.page}`)}
    >
      <Text style={styles.link}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const HowItWorks = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.box}>
          <View>
            <Text style={styles.boxHeader}>
              How To Be A 🌟GREAT🌟 Mentee?
            </Text>
            <Text>
              There is ONE type of mentee that exists. Active one. At least we experienced it in that way. Let me know if there exists another approach.
            </Text>
            <Text style={styles.listHeader}>
              Be sure about:
            </Text>
            <View style={styles.listContent}>
              <Text>1. Have a descriptive
              <Link text='GitHub profile readme' url='https://github.com/abhisheknaiidu/awesome-github-profile-readme' />
              </Text>
              <Text>2. Have a descriptive LinkedIn <Link text='2' /> profile.</Text>
              <Text>3. Join the <Link text='Discord Server' url='https://discord.com/invite/nkbmBSW8CM' />.</Text>
            </View>

            <Text style={styles.listHeader}>
              Then:
            </Text>
            <View style={styles.listContent}>
              <Text>1. First, what you want to learn, decide.</Text>
              <Text>2. You should visit active <GoTo page='ActiveMentorships' text='mentorships page' />. You don't want to miss a mentorships campaign round.</Text>
              <Text>3. You should visit <GoTo text='mentors page' page='Mentors' />. There are tons of GREAT mentors in there.</Text>
              <Text>4. If the mentor does not have a mentorship campaign, ask politely over Twitter or LinkedIn.</Text>
              <Text>5. If you want to work 1-1 with the mentor, ask the mentor to add their contact & schedule info like a superpeer account on GitHub profile readme.
              (This approach is not best way to be a great mentee. Just know it, that is an option.)
                </Text>
            </View>
            <Text style={{ marginTop: 10 }}>If you're looking for someone on Twitter or LinkedIn to be a mentor for you. Ask them for joining us!</Text>
          </View>

          <View>
            <Text style={styles.subjectHeader}>Next steps:</Text>
            <Text style={styles.listHeader}>
              You find the:
            </Text>

            <View style={styles.listContent}>
              <Text>· project for contribution (Active / Passive approach)</Text>
              <Text>· mentor for getting feedback (Passive / Passive approach)</Text>
            </View>

            <Text style={styles.listHeader}>
              You meet with:
            </Text>
            <View style={styles.listContent}>
              <Text>· like minded people</Text>
              <Text>· great mentors</Text>
              <Text>· great friends to work with at discord channel</Text>
            </View>

            <Text style={styles.listHeader}>
              You will get eventually:
            </Text>
            <View style={styles.listContent}>
              <Text>· a great job</Text>
              <Text>· great mentors</Text>
              <Text>· great mentorships for long term (lifelong/which I get)</Text>
            </View>
            <Text style={{ marginTop: 10 }}>Just tweet about these!</Text>
          </View>
          <View>
            <Text style={styles.subjectHeader}>Join Us</Text>
            <Link 
              text='Click here'
              url='https://www.gstatic.com/_/freebird/_/js/k=freebird.v.tr.A5kaNJA4Mos.O/d=1/ct=zgms/rs=AMjVe6h07Ua8Cfd6bjX4g7b5HPXnuG018w/m=viewer_base'
            />
          </View>
        </View>
        <View style={styles.box}>
          <Text>asdas</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  box: {
    margin: 10,
    backgroundColor: '#e9ecef',
    padding: 5,
    borderWidth: 3,
    borderColor: '#dcdcdc',
    borderRadius: 5
  },
  boxHeader: {
    marginBottom: 5,
    fontSize: 22,
    color: '#212529',
    fontWeight: 'bold',
  },
  subjectHeader:{
    marginBottom: 5,
    marginTop: 5,
    fontSize: 20,
    color: '#212529',
    fontWeight: 'bold',
  },
  link: {
    color: '#007bff'
  },
  listHeader: {
    margin: 5,
    fontStyle: 'italic'
  },
  listContent: {
    marginLeft: 10
  }
});

export { HowItWorks };
