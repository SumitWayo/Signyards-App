import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

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

const styles = StyleSheet.create({
  bottomContainer: {
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.04,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  fullButton: {
    width: '100%',
    height: height * 0.07,
    borderRadius: 12,
    backgroundColor: '#6395EE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.02,
  },
  buttonText: {
    fontFamily: 'NotoSans-SemiBold',
    fontWeight: '600',
    fontSize: width * 0.05,
    color: 'white',
    textAlign: 'center',
  },
  bottomBorder: {
    width: '100%',
    height: 1,
    backgroundColor: '#eeeeee',
    marginBottom: height * 0.025,
  },
});
