import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: Platform.OS === 'android' ? 40 : 40,
    paddingBottom: height * 0.025,  // Default padding bottom
    backgroundColor: '#fff',
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    justifyContent: 'flex-start',
    marginBottom: height * 0.01,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.92,
    height: height * 0.07,
    marginTop: height * 0.015,
    marginHorizontal: width * 0.04,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: width * 0.03,
    backgroundColor: '#fff',
  },

  searchIcon: {
    width: width * 0.05,
    height: width * 0.05,
    marginRight: width * 0.025,
    resizeMode: 'contain',
  },

  searchInput: {
    fontSize: width * 0.04,
    color: '#000',
    flex: 1,
    paddingVertical: 0,
  },
  
  arrowContainer: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 40 : 40,
    left: 16,
    zIndex: 1,
  },

  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 20,
    paddingBottom: 10,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.015,
  },

  arrowWrapper: {
    width: screenWidth * 0.06,
    height: screenWidth * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
  },

  arrowIcon: {
    width: screenWidth * 0.06,
    height: screenWidth * 0.06,
    resizeMode: 'contain',
  },

  title: {
    fontSize: width * 0.050,
    textAlign: 'center',
    fontWeight: Platform.OS === 'ios' ? '500' : '500',
  },
});
