import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import style from "./LandingPage.styles"


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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'space-between',
//   },
//   topContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: width * 0.05,
//   },
//   signyardsText: {
//     fontFamily: 'Pattaya-Regular',
//     fontSize: width * 0.12,
//     fontWeight: '400',
//     textAlign: 'center',
//     color: 'black',
//     marginBottom: height * 0.03,
//   },
//   image: {
//     width: width * 0.8,
//     height: height * 0.3,
//     marginBottom: height * 0.03,
//   },
//   subtitleText: {
//     fontFamily: 'NotoSans-Bold',
//     fontWeight: '700',
//     fontSize: width * 0.06,
//     textAlign: 'center',
//     color: 'black',
//     marginBottom: height * 0.02,
//   },
//   descriptionText: {
//     fontFamily: 'NotoSans-Regular',
//     fontWeight: '400',
//     fontSize: width * 0.04,
//     textAlign: 'center',
//     color: 'black',
//     paddingHorizontal: width * 0.04,
//   },
//   bottomContainer: {
//     paddingHorizontal: width * 0.05,
//     paddingBottom: height * 0.04,
//     backgroundColor: 'white',
//   },
//   bottomBorder: {
//     width: '100%',
//     height: 1,
//     backgroundColor: '#eeeeee',
//     marginBottom: height * 0.02,
//   },
//   fullButton: {
//     width: '100%',
//     height: 56,
//     borderRadius: 12,
//     backgroundColor: '#6395EE',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     fontFamily: 'NotoSans-SemiBold',
//     fontWeight: '600',
//     fontSize: width * 0.045,
//     color: 'white',
//     textAlign: 'center',
//   },
// }
// );

export default LandingPage;
