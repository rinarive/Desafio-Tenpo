import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';




export default function App() {

  return (
    <View style={styles.container}>
    
      <View style={styles.header}>

       <Image 
         style={styles.headerLeft}
         />
    
        <Text style={styles.headerRight}>TU PLATA DISPONIBLE</Text>
        <Text style={styles.headerRight} >$300</Text>
      </View>

      <View style={styles.body}>
  
        <View >
          <Text style={styles.title}>Historial de movimientos</Text>
          <Text style={styles.subTitle}>Hoy</Text>
        </View>
        <View style={styles.sections}>

          <View style={styles.Voucher}>
            <View style={styles.VoucherRight}>
              <Text>13/05/2020</Text>
              <Text >Retiro de plata por transferencia</Text>
            </View>
            <View style={styles.VoucherLeft}>
              <Text >-$1.000</Text>
              <Text>Retiro en curso</Text>
            </View>
          </View>

          <View style={styles.Voucher}> 
            <View style={styles.VoucherRight}>
              <Text>13/05/2020</Text>
              <Text >Carga de plata por transferencia</Text>
            </View>
            <View style={styles.VoucherLeft}>
              <Text>+$1.000</Text>
              <Text>Carga de plata</Text>
            </View>
          </View>

          <View style={styles.Voucher}>
            <View style={styles.VoucherRight}>
              <Text>13/05/2020</Text>
              <Text >Pago de CONSUELO EUGENIA</Text>
            </View>
            <View style={styles.VoucherLeft}>
              <Text>+$300</Text>
              <Text>Transferencia</Text>
            </View>
          </View>
      
      </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    flexDirection: "column",
  },

  header: {
    flex: 0.08,
    alignItems: 'center',
    marginTop:50,
    flexDirection: "column",

  },
  headerLeft: {
    flexDirection:'row'

  },
  headerRight:{
    flexDirection:"row",
  },
  body: {
    flex : 1,
    flexDirection: "column",
    alignItems: 'center',
    backgroundColor: '#f7f7f7'
  },
  title:{
    marginTop:40,
    fontSize:30,
   
  },
  subTitle:{
    marginTop:30,
  },
  Voucher:{
    flex:0.2,
    backgroundColor:'white',
    flexWrap:"wrap",
    marginTop:10,
    flexDirection:"row",
   
  },
  VoucherLeft:{
    flexWrap:"wrap",
    alignContent:"flex-end"
  },
  VoucherRight:{
    flexWrap:"wrap",
    alignContent:"flex-start"
  }
  
});
