// components/ExtraOptionsPanel.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/ExtraoptionalPanel.styles';

const options = [
  { label: 'Photos', icon: require('../../assets/icons/gallery.png') },
  { label: 'Camera', icon: require('../../assets/icons/cam.png') },
  { label: 'Location', icon: require('../../assets/icons/map.png') },
  { label: 'Contact', icon: require('../../assets/icons/contacts-book.png') },
  { label: 'Document', icon: require('../../assets/icons/doc.png') },
];

const ExtraOptionsPanel = () => {
  return (
   <View style={styles.panelContainer}>
  {options.map((item, index) => (
    <View
      key={index}
      style={[
        styles.optionBox,
        (index + 1) % 4 === 0 && styles.noRightMargin, // Remove right margin after every 4th item
      ]}
    >
      <Image source={item.icon} style={styles.optionIcon} />
      <Text style={styles.optionLabel}>{item.label}</Text>
    </View>
  ))}
</View>


  );
};

export default ExtraOptionsPanel;
