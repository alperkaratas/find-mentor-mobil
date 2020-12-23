import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import {
  WelcomePage,
  Mentors,
  Mentees,
  MentorMentee,
  HowItWorks,
  Us,
  ActiveMentorships,
  MentorMenteesDetail,
} from './pages';
import {
  HomeIcon,
  MentorIcon,
  MenteeIcon,
  HIWorksIcon,
} from './components/SVGR-Components';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const icons = {
  Home: <HomeIcon width={27} height={27} />,
  Us: <MentorIcon width={27} height={27} />,
  Mentorships: <MenteeIcon width={27} height={27} />,
  HowItWorks: <HIWorksIcon width={27} height={27} />,
};

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: () => icons[route.name],
      })}
      tabBarOptions={{
        activeTintColor: '#18a990',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
        },
      }}>
      <Tab.Screen name="Home" component={WelcomePage} />
      <Tab.Screen name="Us" component={Us}/>
      <Tab.Screen name="Mentorships" component={ActiveMentorships} />
      <Tab.Screen name="HowItWorks" component={HowItWorks} />
    </Tab.Navigator>
  );
}

const Router = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="MMDetail" component={MentorMenteesDetail} />
        <Stack.Screen name="Mentors" component={Mentors} />
        <Stack.Screen name="Mentees" component={Mentees} />
        <Stack.Screen name="MentorMentee" component={MentorMentee} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
