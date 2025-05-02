import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: Platform.OS === 'android' ? 40 : 20,
    paddingBottom: height * 0.025,
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#fff',
  },
  circle: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 40 : 20,
    left: width * 0.04,
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
    backgroundColor: '#D4E3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    color: '#6395EE',
    fontWeight: 'bold',
    fontSize: width * 0.045,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height * 0.012,
  },
  title: {
    fontSize: width * 0.065,
    lineHeight: width * 0.08,
    textAlign: 'center',
    fontFamily: 'Pattaya-Regular',
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
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
  searchPlaceholder: {
    fontSize: width * 0.04,
    color: '#888',
    flexShrink: 1,
  },
  searchInput: {
    fontSize: width * 0.04,
    color: '#000',
    flex: 1,
    paddingVertical: 0,
  },
});
