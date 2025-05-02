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

const Header = () => {
  return (
    <SafeAreaView>
      {/* Header */}
      <View style={styles.container}>
        {/* Circle - top-left */}
        <View style={styles.circle}>
          <Text style={styles.letter}>A</Text>
        </View>

        {/* Centered Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>HomePage</Text>
        </View>
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
      </View>

    



    </SafeAreaView>
  );
};



export default Header;
