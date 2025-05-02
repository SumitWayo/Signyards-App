import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import style from "./styles/LandingPage.styles"


const { height, width } = Dimensions.get('window');

const LandingPage = () => {
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
        <TouchableOpacity style={style.fullButton}>
          <Text style={style.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default LandingPage;
