import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default StyleSheet.create({ safeArea: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 40 : 20,
    paddingHorizontal: width * 0.04,
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    paddingRight: width * 0.03,
  },
  arrowImage: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: 'contain',
  },
  centerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  userImage: {
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: (width * 0.08) / 2,
    marginRight: width * 0.03,
  },
  title: {
    fontSize: width * 0.05,
    fontFamily: 'NatoSans',
    fontWeight: '700',
    color: '#000',
  },
  addIcon: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
  },
  labelContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
  },
  labelBox: {
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginRight: width * 0.02,
    marginBottom: height * 0.02,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  labelText: {
    fontSize: 14,
    fontWeight: '600',
  },
  chatList: {
    paddingBottom: 100,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  messageText: {
    fontSize: 14,
    color: '#000',
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  textInput: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
  },
});