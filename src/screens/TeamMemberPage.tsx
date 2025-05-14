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
import styles from './styles/TeamMemberPage.styles';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const TeamMemberPage = () => {
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
        <Text style={styles.title}>Add Member</Text>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Photo Upload Section */}
          

          {/* Project Name Input */}
          <Text style={styles.heading}>Enter Name</Text>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="John deo"
              placeholderTextColor="#888"
            />
          </View>
          <Text style={styles.heading}>Enter Number</Text>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="+91"
              placeholderTextColor="#888"
            />
          </View>
          <Text style={styles.heading}>Enter Job Role</Text>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Marketing"
              placeholderTextColor="#888"
            />
          </View>
      </ScrollView>

      <Button title="Add" />
    </SafeAreaView>
  );
};



export default TeamMemberPage;
