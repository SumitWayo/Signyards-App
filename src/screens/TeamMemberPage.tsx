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
import ProjectInfoHeader from '../components/ProjectInfoPageHeader';
import useTypedNavigation from '../hooks/useTypedNavigation';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const TeamMemberPage = () => {
  const navigation = useTypedNavigation<'TeamMemberPage'>();

  function addTeamMember(){
    navigation.navigate('MemberPage');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
            <ProjectInfoHeader title="Members" showSearch={false}  />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Photo Upload Section */}
          

          {/* Project Name Input */}
          <Text style={styles.heading}>Enter Name</Text>
          <View style={styles.searchContainer}>
  <TextInput
    style={[styles.searchInput, { flex: 1 }]}
    placeholder="John deo"
    placeholderTextColor="#888"
  />
  <Image
              source={require('../../assets/icons/contact.png')} 
              style={styles.icon}
    resizeMode="contain"
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

      <View style={styles.bottomContainer}>
              <View style={styles.bottomBorder} />
              <TouchableOpacity style={styles.fullButton} onPress={addTeamMember}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
                </SafeAreaView>
  );
};



export default TeamMemberPage;
