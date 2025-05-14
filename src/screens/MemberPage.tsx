import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import styles from '../screens/styles/MemberPage.styles';
import Header from '../components/Header';

const people = [
  { 
    id: 1, 
    name: 'Ramandeep', 
    role: 'Project Manager',
    image: require('../../assets/Images/man3.jpeg'),
    unreadMessages: 5,
    time: '2 mins ago',
  },
  { 
    id: 2, 
    name: 'Sumit Kanojia', 
    role: 'Developer',
    image: require('../../assets/Images/man3.jpeg'),
    unreadMessages: 3,
    time: '10 mins ago',
  },
  { 
    id: 3, 
    name: 'Aswani Rai', 
    role: 'Designer',
    image: require('../../assets/Images/man3.jpeg'),
    unreadMessages: 0,
    time: '1 hour ago',
  },
];


const MemberPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.arrowContainer}>
          <Image
            source={require('../../assets/Images/back.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Members</Text>
      </View>
      
        {people.map(person => (
          <TouchableOpacity key={person.id} style={styles.personRow}>
            <View style={styles.personInfo}>
              <Image source={person.image} style={styles.avatar} />
              <View>
                <Text style={styles.name}>{person.name}</Text>
                <Text style={styles.role}>{person.role}</Text> {/* Role below name */}

              </View>
            </View>

           
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

export default MemberPage;
