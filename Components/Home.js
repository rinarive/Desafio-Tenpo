import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


function Home({navigation}) {

    return (
        <View style={styles.container}>        
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image 
                style={styles.iconArrow}
                source={require('../assets/Fill-.png')}
                />
            </View>

            <View style={styles.headerRight}>
              <Text style={styles.headerText}  >TU PLATA DISPONIBLE</Text>
              <Text style={styles.headerAmount} >$300</Text>
            </View>
          </View>
    
          <View style={styles.body}>
      
          <View style={styles.init}>
              <Text style={styles.title}>Historial de movimientos</Text>
              <Text style={styles.subTitle}>Hoy</Text>
          </View>
       
        <View style={styles.sections}>
         
            <TouchableOpacity  style={styles.Voucher} onPress={() =>
            navigation.navigate('Transaction')}>
                <View style={styles.VoucherRight}>
                  <Text style={styles.day}>13/05/2020</Text>
                  <Text style={styles.type}>Retiro de plata por transferencia</Text>
                </View>
                <View style={styles.VoucherLeft}>
                <View style={styles.amountOkDisable}>
                  <Text style={styles.amountDisable} >-$1.000</Text>
                  </View>
                  <Text style={styles.descriptionDisable}>Retiro en curso</Text>
                </View>
            </TouchableOpacity>

              <View style={styles.Voucher}> 
                <View style={styles.VoucherRight}>
                  <Text style={styles.day}>13/05/2020</Text>
                  <Text style={styles.type}>Carga de plata por transferencia</Text>
                </View>
                <View style={styles.VoucherLeft}>
                  <View style={styles.amountOk}>
                    <Text style={styles.amount} >+$1.000</Text>
                  </View>
                  <Text style={styles.description}>Carga de plata</Text>
                </View>
              </View>    
              <View style={styles.Voucher}>
                <View style={styles.VoucherRight}>
                  <Text style={styles.day}>13/05/2020</Text>
                  <Text style={styles.type}>Pago de Consuelo Eugenia</Text>
                </View>
                <View style={styles.VoucherLeft}>
                  <View style={styles.amountOk}>
                    <Text style={styles.amount} >+$300</Text>
                  </View>                  
                  <Text style={styles.description}>Transferencia</Text>
                </View>
              </View>          
          </View>
          </View>         
        </View>
    
      );
}
export default Home

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      flexDirection: "column",
    },

    iconArrow:{
      width: 24,
      height: 19,
    },

    header: {
      flex: 0.08,
      alignItems: 'center',
      marginTop:50,
      flexDirection: "row",  
    },

    headerLeft: {
    width:80,
    paddingLeft:20,  
    },

    headerRight:{
     justifyContent:'flex-end'
    },

    headerText:{
      fontFamily: 'Gotham-Book',
    },

    headerAmount:{
      fontFamily:'Gotham-Bold',
      fontSize:20,
      marginTop:10,
      marginBottom:10,
    },
    body: {
      flex : 1,
      flexDirection: "column",
      alignItems: 'center',
      backgroundColor: '#f7f7f7'
    },

    init:{
      alignItems:'flex-start'
    },
    
      title:{
      fontFamily:'Gotham-Bold',
      marginTop:40,
      fontSize:22,    
    },

    subTitle:{
      marginTop:30,
    },

    Voucher:{
      flex:0.2,
      backgroundColor:'white',
      borderRadius:10,
      marginTop:10,
      justifyContent: 'space-between',
      flexDirection:"row",
      width:320,
      padding:15,     
    },

    day:{
      color:'#ADADAD',
      fontFamily: 'Gotham-Book',
    },
    
    amountOkDisable:{
      borderColor:'#ADADAD',
      borderWidth: 1,
      borderRadius:10,
      height:35,
      width:100,      
    },

    amountOk:{
      borderColor:'#f0f',
      borderRadius:10,
      height:35,
      width:100,
      backgroundColor: '#D4F9F5',
    },
    amountDisable:{
      color:'#ADADAD',
      fontFamily:'Gotham-Bold',
      justifyContent:'center',
      alignContent:'center',
      textAlign:'center',
      paddingTop:10,
    },
    amount:{
      color:'#00BAA4',
      fontFamily:'Gotham-Bold',
      justifyContent:'center',
      alignContent:'center',
      textAlign:'center',
      paddingTop:10, 
    },

    type:{
      fontSize:14,
      width:130,
      color: '#595959',
      fontFamily: 'Gotham-Book',
      marginTop:5, 
    },

    description:{
      fontSize:12,
      textAlign:'center',
      color:'#00BAA4',
      fontFamily:'Gotham-Medium',
      paddingTop: 5,    
    },

    descriptionDisable:{
      fontSize:12,
      paddingTop: 5,
      textAlign:'center',
      color:'#ADADAD',
      fontFamily:'Gotham-Medium',
    },

    
  })
  