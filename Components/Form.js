import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Button, Separator } from 'react-native';
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

        <View style={styles.containerFaq}>

          <View style={styles.question}>
            <TouchableOpacity style={styles.button} onPress={openModal}>
              <Icon
              name="help-circle"
              style={styles.faq}
              /> 
              <Text style={styles.textFaq}>¿No se actualiza el saldo?</Text>
            </TouchableOpacity>
            <View style={styles.divider}></View>
          </View>

          <View style={styles.question}>
            <TouchableOpacity style={styles.button} onPress={openModal}>
              <Icon
              name="help-circle"
              style={styles.faq}
              /> 
              <Text style={styles.textFaq}>¿La transferencia tarda más de lo esperado?</Text>
            </TouchableOpacity>
            <View style={styles.divider}></View>
          </View>
          
          <View style={styles.question}>
            <TouchableOpacity style={styles.button} onPress={openModal}>
              <Icon
              name="help-circle"
              style={styles.faq}
              /> 
              <Text style={styles.textFaq}>¿No se pudo realizar tu retiro de dinero?</Text>
            </TouchableOpacity>
            <View style={styles.divider}></View>
          </View> 

        </View>

        <View style={styles.chatboxContainer}>
          <Icon
          name="chat-processing"
          style={styles.chatbox}/>
        </View>
      
      </View>

    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00C4B3',
      justifyContent: 'flex-end',
      width:'100%' ,
    },

    containerFaq: {
      flex: 0.3,
      // justifyContent: 'center',
      justifyContent: 'space-evenly',
      // justifyContent:'space-around',
      backgroundColor: '#F7F7F7',
      borderRadius: 8,
      marginLeft:16,
      marginRight: 16,
      marginBottom: 22,
      paddingTop: 8,
      paddingBottom: 8,
      // borderTopWidth: 16
    },

    question: {
      marginLeft:16,
      marginRight: 16,
      marginTop: 16,
    },
    
    button: {
      flexDirection: "row", 
      paddingRight: 15 
    },
  
    faq: {
      // position: 'relative',
      fontSize: 25,
      color: '#00BAA4',
      marginRight: 8
    },

    textFaq: {
      fontSize: 16,
      color: '#595959',
      marginBottom: 14,
      textAlign: 'left',
    },

    divider: {
      width:'100%',
      height:1,
      backgroundColor: '#D6D6D6',
      opacity: 5

    },

    chatboxContainer: {
      backgroundColor: '#595959'

    },

    chatbox: {
      fontSize:30,
      marginBottom: 44

    }
     
  });

  