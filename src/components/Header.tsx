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
} from 'react-native';
import styles from './styles/Header.styles';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface HeaderProps {
  title?: string;
  showSearch?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title = 'HomePage', showSearch = true }) => {
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
              source={require('../../assets/Images/search.png')}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for project, chats, DMs and more"
              placeholderTextColor="#888"
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;
