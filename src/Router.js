import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {Provider as PaperProvider} from 'react-native-paper';
import {
  WelcomePage,
  Mentors,
  Mentees,
  HowItWorks,
  ActiveMentorships,
  MentorMenteesDetail,
  Events,
  Jobs,
  JobSeekers,
  JobDetail
} from './pages';
import {
  HomeIcon,
  MentorIcon,
  MenteeIcon,
  HIWorksIcon,
  EventIcon,
  Job,
  JobSeeker,
} from './components/SVGR-Components';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const icons = {
  Home: <HomeIcon width={27} height={27} />,
  Mentors: <MentorIcon width={27} height={27} />,
  Mentees: <MenteeIcon width={27} height={27} />,
  HowItWorks: <HIWorksIcon width={27} height={27} />,
  Events: <EventIcon width={27} height={27} />,
  Jobs: <Job width={27} height={27} />,
  JobSeekers: <JobSeeker width={27} height={27} />,
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
      <Tab.Screen
        name="Mentors"
        component={Mentors}
        options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen name="Mentees" component={Mentees} />
      <Tab.Screen name="HowItWorks" component={HowItWorks} />
      <Tab.Screen name="Events" component={Events} />
    </Tab.Navigator>
  );
}

function JobsTab() {
  return (
    <Tab.Navigator
      initialRouteName="Jobs"
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
      <Tab.Screen name="Jobs" component={Jobs} />
      <Tab.Screen name="JobSeekers" component={JobSeekers} />
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
          <Stack.Screen
            name="ActiveMentorships"
            component={ActiveMentorships}
          />
          <Stack.Screen name="JobTabs" component={JobsTab} />
          <Stack.Screen name="JobDetail" component={JobDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Router;
