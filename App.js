import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import OurKnowledges from './src/components/ourKnowledges';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }, styles.container}>
      <OurKnowledges />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#534F50'
  },
});
