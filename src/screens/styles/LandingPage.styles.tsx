import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
      },
      topContainer: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,

      },
      signyardsText: {
        fontFamily: 'Pattaya-Regular',
        fontSize: width * 0.12,
        fontWeight: '400',
        textAlign: 'center',
        color: 'black',
        marginBottom: height * 0.03,
      },
      image: {
        width: width * 0.8,
        height: height * 0.3,
        marginBottom: height * 0.03,
      },
      subtitleText: {
        fontFamily: 'NotoSans-Bold',
        fontWeight: '700',
        fontSize: width * 0.06,
        textAlign: 'center',
        color: 'black',
        marginBottom: height * 0.02,
      },
      descriptionText: {
        fontFamily: 'NotoSans-Regular',
        fontWeight: '400',
        fontSize: width * 0.04,
        textAlign: 'center',
        color: 'black',
        paddingHorizontal: width * 0.04,
      },
      bottomContainer: {
        paddingHorizontal: width * 0.05,
        paddingBottom: height * 0.04,
        backgroundColor: 'white',
      },
      bottomBorder: {
        width: '100%',
        height: 1,
        backgroundColor: '#eeeeee',
        marginBottom: height * 0.025,
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
      },})