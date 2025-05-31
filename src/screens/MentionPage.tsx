import React from 'react';
import { View, Image, Text, ScrollView, Alert } from 'react-native';
import styles from './styles/MentionPage.styles';
import NoMessagesPlaceholder from '../components/NoMessagePlaceholder';

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
    image: require('../../assets/Images/man3.jpeg'),
  },
  {
    id: 3,
    name: 'Aswani',
    date: '28/04/25',
    projectTitle: 'Bangalore office setup - Interior',
    mentionText: '@Sumit Can you send the specs?',
    time: '09:45',
    image: require('../../assets/Images/man2.png'),
  },
];

const hasMentions = mentions.length > 0;

const MentionPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {hasMentions ? (
        <View style={styles.container}>
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
      ) : (
        <View style={styles.containerTwo} >
          <NoMessagesPlaceholder
            heading="No Mentions Yet"
            paragraph={`When someone tags you using @yourname\nin a chat, you’ll see it here—so you never miss\nan important message.\n\nTip: Type @name in any chat to mention a teammate.`}
            buttonLabel="Start a Chat"
            onPress={() => Alert.alert('Start Chat pressed!')}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default MentionPage;
