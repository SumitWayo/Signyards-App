import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text, TextInput  } from 'react-native';

import ProjectInfoHeader from '../components/ProjectInfoPageHeader';
import { Button } from '../components/Button';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const UserProfilePage = () => {
  return (
    <View style={styles.container}>
      <ProjectInfoHeader title="Profile" showSearch={false} />

      {/* Profile Image with Edit Icon */}
      <View style={styles.profileContainer}>
        <View style={styles.circle}>
          <Image
            source={require('../../assets/Images/man3.jpeg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.smallBox}>
          <Image
            source={require('../../assets/Images/edit.png')}
            style={styles.smallBoxImage}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Phone Number */}
      <Text style={styles.phoneNumber}>+91 8877665544</Text>

      {/* Project Name Input */}
             <Text style={styles.heading}>Enter Name</Text>
    <View style={styles.searchContainer}>
               <TextInput
                 style={styles.searchInput}
                 placeholder="E.g. Sumeet kanojia"
                 placeholderTextColor="#888"
               />
             </View>
             <Text style={styles.heading}>Enter Email</Text>
    <View style={styles.searchContainer}>
               <TextInput
                 style={styles.searchInput}
                 placeholder="E.g. sumitkanojia@gmail.com"
                 placeholderTextColor="#888"
               />
             </View>
             <Text style={styles.heading}>Job Role</Text>
    <View style={styles.searchContainer}>
               <TextInput
                 style={styles.searchInput}
                 placeholder="E.g. Manager"
                 placeholderTextColor="#888"
               />
             </View>


      {/* Save Button */}
      <View style={styles.buttonContainer}>
        <Button title="Save" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    padding: 16,
    paddingBottom: 80,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: screenHeight * 0.05,
    marginBottom: 10,
  },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: '#EBF2FF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  smallBox: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 0,
    right: screenWidth / 2 - 50 - 15, // Center alignment with offset
    borderRadius: 15,
    backgroundColor: '#6395EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallBoxImage: {
    width: '70%',
    height: '70%',
  },
  phoneNumber: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: screenHeight * 0.03,
    color: '#000',
  },
  heading: {
    fontSize: screenWidth * 0.045,
    fontWeight: '400',
    marginBottom: screenHeight * 0.01,
    marginLeft: screenWidth * 0.01,
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: screenWidth * 0.02,
    paddingHorizontal: screenWidth * 0.03,
    height: screenHeight * 0.06,
    backgroundColor: '#fff',
    marginBottom: screenHeight * 0.02,
  },
  searchInput: {
    fontSize: screenWidth * 0.04,
    color: '#000',
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
  },
});

export default UserProfilePage;
