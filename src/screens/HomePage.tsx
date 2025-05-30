import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';
import Dms from '../components/Dms';

import { useFooter } from '../context/FooterContext';
import MentionPage from './MentionPage';
import UpdatePage from './UpdatePage';

const HomePage = () => {
  const { selectedItem } = useFooter();

  // Conditionally render component based on selectedItem
  const renderContent = () => {
    switch (selectedItem) {
      case 'projects':
        return <Project />;
      case 'dms':
        return <Dms />;
      case 'mention':
        return <MentionPage />;
      case 'updates':
        return <UpdatePage />;
      default:
        return null;
    }
  };

  return (
    <View style={{ backgroundColor: '#f5f5f5', flex: 1 }}>
      <Header />
      <View style={{ flex: 1 }}>
        {renderContent()}
      </View>
      <Footer />
    </View>
  );
};

export default HomePage;