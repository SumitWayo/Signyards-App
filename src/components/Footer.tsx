import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/Footer.styles';
import { useFooter } from '../context/FooterContext'; // ✅ Import context

const Footer = () => {
  const { selectedItem, setSelectedItem } = useFooter(); // ✅ Use context values

  const handlePress = (item: string) => {
    setSelectedItem(item);
    // Removed navigation calls: rendering happens in parent based on selectedItem
  };

  const getItemStyle = (item: string) => {
    return item === selectedItem ? styles.selectedItem : null;
  };

  return (
    <View style={styles.footer}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={[styles.iconItem, getItemStyle('projects')]}
          onPress={() => handlePress('projects')}
        >
          <Image
            source={require('../../assets/icons/projects.png')}
            style={[styles.icon, selectedItem === 'projects' && styles.selectedIcon]}
          />
          <Text style={[styles.label, selectedItem === 'projects' && styles.selectedLabel]}>
            Projects
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconItem, getItemStyle('dms')]}
          onPress={() => handlePress('dms')}
        >
          <Image
            source={require('../../assets/icons/dms.png')}
            style={[styles.icon, selectedItem === 'dms' && styles.selectedIcon]}
          />
          <Text style={[styles.label, selectedItem === 'dms' && styles.selectedLabel]}>
            DMs
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconItem, getItemStyle('mention')]}
          onPress={() => handlePress('mention')}
        >
          <Image
            source={require('../../assets/icons/mentions.png')}
            style={[styles.icon, selectedItem === 'mention' && styles.selectedIcon]}
          />
          <Text style={[styles.label, selectedItem === 'mention' && styles.selectedLabel]}>
            Mention
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconItem, getItemStyle('updates')]}
          onPress={() => handlePress('updates')}
        >
          <Image
            source={require('../../assets/icons/updates.png')}
            style={[styles.icon, selectedItem === 'updates' && styles.selectedIcon]}
          />
          <Text style={[styles.label, selectedItem === 'updates' && styles.selectedLabel]}>
            Updates
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
