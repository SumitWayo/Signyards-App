import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert
} from 'react-native';
import styles from './styles/Project.styles';
import NoMessagesPlaceholder from './NoMessagePlaceholder';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../src/types/navigation';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Dms'>;


const people = [
  { 
    id: 1, 
    name: 'Ramandeep', 
    image: require('../../assets/Images/man3.jpeg'),
    unreadMessages: 5, // Sample unread messages count
    time: '2 mins ago'  // Sample time
  },
  { 
    id: 2, 
    name: 'Sumit kanojia', 
    image: require('../../assets/Images/man3.jpeg'),
    unreadMessages: 3, // Sample unread messages count
    time: '10 mins ago'  // Sample time
  },
  { 
    id: 3, 
    name: 'Aswani Rai', 
    image: require('../../assets/Images/man3.jpeg'),
    unreadMessages: 0, // Sample unread messages count
    time: '1 hour ago'  // Sample time
  },
];

const Dms = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>     
        {/* <NoMessagesPlaceholder
          heading="No Direct Messages Yet"
          paragraph={`Start a conversation with any team member\n to discuss quick updates, questions,\n or on-site issues—one-on-one.`}
          buttonLabel="Add a Team Member to Chat"
          onPress={() => Alert.alert('Button Pressed!')}
        /> */}
    
        {people.map(person => (
        <Text style={styles.heading}>No Direct Messages Yet</Text>
        <Text style={styles.paragraph}>
        Start a conversation with any team member{'\n'}
        to discuss quick updates, questions,{'\n'}
        or on-site issues—one-on-one.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.fullButton}
          onPress={() => navigation.navigate("TeamMemberPage" as keyof RootStackParamList)}

          >
            <Text style={styles.buttonText}>Add a Team Member to Chat</Text>
          </TouchableOpacity>
        </View>

        {/* {people.map(person => (
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
        ))}
      </View>
    </ScrollView>
  );
};

export default Dms;
