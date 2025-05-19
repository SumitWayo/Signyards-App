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
});
