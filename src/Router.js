import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import { Provider as PaperProvider } from "react-native-paper";
import {
  WelcomePage,
  Mentors,
  Mentees,
  HowItWorks,
  ActiveMentorships,
  MentorMenteesDetail,
  Events
} from './pages';
import {
  HomeIcon,
  MentorIcon,
  MenteeIcon,
  HIWorksIcon,
  EventIcon
} from './components/SVGR-Components';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const icons = {
  Home: <HomeIcon width={27} height={27} />,
  Mentors: <MentorIcon width={27} height={27} />,
  Mentees: <MenteeIcon width={27} height={27} />,
  HowItWorks: <HIWorksIcon width={27} height={27} />,
  Events: <EventIcon width={27} height={27} />
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
      <Tab.Screen name="Mentors" component={Mentors} options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      <Tab.Screen name="Mentees" component={Mentees} />
      <Tab.Screen name="HowItWorks" component={HowItWorks} />
      <Tab.Screen name="Events" component={Events} />
    </Tab.Navigator>
  );
}

const Router = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="MMDetail" component={MentorMenteesDetail} />
        <Stack.Screen name="ActiveMentorships" component={ActiveMentorships} />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
};

export default Router;
