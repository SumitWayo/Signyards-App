import React from 'react';
import { View, Image, Text } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './styles/MentionPage.styles';

const MentionPage = () => {
  const mentions = [
    {
      id: 1,
      name: 'Rinal',
      date: '30/04/25',
      projectTitle: 'Pune office expansion - Carpentry & fixtures',
      mentionText: '@Animesh Let’s get started!',
      time: '10:05',
      image: require('../../assets/Images/girl.jpg'),
    },
    {
      id: 2,
      name: 'Sumit',
      date: '29/04/25',
      projectTitle: 'Mumbai branch redesign - Electricals',
      mentionText: '@Rinal Please review the layout.',
      time: '11:15',
      image: require('../../assets/Images/man3.jpeg'), // add this image to your assets
    },
    {
      id: 3,
      name: 'Aswani',
      date: '28/04/25',
      projectTitle: 'Bangalore office setup - Interior',
      mentionText: '@Sumit Can you send the specs?',
      time: '09:45',
      image: require('../../assets/Images/man2.png'), // add this image to your assets
    },
  ];

  return (
    <View style={{ backgroundColor: '#f5f5f5', flex: 1 }}>
      <Header title="Fitouts" showSearch={false} />

      <View style={{ paddingHorizontal: 16, marginTop: 12 }}>
        {mentions.map((mention) => (
          <View key={mention.id} style={{ marginBottom: 24 }}>
            <View style={styles.profileRow}>
              <Image source={mention.image} style={styles.girlImage} />
              <Text style={styles.nameText}>{mention.name}</Text>
              <Text style={styles.dateTextInline}>{mention.date}</Text>
            </View>

            <View style={styles.messageRow}>
              <View style={styles.messageBox}>
                <View style={styles.messageHeader}>
                  <Text style={styles.projectTitle}>{mention.projectTitle}</Text>
                </View>

                <View style={styles.messageBody}>
                  <Text style={styles.mentionText}>{mention.mentionText}</Text>
                  <Text style={styles.timeText}>{mention.time}</Text>
                </View>
              </View>

              <Image
                source={require('../../assets/icons/bluearrow.png')}
                style={styles.arrowIcon}
              />
            </View>
            <View style={styles.dividerLine} />
          </View>
        ))}
      </View>

      <Footer />
    </View>
  );
};

export default MentionPage;
