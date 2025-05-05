import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    bottomContainer: {
        paddingHorizontal: width * 0.05, // ~20px
        paddingBottom: height * 0.04,   // ~32px
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
      },
      fullButton: {
        width: '100%',
        height: height * 0.07, // ~56px
        borderRadius: width * 0.03, // ~12px
        backgroundColor: '#6395EE',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: height * 0.02, // ~16px
      },
      buttonText: {
        fontFamily: 'NotoSans-SemiBold',
        fontWeight: Platform.OS === 'ios' ? '600' : '700',
        fontSize: width * 0.045, // ~16px
        color: '#fff',
        textAlign: 'center',
      },
      bottomBorder: {
        width: '100%',
        height: 1,
        backgroundColor: '#eee',
        marginBottom: height * 0.025, // ~20px
      },
    });