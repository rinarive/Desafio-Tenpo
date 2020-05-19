import React from 'react';
import { View, StyleSheet } from "react-native"
import Voucher from './voucher';
import ProgressBar from './ProgressBar';
import Form from './Form';


function Transaction({navigation}) {


    return (
        <View style={styles.container}>
            <Voucher/>
            <ProgressBar/>
            <Form/>
        </View>
    );
}

export default Transaction;
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        paddingTop:40,
    },
})