import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ProjectInfoHeader from '../components/ProjectInfoPageHeader';
import { Button } from '../components/Button';
import styles from '../screens/styles/UserProfile.styles';

const UserProfilePage = () => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);

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
