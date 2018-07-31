import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import Button from 'react-native-button';
import { Actions as RouteActions } from 'react-native-router-flux';

class WelcomeForm extends Component{
  constructor(props){
    super(props)

    this.state ={
      teamName: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render(){
    return(
      <View style={styles.container}>
        <View style = { styles.textInputContainer} >
        <TextInput
          placeholder="username"
          style={styles.textInput}
          onChangeText={(text) => {this.setState({teamName: text})}}
        />
      </View>
      <View style = { styles.buttonContainer} >
        <Button onPress={this.handleSubmit} style={styles.button}>Login</Button>
      </View>
      </View>
    )
  }

  handleSubmit() {
    this.props.onSubmit(this.state.teamName);
  }
}

WelcomeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container:{
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   },
  text:{
     color: 'white',
     fontSize: 17,
     letterSpacing: 3
   },
  textInputContainer:{
     flex: 1,
     marginTop:250
   },
  textInput: {
     width: 300,
     height: 50,
     margin: 20,
     borderColor: 'white',
     borderWidth: 1,
     color: 'white',
   },
   buttonContainer:{
     flex: 3
   },
   button: {
     alignSelf: 'center',
     color: 'black',
     backgroundColor: 'white',
     paddingTop: 15,
     paddingBottom: 15,
     paddingLeft: 70,
     paddingRight: 70,
     marginTop: 60,
     fontSize: 17,
     letterSpacing: 3
   }
 })

export default WelcomeForm
