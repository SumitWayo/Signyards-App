import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
export default StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    padding: 16,
    paddingTop: 20,
  },
  infoBox: {
    width: '100%',
    height: 40,
    borderRadius: 12,
    borderWidth: 0.2,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  leftText: {
    fontFamily: 'NotoSans',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 8,
  },
  arrowIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
 
});