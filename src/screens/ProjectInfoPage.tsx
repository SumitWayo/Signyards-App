import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import ProjectInfoHeader from '../components/ProjectInfoPageHeader';
import useTypedNavigation from '../hooks/useTypedNavigation';
import styles from './styles/ProjectInfoPage.styles';
import { useProjectContext } from '../context/ProjectContext';
import { RootStackParamList } from '../types/navigation';

type ProjectInfoRouteProp = RouteProp<RootStackParamList, 'ProjectInfoPage'>;

const ProjectInfoPage = () => {
  const navigation = useTypedNavigation<'ProjectInfoPage'>();
  const route = useRoute<ProjectInfoRouteProp>();
  const { projectId } = route.params;

  const { projects } = useProjectContext();

  const project = projects.find((p) => p.id === projectId);
  const projectName = project ? project.name : 'Project Info Page';

  return (
    <View style={styles.pageContainer}>
      <ProjectInfoHeader title={projectName} showSearch={true} />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity
          style={styles.infoBox}
          onPress={() => navigation.navigate('MediaPage', { projectId })}
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
          onPress={() => navigation.navigate('ListPage', { projectId })}
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
  onPress={() => navigation.navigate('ProjectPage', { projectId, edit: true })}
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
  onPress={() => navigation.navigate('SubProjectPage', { projectId, edit: true })}
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

export default ProjectInfoPage;
