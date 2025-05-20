import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity, // ✅ Added this import
} from 'react-native';
import styles from './styles/Header.styles';
import useTypedNavigation from '../hooks/useTypedNavigation';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface HeaderProps {
  title?: string;
  showSearch?: boolean;
  onAddPersonPress?: () => void; // ✅ Added prop
}

const Header: React.FC<HeaderProps> = ({ title = 'HomePage', showSearch = true, onAddPersonPress }) => {
  const navigation = useTypedNavigation<'Header'>();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Circle - top-left */}
        <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('UserProfilePage')}>
  <Text style={styles.letter}>A</Text>
</TouchableOpacity>

        {/* Centered Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>

        {/* Optional Search Field */}
        {showSearch && (
          <View style={styles.searchContainer}>
            <Image
              source={require('../../assets/icons/search.png')}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for project, chats, DMs and more"
              placeholderTextColor="#888"
            />
          </View>
        )}

        {/* Add Person Icon - top-right */}
        <TouchableOpacity style={styles.addPersonIconContainer} onPress={() => navigation.navigate('ProjectPage')}>
          <Image
            source={require('../../assets/icons/addproject.png')}
            style={styles.addPersonIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
