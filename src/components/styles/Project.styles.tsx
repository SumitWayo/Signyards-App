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
    paddingHorizontal: width * 0.04, // ~20px
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
  rightInfo: {
    height: width * 0.12, // same as avatar height
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    paddingVertical: 2,
  },
  
  unreadBadge: {
    backgroundColor: '#6395EE',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  
  unreadCount: {
    fontFamily: 'NotoSans',
    fontSize: 11,
    color: '#FFF',
    fontWeight: '700',
  },
  time: {
    fontFamily: 'NotoSans',
    fontSize: 11,
    color: '#777',
  },
  
  
});

export default styles;
