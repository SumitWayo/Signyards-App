import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./styles/Footer.styles"

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../src/types/navigation';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Footer'>;

const Footer = () => {
  const navigation = useNavigation<NavigationProp>();

  const [selectedItem, setSelectedItem] = useState(null);

  const handlePress = (item: any) => {
    setSelectedItem(item);
    if(item=='dms'){
      navigation.navigate("MemberPage" as keyof RootStackParamList)
    }
  };

  const getItemStyle = (item: any) => {
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
            source={require('../../assets/Images/projectBlack.png')}
            style={[styles.icon, getItemStyle('projects') && styles.selectedIcon]}
          />
          <Text style={[styles.label, getItemStyle('projects') && styles.selectedLabel]}>
            Projects
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconItem, getItemStyle('dms')]}
          onPress={() => handlePress('dms')}
        >
          <Image
            source={require('../../assets/Images/messageBlack.png')}
            style={[styles.icon, getItemStyle('dms') && styles.selectedIcon]}
          />
          <Text style={[styles.label, getItemStyle('dms') && styles.selectedLabel]}>
            DMs
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconItem, getItemStyle('mention')]}
          onPress={() => handlePress('mention')}
        >
          <Image
            source={require('../../assets/Images/@black.png')}
            style={[styles.icon, getItemStyle('mention') && styles.selectedIcon]}
          />
          <Text style={[styles.label, getItemStyle('mention') && styles.selectedLabel]}>
            Mention
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconItem, getItemStyle('updates')]}
          onPress={() => handlePress('updates')}
        >
          <Image
            source={require('../../assets/Images/projectBlack.png')}
            style={[styles.icon, getItemStyle('updates') && styles.selectedIcon]}
          />
          <Text style={[styles.label, getItemStyle('updates') && styles.selectedLabel]}>
            Updates
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Footer;
