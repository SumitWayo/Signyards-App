import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const GroupPage = () => {
  const labels = ['Electricals', 'Plywood home', 'Sign board jabalpur'];

  const [messages, setMessages] = useState([
    { id: '1', text: 'Hi, how can I help you?', isUser: false },
    { id: '2', text: 'I want to inquire about plywood sheets.', isUser: true },
  ]);
type Message = {
  id: string;
  text: string;
  isUser: boolean;
};
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: input, isUser: true }]);
      setInput('');
    }
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
                source={require('../../assets/Images/add.png')}
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

const styles = StyleSheet.create({
  safeArea: {
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

export default GroupPage;
