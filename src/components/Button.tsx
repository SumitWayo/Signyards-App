import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

const { width, height } = Dimensions.get('window');
import styles from './styles/Button.styles';

export const Button = ({ title = 'Get Started' }) => {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.bottomBorder} />
      <TouchableOpacity style={styles.fullButton}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
