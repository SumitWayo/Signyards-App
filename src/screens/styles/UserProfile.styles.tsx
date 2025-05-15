import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    padding: screenWidth * 0.04,
    paddingBottom: screenHeight * 0.1,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: screenHeight * 0.05,
    marginBottom: screenHeight * 0.015,
  },
  circle: {
    width: screenWidth * 0.25,
    height: screenWidth * 0.25,
    backgroundColor: '#EBF2FF',
    borderRadius: screenWidth * 0.125,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  smallBox: {
    width: screenWidth * 0.08,
    height: screenWidth * 0.08,
    position: 'absolute',
    bottom: 0,
    right: screenWidth / 2 - screenWidth * 0.125 - screenWidth * 0.04,
    borderRadius: screenWidth * 0.04,
    backgroundColor: '#6395EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallBoxImage: {
    width: '70%',
    height: '70%',
  },
  phoneNumber: {
    textAlign: 'center',
    fontSize: screenWidth * 0.05,
    fontWeight: '500',
    marginBottom: screenHeight * 0.03,
    color: '#000',
  },
  heading: {
    fontSize: screenWidth * 0.045,
    fontWeight: '400',
    marginBottom: screenHeight * 0.01,
    marginLeft: screenWidth * 0.01,
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
    marginBottom: screenHeight * 0.02,
  },
  searchInput: {
    fontSize: screenWidth * 0.04,
    color: '#000',
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: screenHeight * 0.015,
    left: screenWidth * 0.05,
    right: screenWidth * 0.05,
  },
});

export default styles;
