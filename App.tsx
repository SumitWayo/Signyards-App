import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

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
import UpdatePage from './src/screens/UpdatePage';
import UserProfilePage from './src/screens/UserProfilePage';
import { FooterProvider } from './src/context/FooterContext';
import Project from './src/components/Project';
import Dms from './src/components/Dms';
import { ProjectProvider } from './src/context/ProjectContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const phone = await AsyncStorage.getItem('userPhone');
        if (phone) {
          setInitialRoute('HomePage');
        } else {
          setInitialRoute('LandingPage');
        }
      } catch (error) {
        console.error('Error reading userPhone from AsyncStorage', error);
        setInitialRoute('LandingPage'); // fallback
      }
    };

    checkLoginStatus();
  }, []);

  if (!initialRoute) {
    // Optional: Return a splash screen or loading indicator
    return null;
  }

  return (
    <FooterProvider>
    <ProjectProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
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
          <Stack.Screen name="UpdatePage" component={UpdatePage} />
          <Stack.Screen name="UserProfilePage" component={UserProfilePage} />
          <Stack.Screen name="Project" component={Project} />
          <Stack.Screen name="Dms" component={Dms} />
        </Stack.Navigator>
      </NavigationContainer>
      </ProjectProvider>
    </FooterProvider>
  );
}
