import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import styles from './styles/Project.styles';

const people = [
  { 
    id: 1, 
    name: 'Pune Interior', 
    image: require('../../assets/Images/man3.jpeg'),
    unreadMessages: 5, // Sample unread messages count
    time: '2 mins ago'  // Sample time
  },
  { 
    id: 2, 
    name: 'Gurugram Building', 
    image: require('../../assets/Images/man3.jpeg'),
    unreadMessages: 3, // Sample unread messages count
    time: '10 mins ago'  // Sample time
  },
  { 
    id: 3, 
    name: 'Jabalpur Resto', 
    image: require('../../assets/Images/man3.jpeg'),
    unreadMessages: 0, // Sample unread messages count
    time: '1 hour ago'  // Sample time
  },
];

const Project = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Uncomment below if you want to show a message when no projects exist */}
        <Text style={styles.heading}>No Projects Yet</Text>
        <Text style={styles.paragraph}>
          Create a project to start organizing your{'\n'}
          site communications. Projects act as containers{'\n'}
          for all your groups, chats, files, and updates.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.fullButton}>
            <Text style={styles.buttonText}>Create Your First Project</Text>
          </TouchableOpacity>
        </View>
{/* 
        {people.map(person => (
          <TouchableOpacity key={person.id} style={styles.personRow}>
            <View style={styles.personInfo}>
              <Image source={person.image} style={styles.avatar} />
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
        ))} */}
      </View>
    </ScrollView>
  );
};

export default Project;
