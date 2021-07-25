import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './_src/_componetes/Header';
import Content from './_src/_componetes/Content';
import Footer from './_src/_componetes/Footer';
import {styles} from './_src/Styles/Style'

export default function App() {
  return (
    <View style={styles.formato}>
     <Header style={styles.viewHeader} />
     <Content style={styles.viewContent} />
     <Footer style={styles.viewFooter} />
      <StatusBar style="auto" />
    </View>
  );
}

