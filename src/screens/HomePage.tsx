import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Project';
import Project from '../components/Project';
import Dms from '../components/Dms';

const HomePage = () => {
  return (
    <View style={{    backgroundColor: '#f5f5f5',flex:1}}>
        <Header/>
        {/* <Project/> */}
        <Dms/>
        <Footer/>
    </View>
  );
};



export default HomePage;
