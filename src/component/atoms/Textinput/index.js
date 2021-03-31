import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const Masukkan = props => {

    return( 
        <View>
            <Text style={styles.labelInput}>{props.judul}</Text>
            <TextInput style={styles.input} placeholder={ props.placeholder}/>
        </View>
    )
};

const styles = StyleSheet.create({

    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 15,
        paddingLeft: 15,
        paddingVertical: 15,
    },
    labelInput: {
        fontSize: 18,
    }

})

export default Masukkan;