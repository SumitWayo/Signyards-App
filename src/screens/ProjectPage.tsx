import React, { useState, useEffect } from 'react';
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
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../src/types/navigation';
import styles from './styles/ProjectPage.styles';
import { Button } from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useProjectContext } from '../context/ProjectContext';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProjectPage'>;
type RouteProps = RouteProp<RootStackParamList, 'ProjectPage'>;

const ProjectPage = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const { projectId } = route.params || {};
  const edit = !!projectId;

  const { projects, refreshProjects } = useProjectContext();

  const [projectName, setProjectName] = useState('');
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  // Pre-fill data if editing
  useEffect(() => {
    if (edit) {
      const existingProject = projects.find(p => p.id === projectId);
      if (existingProject) {
        setProjectName(existingProject.name);
        setPhotoUri(existingProject.image);
      }
    }
  }, [edit, projectId, projects]);

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

  const addOrUpdateProject = async () => {
  if (projectName.trim() === '') {
    Alert.alert('Validation Error', 'Please enter a project name');
    return;
  }

  try {
    const phone = await AsyncStorage.getItem('userPhone');
    if (!phone) {
      Alert.alert('Error', 'Phone number not found. Please login again.');
      return;
    }

    let payload;
    if (edit && projectId) {
      payload = {
        type: 'updateProject',
        project_id: projectId.toString(),
        project_name: projectName,
        image_url: photoUri || '',
      };
    } else {
      payload = {
        type: 'addProject',
        phone: phone,
        project_name: projectName,
        image_url: photoUri || '',
      };
    }

    const response = await fetch('https://signyards.com/admin/appProject.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok) {
      Alert.alert(
        edit ? 'Project Updated' : 'Project Created',
        edit
          ? `Your project "${projectName}" has been updated.`
          : `Your project "${projectName}" has been created.`
      );

      await refreshProjects();

      // Navigate conditionally
      if (edit) {
        navigation.navigate('GroupPage', { projectId });
      } else {
        navigation.navigate('HomePage');
      }
    } else {
      Alert.alert('Error', data.message || 'Failed to save project');
    }
  } catch (error) {
    Alert.alert('Error', 'Network error occurred, please try again later.');
    console.error(error);
  }
};

  return (
    <SafeAreaView style={styles.safeArea}>
      <ProjectInfoHeader title={edit ? 'Edit Project' : 'Create Project'} showSearch={false} />
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

      <Button title={edit ? 'Save' : 'Create Project'} onPress={addOrUpdateProject} />
    </SafeAreaView>
  );
};

export default ProjectPage;
