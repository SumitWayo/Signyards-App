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

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface HeaderProps {
  title?: string;
  showSearch?: boolean;
  onAddPersonPress?: () => void; // ✅ Added prop
}

const Header: React.FC<HeaderProps> = ({ title = 'HomePage', showSearch = true, onAddPersonPress }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Circle - top-left */}
        <View style={styles.circle}>
          <Text style={styles.letter}>A</Text>
        </View>

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
        <TouchableOpacity style={styles.addPersonIconContainer} onPress={onAddPersonPress}>
          <Image
            source={require('../../assets/icons/addperson.png')}
            style={styles.addPersonIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
