import { StyleSheet, Dimensions, Platform } from 'react-native';

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
    fontSize: screenWidth * 0.05,
    fontFamily: 'Pattaya-Regular',
    color: '#000',
  },

  scrollContent: {
    paddingHorizontal: screenWidth * 0.04,
    paddingBottom: screenHeight * 0.03,
  },

  heading: {
    fontSize: screenWidth * 0.045,
    fontWeight: '400',
    marginTop: screenHeight * 0.02,
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
    marginBottom: screenHeight * 0.015,
  },

  searchInput: {
    fontSize: screenWidth * 0.04,
    color: '#000',
    flex: 1,
  },

  icon: {
    width: screenWidth * 0.06,
    height: screenWidth * 0.06,
    marginLeft: screenWidth * 0.02,
    tintColor: '#888', // optional: color tint for the icon
  },

  bottomContainer: {
    paddingHorizontal: screenWidth * 0.05,
    paddingBottom: screenWidth * 0.04,
    backgroundColor: 'white',
    justifyContent: 'flex-end', // Ensure content is aligned to the bottom if needed
  }, 

  fullButton: {
    width: '100%',
    height: screenHeight * 0.07,
    borderRadius: 12,
    backgroundColor: '#6395EE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: screenHeight * 0.02, // Ensure there's spacing between the button and other elements
  },
  
  buttonText: {
    fontFamily: 'NotoSans-SemiBold',
    fontWeight: '600',
    fontSize: screenWidth * 0.05,  // Larger font for better emphasis
    color: 'white',
    textAlign: 'center',
  },
  
  bottomBorder: {
    width: '100%',
    height: 1,
    backgroundColor: '#eeeeee',
    marginBottom: screenHeight * 0.025,
  },
  
});
