import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between',
    paddingVertical: height * 0.05, // ~40px on standard phones
  },
  container: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingHorizontal: width * 0.05, // ~20px
    marginTop: height * 0.12, // ~100px
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
  paragraph: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: width * 0.035, // ~14px
    lineHeight: width * 0.05, // ~21px
    textAlign: 'center',
    color: '#333',
    paddingHorizontal: width * 0.025, // ~10px
  },
  buttonContainer: {
    paddingHorizontal: width * 0.1,
    marginTop: height * 0.02,
    width: '100%',
  },
  fullButton: {
    width: '100%',
    height: height * 0.07, // ~56px
    borderRadius: 12,
    backgroundColor: '#6395EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'NotoSans-SemiBold',
    fontWeight: Platform.OS === 'ios' ? '600' : '700',
    fontSize: width * 0.045, // ~16px
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
