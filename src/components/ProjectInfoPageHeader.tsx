import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles/ProjectInfoHeader.styles';

const ProjectInfoHeader = ({ title = 'HomePage', showSearch = true }) => {
  return (
    <SafeAreaView>
      <View style={[styles.container, { paddingBottom: showSearch ? styles.container.paddingBottom : 0 }]}>
        {/* Top Row: Back Arrow + Title */}
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.arrowWrapper} >
            <Image
              source={require('../../assets/icons/backarrow.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          <View style={{ width: styles.arrowIcon.width }} />
        </View>

        {/* Search Input (conditionally rendered) */}
        {showSearch && (
          <View style={styles.searchContainer}>
            <Image
              source={require('../../assets/Images/search.png')}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#888"
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProjectInfoHeader;
