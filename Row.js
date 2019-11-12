import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View , TouchableOpacity} from 'react-native';

const Row = props => (
    <TouchableOpacity
    style={styles.row}
    onPress={() => props.onSelectContact(props)}>
          <Text >{props.name}</Text>
          <Text> {props.phone}</Text>
    </TouchableOpacity>
  
  )

const styles = StyleSheet.create({
    row: {
        padding:20,
    }
})
 export default Row 