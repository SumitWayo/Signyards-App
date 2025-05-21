import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Linking,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import styles from './styles/ExtraoptionalPanel.styles';

const options = [
  { label: 'Photos', icon: require('../../assets/icons/gallery.png'), action: 'gallery' },
  { label: 'Camera', icon: require('../../assets/icons/cam.png'), action: 'camera' },
  { label: 'Location', icon: require('../../assets/icons/map.png'), action: 'location' },
  { label: 'Contact', icon: require('../../assets/icons/contacts-book.png'), action: 'contact' },
  { label: 'Document', icon: require('../../assets/icons/doc.png'), action: 'document' },
];

const ExtraOptionsPanel = () => {
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const openMap = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      Alert.alert('Permission denied', 'Location permission is required.');
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        const url =
          Platform.OS === 'ios'
            ? `http://maps.apple.com/?ll=${latitude},${longitude}`
            : `geo:${latitude},${longitude}?q=${latitude},${longitude}`;
        Linking.openURL(url).catch(err => {
          console.error('Failed to open map:', err);
          Alert.alert('Error', 'Could not open the map.');
        });
      },
      error => {
        console.error('Geolocation error:', error);
        Alert.alert('Error', 'Could not get current location.');
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  const handleOptionPress = (action: string) => {
    switch (action) {
      case 'camera':
        launchCamera({ mediaType: 'photo' }, response => {
          if (response.didCancel) {
            console.log('User cancelled camera');
          } else if (response.errorCode) {
            console.log('Camera Error: ', response.errorMessage);
          } else {
            console.log('Photo taken: ', response.assets);
          }
        });
        break;

      case 'gallery':
        launchImageLibrary({ mediaType: 'photo' }, response => {
          if (response.didCancel) {
            console.log('User cancelled gallery');
          } else if (response.errorCode) {
            console.log('Gallery Error: ', response.errorMessage);
          } else {
            console.log('Selected image: ', response.assets);
          }
        });
        break;

      case 'location':
        openMap();
        break;

      default:
        Alert.alert('Info', `Functionality for "${action}" not implemented yet.`);
    }
  };

  return (
    <View style={styles.panelContainer}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionBox,
            (index + 1) % 4 === 0 && styles.noRightMargin,
          ]}
          onPress={() => handleOptionPress(item.action)}
        >
          <Image source={item.icon} style={styles.optionIcon} />
          <Text style={styles.optionLabel}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ExtraOptionsPanel;
