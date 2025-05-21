import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  
} from 'react-native';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../src/types/navigation';
import styles from './styles/GroupPage.styles';
import ExtraOptionsPanel from '../components/ExtraOptionsPanel';

type GroupPageNavigationProp = NavigationProp<RootStackParamList, 'GroupPage'>;

type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
};

const GroupPage = () => {
  const navigation = useNavigation<GroupPageNavigationProp>();

  const labels = ['Electricals', 'Plywood home', 'Sign board jabalpur'];

  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hi, how can I help you?', isUser: false, timestamp: '09:00 AM' },
    { id: '2', text: 'I want to inquire about plywood sheets.', isUser: true, timestamp: '09:01 AM' },
  ]);
  const [input, setInput] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const sendMessage = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: input,
        isUser: true,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  const handlePlusPress = () => {
    setShowOptions((prev) => !prev);
    Keyboard.dismiss();
  };

  const navigateToSubProjectPage = () => {
    navigation.navigate('SubProjectPage');
  };
   const navigateToMediaList = () => {
    navigation.navigate('ProjectInfoPage');
  };
   const navigateToMemberPage = () => {
    navigation.navigate('MemberPage');
  };

  const renderItem = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageBubble,
        {
          alignSelf: item.isUser ? 'flex-end' : 'flex-start',
          backgroundColor: item.isUser ? '#E9F6EF' : '#EEEEEE',
        },
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
      <View style={styles.metaContainer}>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
        {item.isUser && (
          <Image
            source={require('../../assets/icons/doubletick.png')}
            style={styles.tickIcon}
          />
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* Top row */}
          <View style={styles.topRow}>
            <TouchableOpacity style={styles.backButton}              onPress={() => navigation.goBack()}>
              <Image 
              
                source={require('../../assets/icons/backarrow.png')}
                style={styles.arrowImage}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.centerContent} onPress={navigateToMediaList}>
              <Image
                source={require('../../assets/Images/man3.jpeg')}
                style={styles.userImage}
              />
              <Text style={styles.title}>Pune Interior</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToMemberPage}>
              <Image
                source={require('../../assets/icons/addpeople.png')}
                style={styles.addIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToSubProjectPage} >
              <Image
                source={require('../../assets/icons/plus.png')}
                style={styles.addIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Labels */}
          <View style={styles.labelContainer}>
            {labels.map((label, index) => (
              <View
                key={index}
                style={[
                  styles.labelBox,
                  { backgroundColor: index % 2 === 0 ? '#fff' : '#000' },
                ]}
              >
                <Text
                  style={[
                    styles.labelText,
                    { color: index % 2 === 0 ? '#000' : '#fff' },
                  ]}
                >
                  {label}
                </Text>
              </View>
            ))}
          </View>

          {/* Chat */}
          <FlatList
            data={messages}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.chatList}
          />

          {/* Options Section */}
          {showOptions && <ExtraOptionsPanel />}
        </View>
      </TouchableWithoutFeedback>

      {/* Input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={80}
        style={styles.inputContainer}
      >
        <View style={styles.inputWrapper}>
          <TouchableOpacity onPress={handlePlusPress}>
            <Image
              source={
                showOptions
                  ? require('../../assets/icons/keyboard.png')
                  : require('../../assets/icons/chatplus.png')
              }
              style={styles.icon}
            />
          </TouchableOpacity>

          <TextInput
            placeholder="Type a message..."
            value={input}
            onChangeText={setInput}
            onSubmitEditing={sendMessage}
            style={styles.textInput}
            returnKeyType="send"
          />

          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/chatcamera.png')}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/audiochat.png')}
              style={styles.icontwo}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default GroupPage;   