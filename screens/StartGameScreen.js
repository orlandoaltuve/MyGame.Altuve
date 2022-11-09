import { useState } from 'react'
import { Pressable, StyleSheet, Text, TouchableWithoutFeedback, View , Keyboard} from 'react-native'
import Card from '../Components/Card'
import Input from '../Components/Input'
import colors from '../constants/colors'


const StartGameScreen = () => {
  const [value, setValue]=useState('')
  const handleInput= (text)=>{
    setValue(text.replace(/[^0-9]/g, ""))
  }

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={styles.screen}>
      <Card >
        <Text>Elije un numero</Text>
        <Input value={value} onChangeText={handleInput}/>
        <View style={styles.buttonContainer}>
         <Pressable style={styles.cleanButton}>
          <Text style={{color:'white'}}>Limpiar</Text>
         </Pressable>
         <Pressable style={{...styles.cleanButton, ...styles.confirmButton} }>
          <Text style={{color:'white'}}>Confirmar</Text>
         </Pressable>
        </View>
      </Card>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    
    width: '100%',
    justifyContent: 'space-between'
  },
  cleanButton:{
    backgroundColor:colors.secundary,
    height:35,
    width:70,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },
  confirmButton:{
    backgroundColor: colors.primary,
    width:80,
  }


})