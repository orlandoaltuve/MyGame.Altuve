import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Card from '../Components/Card'


const StartGameScreen = () => {
    const [value,setValue] = useState('')
  return (
    <View style={styles.screen}>
      <Card style={styles.inputContainer}>
        <Text>Elije un numero</Text>
        <TextInput/>
        <View style={styles.buttonContainer}>
            <Button title='Limpiar'/>
            <Button title='Confirmar'/>
        </View>
      </Card>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },

    buttonContainer:{
        flexDirection:'row',
        backgroundColor:'blue',
        width:'100',
        justifyContent:'space-between'
    }
})