import React from 'react';
import useTypedNavigation from '../hooks/useTypedNavigation';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import styles from './styles/Project.styles';
import NoMessagesPlaceholder from './NoMessagePlaceholder';


type PersonType = {
  id: number;
  name: string;
  image: string;
  unreadMessages: number;
  time: string;
};

const Project = () => {
  const navigation = useTypedNavigation<'ProjectPage'>();

  const haveList = false;

  const people: PersonType[] = haveList
    ? [
        {
          id: 1,
          name: 'Pune Extension',
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
          unreadMessages: 3,
          time: '10:30 AM',
        },
        {
          id: 2,
          name: ' Smith Work',
          image: 'https://randomuser.me/api/portraits/women/2.jpg',
          unreadMessages: 0,
          time: 'Yesterday',
        },
      ]
    : [];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {haveList && people.length > 0 ? (
        <View style={styles.container}>
          {people.map((person) => (
            <TouchableOpacity key={person.id} style={styles.personRow} onPress={() => navigation.navigate('GroupPage')}>
              <View style={styles.personInfo}>
                <Image source={{ uri: person.image }} style={styles.avatar} />
                <View>
                  <Text style={styles.name}>{person.name}</Text>
                </View>
              </View>
              <View style={styles.rightInfo}>
                {person.unreadMessages > 0 && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadCount}>
                      {person.unreadMessages}
                    </Text>
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

export default Project;
