import React from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import ProjectInfoHeader from '../components/ProjectInfoPageHeader';
import { Button } from '../components/Button';
import styles from "../screens/styles/UserProfile.styles";

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

      {/* Input Fields */}
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

export default UserProfilePage;
