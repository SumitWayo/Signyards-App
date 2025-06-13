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
import { addOrUpdateProject } from '../api/projectApi';
import {
  createProjectTable,
  logAllProjects,
  insertProject,
  updateProject as updateLocalProject,
} from '../db/projectService'; // Adjust path as needed

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
useEffect(() => {
  const setup = async () => {
    await createProjectTable();
    await logAllProjects()
  };
  setup();
}, []);

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

const handleAddOrUpdateProject = async () => {
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

    // 1. Send API request
    await addOrUpdateProject({
      edit,
      projectId,
      projectName,
      photoUri,
      phone,
    });

    // 2. Save to local SQLite DB
    const userId = parseInt(phone); // assuming userPhone is numeric
    const localProject = {
      id: edit ? projectId : Date.now(), // use timestamp as temporary ID if new
      project_name: projectName,
      image_url: photoUri || '',
      user_id: userId,
    };

    if (edit) {
      await updateLocalProject(localProject);
    } else {
      await insertProject(localProject);
    }

    // 3. UI feedback and navigation
    Alert.alert(
      edit ? 'Project Updated' : 'Project Created',
      edit
        ? `Your project "${projectName}" has been updated.`
        : `Your project "${projectName}" has been created.`
    );

    await refreshProjects();

    if (edit) {
      navigation.navigate('GroupPage', { projectId });
    } else {
      navigation.navigate('HomePage');
    }
  } catch (error: any) {
    Alert.alert('Error', error.message || 'Network error occurred, please try again later.');
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

<Button title={edit ? 'Save' : 'Create Project'} onPress={handleAddOrUpdateProject} />
    </SafeAreaView>
  );
};

export default ProjectPage;
