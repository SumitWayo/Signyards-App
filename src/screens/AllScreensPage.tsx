import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../src/types/navigation';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AllScreens'>;

const screens = [
  { name: 'Login Page', route: 'LoginPage' },
  { name: 'Landing Page', route: 'LandingPage' },
  { name: 'Home Page', route: 'HomePage' },
  { name: 'Project Page', route: 'ProjectPage' },
  { name: 'Group Page', route: 'GroupPage' },
  { name: 'SubProject Page', route: 'SubProjectPage' },
];

const AllScreensPage: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {screens.map((screen) => (
        <TouchableOpacity
          key={screen.route}
          style={styles.block}
          onPress={() => navigation.navigate(screen.route as keyof RootStackParamList)}
        >
          <Text style={styles.text}>{screen.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default AllScreensPage;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  block: {
    width: '90%',
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#ddd',
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
