import React, { useEffect, useMemo, useState } from 'react';
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
import { useNavigation, useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../src/types/navigation';
import { useProjectContext } from '../context/ProjectContext';
import styles from './styles/GroupPage.styles';
import ExtraOptionsPanel from '../components/ExtraOptionsPanel';

import {
  createTables,
  insertMessage,
  getMessagesByProjectId,
  Message as DBMessage,
} from '../utils/database';

type GroupPageRouteProp = RouteProp<RootStackParamList, 'GroupPage'>;
type GroupPageNavigationProp = NavigationProp<RootStackParamList, 'GroupPage'>;

type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
};

const GroupPage = () => {
  const navigation = useNavigation<GroupPageNavigationProp>();
  const route = useRoute<GroupPageRouteProp>();
  const { projectId } = route.params;
  const { projects } = useProjectContext();

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const labels = ['Electricals', 'Plywood home', 'Sign board jabalpur'];

  const projectName = useMemo(() => {
    const project = projects.find((p) => p.id === projectId);
    return project ? project.name : 'Unknown Project';
  }, [projects, projectId]);

  useEffect(() => {
    const loadMessages = async () => {
      await createTables();
      const storedMessages: DBMessage[] = await getMessagesByProjectId(projectId);
      setMessages(storedMessages);
    };

    loadMessages();
  }, [projectId]);

  const sendMessage = async () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: input,
        isUser: true,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, newMessage]);
      setInput('');

      try {
        await insertMessage(
          newMessage.id,
          projectId,
          newMessage.text,
          newMessage.isUser,
          newMessage.timestamp
        );
      } catch (error) {
        console.error('Failed to save message:', error);
      }
    }
  };

  const handlePlusPress = () => {
    setShowOptions((prev) => !prev);
    Keyboard.dismiss();
  };

  const navigateToSubProjectPage = () => {
    navigation.navigate('SubProjectPage', { projectId });
  };

  const navigateToMediaList = () => {
    navigation.navigate('ProjectInfoPage', { projectId });
  };

  const navigateToMemberPage = () => {
    navigation.navigate('MemberPage', { projectId });
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
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
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
              <Text style={styles.title}>{projectName}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToMemberPage}>
              <Image
                source={require('../../assets/icons/addpeople.png')}
                style={styles.addIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToSubProjectPage}>
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