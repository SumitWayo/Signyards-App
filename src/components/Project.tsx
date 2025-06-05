import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useProjectContext } from '../context/ProjectContext';
import useTypedNavigation from '../hooks/useTypedNavigation';
import styles from './styles/Project.styles';
import NoMessagesPlaceholder from './NoMessagePlaceholder';



const Project = () => {
  const navigation = useTypedNavigation<'ProjectPage'>();
 const { projects, loading, refreshProjects } = useProjectContext();

  useEffect(() => {
    refreshProjects(); // Refresh when this screen loads
  }, []);
  

  if (loading) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: 'center', alignItems: 'center', flex: 1 },
        ]}
      >
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }



  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {projects.length > 0 ? (
        <View style={styles.container}>
          {projects.map((person) => (
            <TouchableOpacity
              key={person.id}
              style={styles.personRow}
              onPress={() => navigation.navigate('GroupPage', { projectId: person.id })}
            >
              <View style={styles.personInfo}>
                <Image
                  source={require('../../assets/Images/man3.jpeg')}
                  style={styles.avatar}
                />
                <View>
                  <Text style={styles.name}>{person.name}</Text>
                </View>
              </View>
              <View style={styles.rightInfo}>
                {person.unreadMessages > 0 && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadCount}>{person.unreadMessages}</Text>
                  </View>
                )}
                <Text style={styles.time}>{person.time}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View style={styles.placeholderWrapper}>
          <NoMessagesPlaceholder
            heading="No Projects Yet"
            paragraph={`Create a project to start organizing your site communications.\nProjects act as containers for all your groups, chats, files, and updates.`}
            buttonLabel="Create Your First Project"
            onPress={() => navigation.navigate('ProjectPage')}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Project;
