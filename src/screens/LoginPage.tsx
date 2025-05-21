import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import style from './styles/Loginpage.styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../src/types/navigation';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoginPage'>;

const LoginPage = () => {
  const phoneInputRef = useRef<TextInput>(null);
  const otpInputs = Array(4).fill(null).map(() => useRef<TextInput>(null));
  const navigation = useNavigation<NavigationProp>();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [focusInput, setFocusInput] = useState<number | null>(null);

  const [phoneError, setPhoneError] = useState(''); // ✅ NEW
  const [otpError, setOtpError] = useState(''); // ✅ NEW
  const [timer, setTimer] = useState(60); // ✅ NEW

  const authKey = '431765AxRg7j4aVz567052b5bP1';
  const templateId = '6703c95ad6fc05465d44e512';

  useEffect(() => {
    phoneInputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (isOtpSent && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isOtpSent, timer]);

  const handleSendOtp = async () => {
    if (phoneNumber.length !== 10) {
      setPhoneError('Please enter a valid 10-digit phone number');
      return;
    }
    setPhoneError('');

    try {
      const url = `https://control.msg91.com/api/v5/otp?otp_expiry=1&template_id=${templateId}&mobile=91${phoneNumber}&authkey=${authKey}&realTimeResponse=1`;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (response.ok && data.type === 'success') {
        setIsOtpSent(true);
        setOtp(['', '', '', '']);
        setTimer(60); // ✅ Reset timer
        setTimeout(() => {
          otpInputs[0].current?.focus();
        }, 500);
      } else {
        setPhoneError(data.message || 'Failed to send OTP');
      }
    } catch (error) {
      setPhoneError('Something went wrong while sending OTP');
    }
  };

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    setOtpError('');

    if (text && index < 3) {
      otpInputs[index + 1].current?.focus();
    }
  };

  const handleResendOtp = () => {
    handleSendOtp(); // Reuse send OTP
  };

  const handleVerifyOtp = async () => {
    const otpEntered = otp.join('');
    if (otpEntered.length < 4) {
      setOtpError('Please enter the complete 4-digit OTP');
      return;
    }
    setOtpError('');

    try {
      const verifyUrl = `https://control.msg91.com/api/v5/otp/verify?otp=${otpEntered}&mobile=91${phoneNumber}&authkey=${authKey}`;

      const response = await fetch(verifyUrl, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (response.ok && data.type === 'success') {
        navigation.navigate('HomePage');
      } else {
        setOtpError(data.message || 'OTP did not match');
      }
    } catch (error) {
      setOtpError('Error verifying OTP');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
      <View style={style.container}>
        {!isOtpSent ? (
          <>
            <View style={style.topContainer}>
              <Text style={style.title}>Hi, Welcome to Signyards</Text>
              <Text style={style.subtitle}>Login to your account</Text>

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
              {phoneError ? <Text style={{ color: 'red', marginTop: 4 }}>{phoneError}</Text> : null}

              <Text style={style.infoText}>
                Securing your personal information is our priority
              </Text>
            </View>

            <View style={style.bottomContainer}>
              <View style={style.bottomBorder} />
              <TouchableOpacity style={style.fullButton} onPress={handleSendOtp}>
                <Text style={style.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <View style={style.topContainer}>
              <Text style={style.title}>Verify Phone</Text>
              <Text style={style.subtitle}>Code has been sent to +91 {phoneNumber}</Text>

              <View style={style.otpContainer}>
                {otp.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={otpInputs[index]}
                    style={[
                      style.otpInput,
                      focusInput === index ? { borderColor: '#6395EE' } : {},
                    ]}
                    keyboardType="number-pad"
                    maxLength={1}
                    value={digit}
                    onChangeText={(text) => handleOtpChange(text, index)}
                    onFocus={() => setFocusInput(index)}
                  />
                ))}
              </View>
              {otpError ? <Text style={{ color: 'red', marginTop: 4 }}>{otpError}</Text> : null}

              {timer > 0 ? (
                <Text style={{ marginTop: 10, color: '#666' }}>
                  Resend OTP in {timer} sec
                </Text>
              ) : (
                <TouchableOpacity
                  style={[style.resendButton, { alignSelf: 'flex-start' }]}
                  onPress={handleResendOtp}
                >
                  <Text style={style.resendButtonText}>Resend Code</Text>
                </TouchableOpacity>
              )}
            </View>

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
