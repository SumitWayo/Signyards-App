import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingHorizontal: width * 0.04, // ~20px
    marginTop: height * 0.12, // ~100px
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
    fontFamily: 'NotoSans',
    fontSize: width * 0.05,
    color: '#000',
    fontWeight: '700',
  },
  heading: {
    fontFamily: 'Poppins',
    fontWeight: '800',
    fontSize: width * 0.055, // ~22px
    lineHeight: width * 0.075, // ~30px
    textAlign: 'center',
    color: '#000',
    marginBottom: height * 0.02,
  },
 
  buttonContainer: {
    paddingHorizontal: width * 0.1,
    marginTop: height * 0.02,
    width: '100%',
  },
  
  personRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: height * 0.015,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderRadius: 8,
    marginBottom: height * 0.01,
  },
  role: {
    fontSize: 12,
    color: '#888', // light gray for subtle appearance
    marginTop: 2,
  },
  
  personInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: width * 0.11,
    height: width * 0.11,
    borderRadius: (width * 0.12) / 2,
    marginRight: width * 0.02,
  },
  name: {
    fontFamily: 'NotoSans',
    fontSize: width * 0.04,
    color: '#000',
    fontWeight: '700',
  },
  // Styling for the unread message count badge and time

  

  
  
});

export default styles;
