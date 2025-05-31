import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ProjectInfoHeader from '../components/ProjectInfoPageHeader';
import { Button } from '../components/Button';
import styles from '../screens/styles/UserProfile.styles';

const UserProfilePage = () => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  // User data state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      try {
        const storedPhone = await AsyncStorage.getItem('userPhone');
        if (storedPhone) {
          setPhone(`+91 ${storedPhone}`);
          fetchUserData(storedPhone);
        } else {
          Alert.alert('Error', 'Phone number not found in storage.');
          setLoading(false);
        }
      } catch (err) {
        Alert.alert('Error', 'Failed to load phone number.');
        console.error(err);
        setLoading(false);
      }
    };

    initialize();
  }, []);

  const fetchUserData = async (rawPhone: string) => {
    try {
      const response = await fetch('https://signyards.com/admin/getAppUsers.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'getUser',
          phone: rawPhone,
        }),
      });

      const json = await response.json();

      if (json.status === 'success' && json.data) {
        const user = json.data;
        setName(user.name || '');
        setEmail(user.email || '');
        setRole(user.role || '');
      } else {
        Alert.alert('Error', json.message || 'Failed to fetch user data');
      }
    } catch (error) {
      Alert.alert('Error', 'Network error occurred');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const chooseImage = () => {
    Alert.alert(
      'Change Profile Photo',
      'Choose an option',
      [
        { text: 'Camera', onPress: openCamera },
        { text: 'Gallery', onPress: openGallery },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };
const handleSave = async () => {
  try {
    const storedPhone = await AsyncStorage.getItem('userPhone');
    if (!storedPhone) {
      Alert.alert('Error', 'Phone number not found in storage.');
      return;
    }

    const response = await fetch('https://signyards.com/admin/getAppUsers.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'editUser',
        phone: storedPhone.replace('+91 ', ''),
        name,
        email,
        role,
      }),
    });

    const json = await response.json();

    if (json.status === 'success') {
      Alert.alert('Success', 'Profile updated successfully!');
    } else {
      Alert.alert('Error', json.message || 'Failed to update profile');
    }
  } catch (error) {
    console.error(error);
    Alert.alert('Error', 'An error occurred while saving');
  }
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

      {/* Profile Image with Edit Icon */}
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

      {/* Phone Number */}
      <Text style={styles.phoneNumber}>{phone}</Text>

      {/* Input Fields */}
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

      {/* Save Button */}
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} />
      </View>
    </View>
  );
};

export default UserProfilePage;
