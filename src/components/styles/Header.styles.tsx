
import { StyleSheet, Dimensions,Platform } from 'react-native';

const { height, width } = Dimensions.get('window');
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default  StyleSheet.create({ container: {
    width: '100%',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
    
    paddingBottom: 20,
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#fff',
  },
  circle: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 40 : 20,
    left: 16,
    width: screenWidth * 0.1,
    height: screenWidth * 0.1,
    borderRadius: screenWidth * 0.05,
    backgroundColor: '#D4E3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    color: '#6395EE',
    fontWeight: 'bold',
    fontSize: screenWidth * 0.04,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: screenWidth * 0.065,
    lineHeight: screenWidth * 0.08,
    textAlign: 'center',
    fontFamily: 'Pattaya-Regular',
    fontWeight: '400',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth - 32,
    height: screenHeight * 0.07,
    marginTop: 12,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  searchIcon: {
    width: screenWidth * 0.05,
    height: screenWidth * 0.05,
    marginRight: 10,
    resizeMode: 'contain',
  },
  searchPlaceholder: {
    fontSize: screenWidth * 0.04,
    color: '#888',
    flexShrink: 1,
  },
  searchInput: {
    fontSize: screenWidth * 0.04,
    color: '#000',
    flex: 1,
    paddingVertical: 0, // optional, to better align text vertically
  },
});