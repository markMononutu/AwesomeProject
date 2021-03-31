import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Button = ({label}) => {
    return (
        <View>
            <TouchableOpacity style={styles.submit}>
                <Text style={styles.labelButton}>{label}</Text>
            </TouchableOpacity>
        </View>
        
    )
}
const styles = StyleSheet.create({
    submit:{
        backgroundColor: '#ffc93c',
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
        borderColor: 'grey',
        color: 'white',
    },
    labelButton:{
        color: 'white',
    }
})

export default Button;


