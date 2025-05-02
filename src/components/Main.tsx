import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import styles from './styles/Main.styles';

const Main = () => {
  const { height, width } = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>No Projects Yet</Text>
        <Text style={styles.paragraph}>
          Create a project to start organizing your{'\n'}
          site communications. Projects act as containers{'\n'}
          for all your groups, chats, files, and updates.
        </Text>

        {/* ✅ Move the button inside the same View for proper layout */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.fullButton}>
            <Text style={styles.buttonText}>Create Your First Project</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;
