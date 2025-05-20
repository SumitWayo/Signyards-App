import React from 'react';
import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import styles from '../components/styles/Project.styles'; // Adjust path as needed

interface NoMessagesPlaceholderProps {
  heading: string;
  paragraph: string;
  buttonLabel?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const NoMessagesPlaceholder: React.FC<NoMessagesPlaceholderProps> = ({
  heading,
  paragraph,
  buttonLabel,
  onPress,
}) => {
  return (
    <>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.paragraph}>{paragraph}</Text>

      {buttonLabel && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.fullButton} onPress={onPress}>
            <Text style={styles.buttonText}>{buttonLabel}</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default NoMessagesPlaceholder;
