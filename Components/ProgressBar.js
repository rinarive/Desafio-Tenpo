import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons as Icon} from 'react-native-vector-icons'


function ProgressBar() {
    return (
        <View style={styles.fullbar}>
            <View style={styles.step}>
                <Icon 
                style={styles.stepIcon}
                name="circle" />
                <Text>Step 1</Text>
            </View>
            <View style={styles.step}>
                <Icon 
                style={styles.stepIcon}
                name="circle" />
                <Text>Step 2</Text>
            </View>
            <View style={styles.step}>
                <Icon 
                style={styles.stepIcon}
                name="circle" />
                <Text>Step 3</Text>
            </View>
            <View style={styles.step}>
                <Icon 
                style={styles.stepIcon}
                name="circle" />
                <Text>Step 4</Text>
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
});
  
export default ProgressBar;