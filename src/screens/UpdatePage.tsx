import React from 'react';
import { View, Image, Text } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './styles/MentionPage.styles';
import NoMessagesPlaceholder from '../components/NoMessagePlaceholder';

const UpdatePage = () => {


  return (
    <View style={{ backgroundColor: '#f5f5f5', flex: 1 }}>
      <Header title="Fitouts" showSearch={false} />
<View style={{paddingTop:212}}>
      <NoMessagesPlaceholder
  heading="No Project Updates Yet"
  paragraph ={`All project-wide announcements and key \n updates from your team will appear here.`}
/>
</View>

      <Footer />
    </View>
  );
};

export default UpdatePage;
