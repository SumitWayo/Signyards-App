import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.05,
    justifyContent: 'space-between',
  },
  topContainer: {
    marginTop: height * 0.15,  // Reduced top margin for better alignment
  },
  title: {
    fontSize: width * 0.075,  // Slightly larger font for the title
    fontWeight: 'bold',
    color: '#2E2E2E',
    marginBottom: height * 0.01,
  },
  subtitle: {
    fontSize: width * 0.05,  // Slightly larger font for subtitle
    color: '#2E2E2E',
    marginBottom: height * 0.035,
  },
  phoneHeading: {
    fontSize: width * 0.045,
    color: '#2E2E2E',
    marginBottom: height * 0.015,
  },
 phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: width * 0.03,
    marginBottom: height * 0.015, // 🔥 decreased from 0.025 to 0.015
    height: height * 0.065,
  },
  countryCode: {
    fontSize: width * 0.045,
    marginRight: width * 0.03,
  },
  input: {
    flex: 1,
    fontSize: width * 0.045,  // Increased font size for readability
    paddingVertical: Platform.OS === 'ios' ? height * 0.015 : 0,
    borderRadius: 8,
    paddingHorizontal: width * 0.03,
    backgroundColor: '#f7f7f7', // Subtle background for input
    borderColor: 'transparent',  // Remove the border if not needed
    borderWidth: 0,  // Ensure there's no extra border
  },
  
  infoText: {
    fontSize: width * 0.035,
    color: '#888',
    marginTop: height * 0.005,
  },
  bottomContainer: {
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.04,
    backgroundColor: 'white',
    justifyContent: 'flex-end', // Ensure content is aligned to the bottom if needed
  },
  
  fullButton: {
    width: '100%',
    height: height * 0.07,
    borderRadius: 12,
    backgroundColor: '#6395EE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.02, // Ensure there's spacing between the button and other elements
  },
  
  buttonText: {
    fontFamily: 'NotoSans-SemiBold',
    fontWeight: '600',
    fontSize: width * 0.05,  // Larger font for better emphasis
    color: 'white',
    textAlign: 'center',
  },
  
  bottomBorder: {
    width: '100%',
    height: 1,
    backgroundColor: '#eeeeee',
    marginBottom: height * 0.025,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 20,  // Extra margin below OTP fields
  },
  otpInput: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#f7f7f7',  // Subtle background for OTP fields
  },
  resendButton: {
    marginTop: 20,
    alignItems: 'flex-start',  // Align resend button to the left
  },
  resendButtonText: {
    color: '#0066cc',
    fontSize: 16,
    fontWeight: '600',  // Bold text for resend button
    textDecorationLine: 'underline',
  },
});
