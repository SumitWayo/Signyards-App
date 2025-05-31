import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import styles from '../screens/styles/MemberPage.styles';
import ProjectInfoHeader from '../components/ProjectInfoPageHeader';

const { height, width } = Dimensions.get('window');

interface Person {
  id: number;
  name: string;
  role: string;
  image: any;
  unreadMessages: number;
  time: string;
  isAdmin: boolean;
}

const initialPeople: Person[] = [
  {
    id: 1,
    name: 'Ramandeep',
    role: 'Project Manager',
    image: require('../../assets/Images/man3.jpeg'),
    unreadMessages: 5,
    time: '2 mins ago',
    isAdmin: true,
  },
  {
    id: 2,
    name: 'Sumit Kanojia',
    role: 'Developer',
    image: require('../../assets/Images/man3.jpeg'),
    unreadMessages: 3,
    time: '10 mins ago',
    isAdmin: false,
  },
  {
    id: 3,
    name: 'Aswani Rai',
    role: 'Designer',
    image: require('../../assets/Images/man3.jpeg'),
    unreadMessages: 0,
    time: '1 hour ago',
    isAdmin: false,
  },
];

const MemberPage = () => {
  const [people, setPeople] = useState<Person[]>(initialPeople);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const handleNamePress = (person: Person) => {
    setSelectedPerson(person);
    setModalVisible(true);
  };

  const toggleAdminStatus = () => {
    if (!selectedPerson) return;
    const updatedPeople = people.map((p) =>
      p.id === selectedPerson.id ? { ...p, isAdmin: !p.isAdmin } : p
    );
    setPeople(updatedPeople);
    setModalVisible(false);
  };

  const removeFromGroup = () => {
    if (!selectedPerson) return;
    const updatedPeople = people.filter((p) => p.id !== selectedPerson.id);
    setPeople(updatedPeople);
    setModalVisible(false);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContainer} >
        <ProjectInfoHeader title="Members" showSearch={false} rightIcon={true} />

        {people.map((person) => (
          <TouchableOpacity key={person.id} style={styles.personRow}>
            <View style={styles.personInfo}>
              <Image source={person.image} style={styles.avatar} />
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                  <TouchableOpacity onPress={() => handleNamePress(person)}>
                    <Text style={styles.name}>{person.name}</Text>
                  </TouchableOpacity>
                  <Text style={styles.role}>{person.role}</Text>
                </View>
                <Text
                  style={[
                    styles.adminStatus,
                    { color: person.isAdmin ? 'green' : 'gray' },
                  ]}
                >
                  {person.isAdmin ? 'Admin' : 'Member'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal
        transparent
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.bottomSheetOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.bottomSheet}>
               

                <TouchableOpacity
                  style={styles.bottomSheetOption}
                  onPress={toggleAdminStatus}
                >
                  <Text style={styles.bottomSheetOptionText}>
                    {selectedPerson?.isAdmin ? 'Remove Admin' : 'Make Admin'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.bottomSheetOption, { backgroundColor: '#ff4d4d' }]}
                  onPress={removeFromGroup}
                >
                  <Text style={[styles.bottomSheetOptionText, { color: '#fff' }]}>
                    Remove from Group
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default MemberPage;
