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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
