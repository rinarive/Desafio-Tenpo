import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Button } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'


export default function Form() {
    const [modal, setModal]= useState (false)

    const openModal = () => {
        console.log("probando")
        setModal(true)
    }
    
    return (

      <View style={styles.container}>

        <Modal visible={modal}
        animationType="slide">
            <Text>hola soy el modal</Text>
            <Icon  
            name="close"
            onPress={()=>setModal(false)}/>

        </Modal>

        <View style={styles.question}>
          <TouchableOpacity style={styles.button} onPress={openModal}>
            <Icon
            name="help-circle"
            style={styles.faq}
            /> 
            <Text>¿No se actualiza el saldo?</Text>
          </TouchableOpacity>
        </View>
        

            <Icon
            name="help-circle"
            style={styles.faq}
            /> 
            <Text>¿La transferencia tarda más de lo esperado?</Text>
         
            <Icon
            name="help-circle"
            style={styles.faq}
            /> 
            <Text>¿Por qué fallo mi retiro?</Text>
        
      </View>

    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    faq:{
      fontSize:30
    },

    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
      },
      button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      }
  });

  