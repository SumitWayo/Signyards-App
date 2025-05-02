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

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const ProjectPage = () => {
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
        <Text style={styles.title}>Create Project</Text>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Photo Upload Section */}
        <View style={styles.photoSection}>
          <View style={styles.photoRow}>
            <View style={styles.circle}>
              <Image
                source={require('../../assets/Images/camera.png')}
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
              placeholder= "E.g. office expansion"
              placeholderTextColor="#888"
            />
          </View>
        </View>
      </ScrollView>
      <Button title="Create Project" />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    width: '100%',
    paddingTop: Platform.OS === 'android' ? 50 : 20,
    paddingBottom: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  arrowContainer: {
    position: 'absolute',
    left: 16,
    top: Platform.OS === 'android' ? 50 : 20,
    zIndex: 2,
  },
  arrowIcon: {
    width: screenWidth * 0.06,
    height: screenWidth * 0.06,
    resizeMode: 'contain',
  },
  title: {
    fontSize: screenWidth * 0.05,
    fontFamily: 'Pattaya-Regular',
    color: '#000',
  },
  scrollContent: {
    padding: 12,
  },
  photoSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
  },
  photoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  addPhotoText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#000',
    fontWeight: '700',
  },
  heading: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 10,
    marginLeft:8,
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: screenHeight * 0.06,
    backgroundColor: '#fff',
  },
  searchInput: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
});

export default ProjectPage;
