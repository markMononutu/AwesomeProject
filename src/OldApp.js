import React, { Component } from 'react';
import {Text, View, StyleSheet,Button, ScrollView, TextInput} from 'react-native';
import Welcome from './component/Welcome';
class App extends Component{
  state = {
    show: true,
  };
  render(){
    return (
    <View>
       {this.state.show && <Welcome text="Welcome"/>}
       <Button title="Toggle" onPress={()=> this.setState({show: !this.state.show})}></Button>

       <ScrollView showsVerticalScrollIndicator={false}>
         <TextInput placeholder="Username" style={{borderWidth:1, marginHorizontal: 5, marginVertical: 10}}/>
         <TextInput placeholder="Username" style={{borderWidth:1, marginHorizontal: 5, marginVertical: 10}}/>
         <TextInput placeholder="Username" style={{borderWidth:1, marginHorizontal: 5, marginVertical: 10}}/>
         <TextInput placeholder="Username" style={{borderWidth:1, marginHorizontal: 5, marginVertical: 10}}/>
         <TextInput placeholder="Username" style={{borderWidth:1, marginHorizontal: 5, marginVertical: 10}}/>
         <TextInput placeholder="Username" style={{borderWidth:1, marginHorizontal: 5, marginVertical: 10}}/>
         <TextInput placeholder="Username" style={{borderWidth:1, marginHorizontal: 5, marginVertical: 10}}/>
         <TextInput placeholder="Username" style={{borderWidth:1, marginHorizontal: 5, marginVertical: 10}}/>
         <TextInput placeholder="Username" style={{borderWidth:1, marginHorizontal: 5, marginVertical: 10}}/>
         <TextInput placeholder="Username" style={{borderWidth:1, marginHorizontal: 5, marginVertical: 10}}/>
         <TextInput placeholder="Username" style={{borderWidth:1, marginHorizontal: 5, marginVertical: 10}}/>
         <TextInput placeholder="Username" style={{borderWidth:1, marginHorizontal: 5, marginVertical: 10}}/>
       </ScrollView>
    </View>
   
    )
  }

}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor : 'yellow',
//   },
// });

export default App;

