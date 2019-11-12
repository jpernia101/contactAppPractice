import React from 'react'
import {Button, View , StyleSheet, Text} from 'react-native'
import {Constants} from 'expo'

import ContactList from '../ContactList'
import ContactDetailsScreen from './ContactDetailsScreen'

export default class ContactListScreen extends React.Component{
    static navigationOptions = ({navigation}) =>({
        headerTitle: "Contacts",
        headerRight: <Button title="Add" onPress={() => {navigation.navigate('AddContact')}} />
    })

    state = {
        showContacts: true
    }

    toggleContacts = () => {
        this.setState(prevState => ({showContacts: !prevState.showContacts}))
    }

    showForm = () =>{
        this.props.navigation.navigate('AddContact')
    }
    render(){
        return(
        <View style={styles.container}>
            <Text>{this.props.screenProps.random}</Text>
            {this.state.showContacts ?( 
            <ContactList 
                contacts={this.props.screenProps.contacts}
                onSelectContact={(contact)=> {
                    this.props.navigation.navigate('ContactDetails', {
                        phone: contact.phone,
                        name: contact.name
                    })
                }}
                />
            ): null }
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 50,

    },
  });