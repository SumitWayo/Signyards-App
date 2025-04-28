import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import style from './Loginpage.styles'; // Your custom styles

const LoginPage = () => {
  const phoneInputRef = useRef<TextInput>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputs = Array(4).fill(null).map(() => useRef<TextInput>(null));
  const [focusInput, setFocusInput] = useState<number | null>(null); // Track focused input

  useEffect(() => {
    setTimeout(() => {
      phoneInputRef.current?.focus();
    }, 500);
  }, []);

  const handleSendOtp = () => {
    if (phoneNumber.length === 10) {
      setIsOtpSent(true);
      setTimeout(() => {
        otpInputs[0].current?.focus();
      }, 500);
    } else {
      Alert.alert('Invalid Input', 'Please enter a valid 10-digit phone number');
    }
  };

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      otpInputs[index + 1].current?.focus();
    }
  };

  const handleResendOtp = () => {
    Alert.alert('OTP Resent', `A new OTP has been sent to +91 ${phoneNumber}`);
    setOtp(['', '', '', '']);
    setTimeout(() => {
      otpInputs[0].current?.focus();
    }, 500);
  };

  const handleVerifyOtp = () => {
    const otpEntered = otp.join('');
    if (otpEntered === '1234') {
      Alert.alert('Verification Successful', 'Your phone number has been verified');
    } else {
      Alert.alert('Verification Failed', 'The OTP you entered is incorrect');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
      <View style={style.container}>

        {!isOtpSent ? (
          <>
            {/* Welcome Section */}
            <View style={style.topContainer}>
              <Text style={style.title}>Hi, Welcome to Signyards</Text>
              <Text style={style.subtitle}>Login to your account</Text>

              {/* Phone Number Input */}
              <Text style={style.phoneHeading}>Enter your phone number</Text>

              <View style={style.phoneContainer}>
                <Text style={style.countryCode}>+91</Text>
                <TextInput
                  ref={phoneInputRef}
                  placeholder="Enter your phone number"
                  keyboardType="phone-pad"
                  style={style.input}
                  maxLength={10}
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  onFocus={() => setFocusInput(0)}
                />
              </View>

              <Text style={style.infoText}>
                Securing your personal information is our priority
              </Text>
            </View>

            {/* Continue Button */}
            <View style={style.bottomContainer}>
              <View style={style.bottomBorder} />
              <TouchableOpacity style={style.fullButton} onPress={handleSendOtp}>
                <Text style={style.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            {/* OTP Verification Section */}
            <View style={style.topContainer}>
              <Text style={style.title}>Verify Phone</Text>
              <Text style={style.subtitle}>Code has been sent to +91 {phoneNumber}</Text>

              <View style={style.otpContainer}>
                {otp.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={otpInputs[index]}
                    style={[style.otpInput, focusInput === index ? { borderColor: '#6395EE' } : {}]}
                    keyboardType="number-pad"
                    maxLength={1}
                    value={digit}
                    onChangeText={(text) => handleOtpChange(text, index)}
                    onFocus={() => setFocusInput(index)}
                  />
                ))}
              </View>

              {/* Resend OTP Button */}
              <TouchableOpacity style={[style.resendButton, { alignSelf: 'flex-start' }]} onPress={handleResendOtp}>
                <Text style={style.resendButtonText}>Resend Code</Text>
              </TouchableOpacity>
            </View>

            {/* Verify Button */}
            <View style={style.bottomContainer}>
              <View style={style.bottomBorder} />
              <TouchableOpacity style={style.fullButton} onPress={handleVerifyOtp}>
                <Text style={style.buttonText}>Verify</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

      </View>
    </ScrollView>
  );
};

export default LoginPage;
