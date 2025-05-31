import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../src/types/navigation';
import { useNavigation } from '@react-navigation/native';
import style from "./styles/LandingPage.styles"

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LandingPage'>;
const { height, width } = Dimensions.get('window');

const LandingPage = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={style.container}>
      {/* Centered top content */}
      <View style={style.topContainer}>
        <Text style={style.signyardsText}>Signyards</Text>

        <Image 
          source={require('../../assets/Images/landingImage.png')}
          style={style.image}
          resizeMode="contain"
        />

        <Text style={style.subtitleText}>
        Let’s start the process!
        
        </Text>

        <Text style={style.descriptionText}>
          Create groups. Add team members, chat with{'\n'}
          them and manage groups within groups.
        </Text>
      </View>

      {/* Bottom fixed section */}
      <View style={style.bottomContainer}>
        <View style={style.bottomBorder} />
        <TouchableOpacity style={style.fullButton}
          onPress={() => navigation.navigate("LoginPage")}
          >
          <Text style={style.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default LandingPage;
