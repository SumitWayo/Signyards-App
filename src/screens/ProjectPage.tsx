import React from 'react';
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
} from 'react-native';
import { Button } from '../components/Button';
import styles from './styles/ProjectPage.styles';
import ProjectInfoHeader from '../components/ProjectInfoPageHeader';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const ProjectPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <ProjectInfoHeader title="Create Project" showSearch={false} />
      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Photo Upload Section */}
        <View style={styles.photoSection}>
          <View style={styles.photoRow}>
            <View style={styles.circle}>
              <Image
                source={require('../../assets/icons/camera.png')}
                style={styles.cameraIcon}
              />
            </View>
            <Text style={styles.addPhotoText}>Add Photo</Text>
          </View>

          {/* Project Name Input */}
          <Text style={styles.heading}>Enter Project Name</Text>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="E.g. office expansion"
              placeholderTextColor="#888"
            />
          </View>
        </View>
      </ScrollView>

      <Button title="Create Project" />
    </SafeAreaView>
  );
};



export default ProjectPage;
