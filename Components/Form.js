import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Button, TextInput, Image, Alert } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons'



export default function Form() {
    const [modal, setModal] = useState (false)

    const openModal = () => {
        console.log("probando")
        setModal(true)
    }


    
    return (

      <View style={styles.container}>
        
        <Modal visible={modal}
        animationType="slide"
        transparent={true}>

          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Icon  
              name="close"
              style={styles.closeIcon}
              onPress={()=>setModal(false)}/>

              <View style={styles.textForm}>
               <Text style={styles.textTitle}>Envía un reclamo:</Text>
               <Text>No se actualiza mi saldo</Text>
              </View>
              
              <TextInput 
              multiline  
              style={styles.textInput}
              placeholder='Explícanos a detalle la situación'/>

             <View style={styles.containerBtn}>
                <Button
                color={'#00BAA4'}
                style={styles.btnSend}
                title='Enviar'
                onPress={()=>{
                  Alert.alert('¡Tu reclamo ha sido enviado con éxito!',
                  'Solucionaremos el problema lo más pronto posible')
                  setModal(false)}}/> 
             </View>
                        
            </View>  
          </View>

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
          </View> 

        </View>

        <View style={styles.chatboxContainer}>
          <TouchableOpacity>
            <Image
            source={require('../assets/chatbox.png')}
            style={styles.chatbox}/>
          </TouchableOpacity>
        </View> 
      
      </View>

    );
  }
  
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#F1F1F1',
      justifyContent: 'flex-end',
      width:'100%' ,
      alignItems: "center",

    },

    containerFaq: {      
      justifyContent: 'space-evenly',
      backgroundColor: '#F7F7F7',
      borderRadius: 8,
      width: "92%",
      marginTop:"25%",
      paddingTop: "0.5%",
      paddingBottom: "5%",
     
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
      fontSize: 25,
      color: '#00BAA4',
      marginRight: 8
    },
    textTitle:{
      fontFamily:'Gotham-Bold',
      fontSize: 18,
    },

    textFaq: {
      fontSize: 18,
      color: '#595959',
      marginBottom: 14,
      textAlign: 'left',
      color: '#595959',
      fontFamily: 'Gotham-Book',
    },

    divider: {
      width:'100%',
      height:1,
      backgroundColor: '#D6D6D6',
      opacity: 5
    },

    chatboxContainer: {  
      marginRight: 16,
      alignSelf: 'flex-end',
    },

    chatbox: {
      height:50,
      width: 50,
      marginBottom: 10,
    },
    
    //____________MODAL STYLES____________

    centeredView: {
      backgroundColor: '#aaaa',
      flex: 1,
      justifyContent: "center",
      alignItems: "center",   
    }, 

    modalView: {
      paddingHorizontal: 24,
      backgroundColor: 'white',
      borderRadius: 10,
      width: 312,
      height:470,
    },

    closeIcon: {
      alignSelf: 'flex-end',
      fontSize: 30,
      marginTop: 26,
      color: '#595959'
    },

    textForm: {
      marginBottom: 14,
      fontSize:12,
      color: '#595959',
      fontFamily: 'Gotham-Book',
    },
    
    textInput: {
      justifyContent:'flex-start',
      textAlignVertical:'top',
      height: 300, 
      borderColor: '#595959', 
      borderWidth: 0.5
    },

    containerBtn: {
      flexDirection: 'row',
      alignSelf:'flex-end',
      width: 70,
      marginTop: 14,
      color: '#00BAA4'
    },

  });

 