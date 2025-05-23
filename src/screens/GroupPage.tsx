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
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation'; // Adjust path if needed

const { width } = Dimensions.get('window');

const ProjectInfoPage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.pageContainer}>
      <ProjectInfoHeader title="Project Info Page" showSearch={true} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        
        <TouchableOpacity
          style={styles.infoBox}
          onPress={() => navigation.navigate('MediaPage')}
        >
          <Text style={styles.leftText}>Media, links, docs</Text>
          <View style={styles.rightContainer}>
            <Text style={styles.numberText}>155</Text>
            <Image
              source={require('../../assets/icons/bluearrow.png')}
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.infoBox}
          onPress={() => navigation.navigate('ListPage')}
        >
          <Text style={styles.leftText}>Lists</Text>
          <View style={styles.rightContainer}>
            <Text style={styles.numberText}>4</Text>
            <Image
              source={require('../../assets/icons/bluearrow.png')}
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.infoBox}
          onPress={() => navigation.navigate('ProjectPage')}
        >
          <Text style={styles.leftText}>Edit Project</Text>
          <View style={styles.rightContainer}>
            <Image
              source={require('../../assets/icons/bluearrow.png')}
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.infoBox}
          onPress={() => navigation.navigate('SubProjectPage')}
        >
          <Text style={styles.leftText}>Edit Sub Project</Text>
          <View style={styles.rightContainer}>
            <Image
              source={require('../../assets/icons/bluearrow.png')}
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    padding: 16,
    paddingTop: 20,
  },
  infoBox: {
    width: '100%',
    height: 40,
    borderRadius: 12,
    borderWidth: 0.2,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  leftText: {
    fontFamily: 'NotoSans',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 8,
  },
  arrowIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default ProjectInfoPage;