import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import styles from './styles/Button.styles';

type ButtonProps = {
  title?: string;
  onPress?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ title = 'Get Started', onPress }) => {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.bottomBorder} />
      <TouchableOpacity style={styles.fullButton} onPress={onPress} activeOpacity={0.7}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
