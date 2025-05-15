import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TextInput,
  Platform,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { Button } from '../components/Button';
import styles from './styles/ProjectPage.styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../src/types/navigation';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoginPage'>;
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const SubProjectPage = () => {
  const navigation = useNavigation<NavigationProp>();
  const [subProjectName, setSubProjectName] = useState('');

  const addProject = () => {
    if (subProjectName.trim() === '') {
      Alert.alert('Validation Error', 'Please enter a project name');
      return;
    }

    // Navigate to HomePage if input is valid
    navigation.navigate('GroupPage' as keyof RootStackParamList);
    Alert.alert('Project Created', `Your project "${subProjectName}" has been created.`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.arrowContainer}>
          <Image
            source={require('../../assets/Images/back.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Create Sub-Project</Text>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Photo Upload Section */}
        <View style={styles.photoSection}>
          
          {/* Project Name Input */}
          <Text style={styles.heading}>Enter Sub-Project Name</Text>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="E.g. Electrical Work, Site Team"
              placeholderTextColor="#888"
              value={subProjectName}
              onChangeText={setSubProjectName}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
              <View style={styles.bottomBorder} />
              <TouchableOpacity style={styles.fullButton} onPress={addProject}>
                <Text style={styles.buttonText}>Create Sub Project</Text>
              </TouchableOpacity>
            </View>
    </SafeAreaView>
  );
};



export default SubProjectPage;
