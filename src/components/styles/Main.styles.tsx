import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
      backgroundColor: '#f5f5f5',
 
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  container: {
    backgroundColor: '#f5f5f5',

    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 100,
  },
  heading: {
    fontFamily: 'Poppins',
    fontWeight: '800',
    fontSize: 22,
    lineHeight: 30,
    textAlign: 'center',
    color: '#000',
    marginBottom: 16,
  },
  paragraph: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    color: '#333',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    paddingHorizontal: width * 0.1,
    marginTop: 16, // space below the paragraph
    width: '100%',
  },
  
  fullButton: {
    width: '100%',
    height: 56,
    borderRadius: 12,
    backgroundColor: '#6395EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'NotoSans-SemiBold',
    fontWeight: '600',
    fontSize: width * 0.045,
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
