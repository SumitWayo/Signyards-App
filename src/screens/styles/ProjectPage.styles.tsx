import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default StyleSheet.create({
        safeArea: {
          flex: 1,
          backgroundColor: '#f5f5f5',
        },
        header: {
          width: '100%',
          paddingTop: Platform.OS === 'android' ? screenHeight * 0.06 : screenHeight * 0.035,
          paddingBottom: screenHeight * 0.015,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        },
        arrowContainer: {
          position: 'absolute',
          left: screenWidth * 0.04,
          top: Platform.OS === 'android' ? screenHeight * 0.06 : screenHeight * 0.035,
          zIndex: 2,
        },
        arrowIcon: {
          width: screenWidth * 0.06,
          height: screenWidth * 0.06,
          resizeMode: 'contain',
        },
        title: {
          fontSize: screenWidth * 0.05, // ~18–20px
          fontFamily: 'Pattaya-Regular',
          color: '#000',
        },
        scrollContent: {
          padding: screenWidth * 0.04,
        },
        photoSection: {
          backgroundColor: '#fff',
          borderRadius: screenWidth * 0.03,
          padding: screenWidth * 0.04,
          marginTop: screenHeight * 0.02,
        },
        photoRow: {
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: screenHeight * 0.02,
        },
        circle: {
          width: screenWidth * 0.18,
          height: screenWidth * 0.18,
          borderRadius: screenWidth * 0.09,
          backgroundColor: '#EEEEEE',
          justifyContent: 'center',
          alignItems: 'center',
        },
        cameraIcon: {
          width: screenWidth * 0.06,
          height: screenWidth * 0.06,
          resizeMode: 'contain',
        },
        addPhotoText: {
          fontSize: screenWidth * 0.045,
          marginLeft: screenWidth * 0.03,
          color: '#000',
          fontWeight: '700',
        },
        heading: {
          fontSize: screenWidth * 0.045,
          fontWeight: '400',
          marginBottom: screenHeight * 0.01,
          marginLeft: screenWidth * 0.02,
          color: '#000',
        },
        searchContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: screenWidth * 0.02,
          paddingHorizontal: screenWidth * 0.03,
          height: screenHeight * 0.06,
          backgroundColor: '#fff',
        },
        searchInput: {
          fontSize: screenWidth * 0.04,
          color: '#000',
          flex: 1,
        },
      });