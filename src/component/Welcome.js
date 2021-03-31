import React, { Component } from 'react';
import {Text,View, StyleSheet} from 'react-native';

class Title extends Component{
    state={
        name: "Mark",
    };

    componentDidUpdate(){
        console.log("Component Welcome did update");
    }  

    componentDidMount(){
        console.log("Component Welcome did mount");
        setTimeout(()=>{
            this.setState({name: "Jibril"});
        },3000);
    }

    render(){
        return(
        <View style={styles.container}>
            <Text style={styles.text}>{this.props.text} {this.state.name}</Text>
        </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems : 'center',
        marginTop:10,
        fontSize: 20,
    },
    text: {
        color: "red",
        fontWeight: '600',
        fontSize: 24,
    }

})

export default Title;