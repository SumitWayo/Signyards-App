import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ProjectInfoHeader from '../components/ProjectInfoPageHeader';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../src/types/navigation';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/ProjectPage.styles';
import { Button } from '../components/Button';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoginPage'>;

const ProjectPage = () => {
  const navigation = useNavigation<NavigationProp>();
  const [projectName, setProjectName] = useState('');
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const chooseImage = () => {
    Alert.alert(
      'Upload Photo',
      'Choose an option',
      [
        { text: 'Camera', onPress: openCamera },
        { text: 'Gallery', onPress: openGallery },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  const openCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        saveToPhotos: true,
      },
      response => {
        if (response.assets && response.assets.length > 0) {
          setPhotoUri(response.assets[0].uri || null);
        }
      }
    );
  };

  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      response => {
        if (response.assets && response.assets.length > 0) {
          setPhotoUri(response.assets[0].uri || null);
        }
      }
    );
  };

  const addProject = () => {
    if (projectName.trim() === '') {
      Alert.alert('Validation Error', 'Please enter a project name');
      return;
    }

    // Just navigate without saving anything
    navigation.navigate('GroupPage' as keyof RootStackParamList);
    Alert.alert('Project Created', `Your project "${projectName}" has been created.`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ProjectInfoHeader title="Create Project" showSearch={false} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.photoSection}>
          <TouchableOpacity onPress={chooseImage} style={styles.photoRow}>
            <View style={styles.circle}>
              {photoUri ? (
                <Image source={{ uri: photoUri }} style={styles.cameraIcon} />
              ) : (
                <Image
                  source={require('../../assets/icons/camera.png')}
                  style={styles.cameraIcon}
                />
              )}
            </View>
            <Text style={styles.addPhotoText}>Add Photo</Text>
          </TouchableOpacity>

          <Text style={styles.heading}>Enter Project Name</Text>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="E.g. office expansion"
              placeholderTextColor="#888"
              value={projectName}
              onChangeText={setProjectName}
            />
          </View>
        </View>
      </ScrollView>

     
      <Button title="Create Project" onPress={addProject} />

    </SafeAreaView>
  );
};

export default ProjectPage;
