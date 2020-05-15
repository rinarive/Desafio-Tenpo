import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProgressBar from './Components/ProgressBar';

export default function App() {
  return (
    <View style={styles.container}>
      <ProgressBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
  },
});
