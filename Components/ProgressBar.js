import React, {useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

function ProgressBar() {

    const [datos, setDatos] = useState(true)
    const [validate, setValidate] = useState(false)
    const [transfer, setTransfer] = useState(false)
    const [complete, setComplete] = useState(false)

 

    return (
        <View style={styles.fullbar}>
            <View style={styles.step}>
                <Image 
                source={require('../assets/datos-active.png')}
                style={styles.stepIcon}
                />
                <Text style={styles.description}>
                    Datos de retiro enviados
                </Text>
                <View style={styles.line}></View>
            </View>
            <View style={styles.step}>
                <Image 
                source={validate ? require('../assets/valid-active.png') : require('../assets/valid-default.png')}
                style={styles.stepIcon}
                />
                <Text style={styles.description}>
                    Validando tranferencia
                </Text>
                <View style={styles.line}></View>
            </View>
            <View style={styles.step}>
                <Image 
                source={require('../assets/transfer-default.png')}
                style={styles.stepIcon}
                />
                <Text style={styles.description}>
                    Transfiriendo a tu banco
                </Text>
                <View style={styles.line}></View>
            </View>
            <View style={styles.step}>
                <Image 
                source={require('../assets/done-default.png')}
                style={styles.stepIcon}
                />
                <Text style={styles.description}>
                    Tranferencia completada
                </Text>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    fullbar: {        
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    step: {
        alignItems: 'center',
        position:'relative',
    },
    stepIcon: {
        width: 50,
    },
    description:{
        fontSize: 10,
        width:'70%',
        textAlign: 'center',
    },
    line: {
        height: 1,
        width:'45%',
        backgroundColor: '#595959',
        position: 'absolute',
        top: '30%',
        left: '74%',              
    }
});
  
export default ProgressBar;