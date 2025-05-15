import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllScreensPage from './src/screens/AllScreensPage';
import LoginPage from './src/screens/LoginPage';
import LandingPage from './src/screens/LandingPage';
import HomePage from './src/screens/HomePage';
import ProjectPage from './src/screens/ProjectPage';
import GroupPage from './src/screens/GroupPage';
import SubProjectPage from './src/screens/SubProjectPage';
import TeamMemberPage from './src/screens/TeamMemberPage';
import MemberPage from './src/screens/MemberPage';
import ProjectInfoPage from './src/screens/ProjectInfoPage';
import MediaPage from './src/screens/MediaPage';
import ListPage from './src/screens/ListPage';
import MentionPage from './src/screens/MentionPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AllScreens"
        screenOptions={{ headerShown: false }} // Hides header for all screens
      >
        <Stack.Screen name="AllScreens" component={AllScreensPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ProjectPage" component={ProjectPage} />
        <Stack.Screen name="GroupPage" component={GroupPage} />
        <Stack.Screen name="SubProjectPage" component={SubProjectPage} />
        <Stack.Screen name="TeamMemberPage" component={TeamMemberPage} />
        <Stack.Screen name="MemberPage" component={MemberPage} />
        <Stack.Screen name="ProjectInfoPage" component={ProjectInfoPage} />
        <Stack.Screen name="MediaPage" component={MediaPage} />
        <Stack.Screen name="ListPage" component={ListPage} />
        <Stack.Screen name="MentionPage" component={MentionPage} />






      </Stack.Navigator>
    </NavigationContainer>
  );
}
