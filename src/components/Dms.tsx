import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import styles from './styles/Project.styles';
import NoMessagesPlaceholder from './NoMessagePlaceholder';

const people = [
  {
    id: 1,
    name: 'Ramandeep',
    image: require('../../assets/Images/man3.jpeg'),
    unreadMessages: 5,
    time: '2 mins ago',
  },
  {
    id: 2,
    name: 'Sumit Kanojia',
    image: require('../../assets/Images/man3.jpeg'),
    unreadMessages: 3,
    time: '10 mins ago',
  },
  {
    id: 3,
    name: 'Aswani Rai',
    image: require('../../assets/Images/man3.jpeg'),
    unreadMessages: 0,
    time: '1 hour ago',
  },
];

// Set this to false to test the NoMessagesPlaceholder
const hasPeople = people.length > 5;

const Dms = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {hasPeople ? (
        <View style={styles.container}>
          {people.map((person) => (
            <TouchableOpacity key={person.id} style={styles.personRow}>
              <View style={styles.personInfo}>
                <Image source={person.image} style={styles.avatar} />
                <View>
                  <Text style={styles.name}>{person.name}</Text>
                </View>
              </View>

              <View style={styles.rightInfo}>
                {person.unreadMessages > 0 ? (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadCount}>
                      {person.unreadMessages}
                    </Text>
                  </View>
                ) : null}
                <Text style={styles.time}>{person.time}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View style={styles.placeholderWrapper}>
          <NoMessagesPlaceholder
            heading="No Direct Messages Yet"
            paragraph={`Start a conversation with any team member\nto discuss quick updates, questions,\nor on-site issues — one-on-one.`}
            buttonLabel="Add a Team Member to Chat"
            onPress={() => Alert.alert('Button Pressed!')}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Dms;
