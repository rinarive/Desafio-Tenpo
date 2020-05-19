import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';


function Voucher(){
    return(
   
        <View style={styles.content}>

        <View style={styles.voucherContainer}>
            <View style={styles.voucherImage}>
                <Image
                source={require('../assets/money.png')}
                style={styles.money}
                />
            </View>
            <View style={styles.voucherText}>
                <Text style={styles.voucherTitle}>Datos de Retiro</Text>
                <Text style={styles.voucherDestine}>Desde N° de cuenta origen</Text>
                <Text style={styles.voucherDestine}>Hasta N° de cuenta destino</Text>
                <Text style={styles.voucherAmount}>$1.000</Text>
            </View>
        </View>     

      </View>  
     
    );

   
}
export default Voucher


const styles = StyleSheet.create({
    
    voucherContainer:{
        height:110,
        justifyContent:'space-around',
        flexDirection: "row",
        width:300,
        backgroundColor:'white',
        borderRadius:10,
        alignItems:'center',      
    },
    voucherImage:{
        width:50,
        height: 50,
        marginLeft:10
    },
 
    voucherText:{
        fontFamily:'Gotham-Bold',
    },
    voucherTitle:{
        fontFamily:'Gotham-Bold',
    },
    voucherDestine:{
        fontSize:12,
        color: '#595959',
        fontFamily: 'Gotham-Book',
        marginTop:3,
    },
    voucherAmount:{
        fontFamily:'Gotham-Bold',
        marginTop:5,
    }

})