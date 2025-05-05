import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  footer: {
    width: '100%',
    height: height * 0.12, // still responsive height
    position: 'absolute',
    top: 815, // keeping your original positioning
    paddingTop: height * 0.02,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderTopColor: '#E6E6E6',
  },
  footerTitle: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: width * 0.05,
  },
  iconItem: {
    alignItems: 'center',
  },
  icon: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
  },
  label: {
    marginTop: height * 0.005,
    fontSize: width * 0.03,
  },
  selectedItem: {
    backgroundColor: 'white',
  },
  selectedIcon: {
    tintColor: '#6395EE',
  },
  selectedLabel: {
    color: '#6395EE',
  },
  bottomBorder: {
    width: '100%',
    height: 1,
    backgroundColor: '#eeeeee',
    marginBottom: height * 0.025,
  },
});
