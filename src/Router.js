import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  WelcomePage,
  Mentors,
  Mentees,
  HowItWorks,
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
  Mentors: <MentorIcon width={27} height={27} />,
  Mentees: <MenteeIcon width={27} height={27} />,
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
      <Tab.Screen name="Mentors" component={Mentors} />
      <Tab.Screen name="Mentees" component={Mentees} />
      <Tab.Screen name="HowItWorks" component={HowItWorks} />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="MMDetail" component={MentorMenteesDetail} />
        <Stack.Screen name="ActiveMentorships" component={ActiveMentorships} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
