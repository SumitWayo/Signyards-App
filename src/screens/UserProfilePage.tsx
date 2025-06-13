import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Alert, Image, ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ProjectInfoHeader from '../components/ProjectInfoPageHeader';
import { Button } from '../components/Button';
import styles from '../screens/styles/UserProfile.styles';
import {
  getUserByPhone,
  updateLocalUser,
  createAppUsersTable
} from '../db/userService';
import { editUser } from '../api/auth';

const UserProfilePage = () => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      try {
        await createAppUsersTable();
        const storedPhone = await AsyncStorage.getItem('userPhone');
        if (storedPhone) {
          setPhone(`+91 ${storedPhone}`);
          await loadLocalUserData(storedPhone);
        } else {
          Alert.alert('Error', 'Phone number not found in storage.');
        }
      } catch (err) {
        console.error(err);
        Alert.alert('Error', 'Failed to load user data.');
      } finally {
        setLoading(false);
      }
    };
    initialize();
  }, []);

  const loadLocalUserData = async (rawPhone: string) => {
    try {
      const user = await getUserByPhone(rawPhone);
      if (user) {
        setName(user.name || '');
        setEmail(user.email || '');
        setRole(user.role || '');
      } else {
        console.log('User not found in local DB');
      }
    } catch (error) {
      console.error('Failed to fetch local user data:', error);
    }
  };

 const handleSave = async () => {
  try {
    const storedPhone = await AsyncStorage.getItem('userPhone');
    if (!storedPhone) {
      Alert.alert('Error', 'Phone number not found in storage.');
      return;
    }

    const json = await editUser(storedPhone, name, email, role);

    if (json.status === 'success') {
      await updateLocalUser(storedPhone, name, email, role);
      await loadLocalUserData(storedPhone); // Refresh UI
      Alert.alert('Success', 'Profile updated successfully!');
    } else {
      Alert.alert('Error', json.message || 'Failed to update profile');
    }
  } catch (error) {
    console.error(error);
    Alert.alert('Error', 'An error occurred while saving');
  }
};


  const chooseImage = () => {
    Alert.alert('Change Profile Photo', 'Choose an option', [
      { text: 'Camera', onPress: openCamera },
      { text: 'Gallery', onPress: openGallery },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  const openCamera = () => {
    launchCamera({ mediaType: 'photo', saveToPhotos: true }, response => {
      if (response.assets?.length) setPhotoUri(response.assets[0].uri || null);
    });
  };

  const openGallery = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.assets?.length) setPhotoUri(response.assets[0].uri || null);
    });
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ProjectInfoHeader title="Profile" showSearch={false} />

      <TouchableOpacity onPress={chooseImage} style={styles.profileContainer}>
        <View style={styles.circle}>
          <Image
            source={
              photoUri
                ? { uri: photoUri }
                : require('../../assets/Images/man3.jpeg')
            }
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.smallBox}>
          <Image
            source={require('../../assets/icons/editprofile.png')}
            style={styles.smallBoxImage}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>

      <Text style={styles.phoneNumber}>{phone}</Text>

      <Text style={styles.heading}>Enter Name</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="E.g. Sumeet Kanojia"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />
      </View>

      <Text style={styles.heading}>Enter Email</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="E.g. sumitkanojia@gmail.com"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <Text style={styles.heading}>Job Role</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="E.g. Manager"
          placeholderTextColor="#888"
          value={role}
          onChangeText={setRole}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} />
      </View>
    </View>
  );
};

export default UserProfilePage;
