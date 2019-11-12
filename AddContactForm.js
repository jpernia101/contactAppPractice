import React from 'react'
import {Button, StyleSheet, TextInput, View , KeyboardAvoidingView} from 'react-native'
import {Constants} from 'expo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    justifyContent: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})

export default class AddContactForm extends React.Component {
  state = {
    name: '',
    phone: '',
    isFormValid: false
  }

componentDidUpdate(prevProps, prevState){
    if(this.state.name !== prevState.name || this.state.phone !== prevState.phone){
    this.validateForm()
    }
}

getHandler = key => {
      return val => {
          this.setState({[key]: val})
      }
  }
/*
    -getHandler simplifies it for us so we only have to write on generic functions
    -it takes key and that returns a fuctions 
    -is the same handleNameChange = getHandler('name') or -handlePhoneChange = getHandler('phone')
    -so the key would be 'name' or 'phone'
    -and val would be the user input and would assign 
        name: 'val'
        phone: 'val'
    -handleNameChange = this.getHandler('name') // val => {this.setState({name:val})}      

  handleNameChange = name => {
    this.setState({name})
  }

  handlePhoneChange = phone => {
    //+phone converst string to number if a non numeric character is pressed then  NaN is thrown
    if(+phone >= 0 && phone.length <= 10){
    this.setState({phone})
}
  }
*/
  validateForm = () =>{
    const names = this.state.name.split(' ')
    if(+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 3
         && names.length >= 2 && names[0] && names[1]){
        return this.setState({isFormValid: true})
    }else{
        return this.setState({isFormValid: false})
    }
  }
  handleSubmit = () => {
                         //{...this.state} is the short hand version to this
                         //copies all the values in the state..shorthand method
      this.props.onSubmit({name: this.state.name, phone : this.state.phone})
  }
  render() {
    return (
      <KeyboardAvoidingView behavior = 'padding' style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.getHandler('name')}
          placeholder="Name"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.getHandler('phone')}
          placeholder="Phone"
        />
        <Button title="Submit" onPress = {this.handleSubmit} disabled={!this.state.isFormValid}/>
      </KeyboardAvoidingView>
    )
  }
}