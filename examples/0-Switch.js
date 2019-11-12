import React from 'react';
import { Button, View } from 'react-native';
import {createSwitchNavigator} from 'react-navigation'


class ScreenComponentOne extends React.Component{
    render(){
        return(
            <View 
              style={{
                  flex:1,
                  alignContent:'center',
                  justifyContent:'center',
                  borderWidth:25,
                  borderColor:'teal'
              }}>
                <Button title = 'Go to SC two' onPress={() => this.props.navigation.navigate('RouteNameTwo')}/>
            </View>
        )
    }
}

class ScreenComponentTwo extends React.Component{
    render(){
        return(
            <View 
              style={{
                  flex:1,
                  alignContent:'center',
                  justifyContent:'center',
                  borderWidth:25,
                  borderColor:'yellow'
              }}>
                <Button title = 'Go to SC one' onPress={() => this.props.navigation.navigate('RouteNameOne')}/>
            </View>
        )
    }
}

const AppNavigator = createSwitchNavigator({
    RouteNameOne: ScreenComponentOne,
    RouteNameTwo: ScreenComponentTwo
})

export default class App extends React.Component{
    render(){
        return(
            <AppNavigator/>
        )
    }
}
