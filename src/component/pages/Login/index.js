import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Masukkan from '../../atoms/Textinput'
import Button from '../../atoms/Button'
import Gap from '../../atoms/Gap';

const Login = () => {
    const [welcome] = useState('Welcome');
    const [userName] = useState('');
    const [password] = useState('');
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{welcome}</Text>
            <Gap height={40}/>
            <Masukkan placeholder="Masukkan Username" judul="Username"/>
            <Gap height={24}/>
            <Masukkan placeholder="Masukkan Password" judul="Password"/>
            <Gap height={48}/>
            <Button label = "Sign in"/>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 25,
    },
    title: {
        fontSize: 36,
        fontWeight: '700',
    },
    gap:{

    }
})



export default Login;