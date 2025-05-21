import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Platform,
  TouchableOpacity,

} from 'react-native';
import ProjectInfoHeader from '../components/ProjectInfoPageHeader';
import useTypedNavigation from '../hooks/useTypedNavigation';
import styles from './styles/ProjectInfoPage.styles';

const { width } = Dimensions.get('window');

const ProjectInfoPage = () => {
  const navigation = useTypedNavigation<'ProjectInfoPage'>();
  return (
    <View style={styles.pageContainer}>
      <ProjectInfoHeader title="Project Info Page" showSearch={true} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Main box */}
        <TouchableOpacity style={styles.infoBox} onPress={() => navigation.navigate('MediaPage')}>
  <Text style={styles.leftText}>Media, links, docs</Text>
  <View style={styles.rightContainer}>
    <Text style={styles.numberText}>155</Text>
    <Image
      source={require('../../assets/icons/bluearrow.png')}
      style={styles.arrowIcon}
    />
  </View>
</TouchableOpacity>
<TouchableOpacity style={styles.infoBox} onPress={() => navigation.navigate('ListPage')}>
  <Text style={styles.leftText}>Lists</Text>
  <View style={styles.rightContainer}>
    <Text style={styles.numberText}>4</Text>
    <Image
      source={require('../../assets/icons/bluearrow.png')}
      style={styles.arrowIcon}
    />
  </View>
</TouchableOpacity>
        
<TouchableOpacity style={styles.infoBox} onPress={() => navigation.navigate('ProjectPage')}>
  <Text style={styles.leftText}>Edit Project</Text>
  <View style={styles.rightContainer}>
    <Image
      source={require('../../assets/icons/bluearrow.png')}
      style={styles.arrowIcon}
    />
  </View>
</TouchableOpacity>
<TouchableOpacity style={styles.infoBox} onPress={() => navigation.navigate('SubProjectPage')}>
  <Text style={styles.leftText}>Edit Sub Project</Text>
  <View style={styles.rightContainer}>
    <Image
      source={require('../../assets/icons/bluearrow.png')}
      style={styles.arrowIcon}
    />
  </View>
</TouchableOpacity>

        {/* List below */}
       
      </ScrollView>
    </View>
  );
};



export default ProjectInfoPage;
