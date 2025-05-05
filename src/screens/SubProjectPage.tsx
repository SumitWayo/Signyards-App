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
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const SubProjectPage = () => {
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
            />
          </View>
        </View>
      </ScrollView>

      <Button title="Create Sub-Project" />
    </SafeAreaView>
  );
};



export default SubProjectPage;
