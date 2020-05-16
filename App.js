import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './Components/Form';
// import { MaterialCommuntyIcons as Icon } from 'react-native-vector-icons'
 
export default function App() {
  return (
   

    <View style={styles.container}>
       <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
