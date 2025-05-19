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

type GroupPageNavigationProp = NavigationProp<RootStackParamList, 'GroupPage'>;

const GroupPage = () => {
  const navigation = useNavigation<GroupPageNavigationProp>();

  const labels = ['Electricals', 'Plywood home', 'Sign board jabalpur'];

  type Message = {
    id: string;
    text: string;
    isUser: boolean;
  };

  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hi, how can I help you?', isUser: false },
    { id: '2', text: 'I want to inquire about plywood sheets.', isUser: true },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: input, isUser: true }]);
      setInput('');
    }
  };

  const handlePlusPress = () => {
    navigation.navigate('SubProjectPage');
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
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* Top row: Back Arrow, Center Content, Add Icon */}
          <View style={styles.topRow}>
            <TouchableOpacity style={styles.backButton}>
              <Image
                source={require('../../assets/Images/back.png')}
                style={styles.arrowImage}
              />
            </TouchableOpacity>

            <View style={styles.centerContent}>
              <Image
                source={require('../../assets/Images/man3.jpeg')}
                style={styles.userImage}
              />
              <Text style={styles.title}>Pune Interior</Text>
            </View>

            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/addpeople.png')}
                style={styles.addIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePlusPress}>
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

          {/* Chat Messages */}
          <FlatList
            data={messages}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.chatList}
          />
        </View>
      </TouchableWithoutFeedback>

      {/* Input Box */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={80}
        style={styles.inputContainer}
      >
        <TextInput
          placeholder="Type a message..."
          value={input}
          onChangeText={setInput}
          onSubmitEditing={sendMessage}
          style={styles.textInput}
          returnKeyType="send"
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default GroupPage;
