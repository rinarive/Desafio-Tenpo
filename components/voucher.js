import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

function Voucher(){
    return(
        <View style={styles.voucherContainer}>
            <View style={styles.voucherImage}>
                <Image
                source={require('../assets/money.png')}
                style={styles.money}
                />
            </View>
            <View style={styles.voucherText}>
                <Text style={styles.voucherTitle}>Datos de la transferencia</Text>
                <Text style={styles.voucherDestine}>Desde n de cuenta origen</Text>
                <Text style={styles.voucherDestine}>Hasta N de cuenta destino</Text>
                <Text style={styles.voucherAmount}>$1.000</Text>
            </View>

        </View>
    );

   
}
export default Voucher


const styles = StyleSheet.create({
    voucherContainer:{
        flex:0.5,
        justifyContent:'center',
        flexDirection: "row",
        marginTop: 20,

    },
    voucherImage:{
        width:50,
        height: 50,
        flex:0.5

    },
    money:{
      
        fontSize:20,
        marginTop:10,
        marginBottom:10,
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