import { useState } from 'react'
import { Pressable, StyleSheet, Text, TouchableWithoutFeedback, View, Keyboard, Button } from 'react-native'
import Card from '../Components/Card'
import Input from '../Components/Input'
import colors from '../constants/colors'


const StartGameScreen = ({ onStartGame }) => {
  const [value, setValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState('')

  const hadleConfirmation = () => {
    const choseNumber = parseInt(value)
    if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return
    setConfirmed(true)
    setSelectedNumber(choseNumber)
    setValue('')
  }


  const handleInput = (text) => {
    setValue(text.replace(/[^0-9]/g, ""))
  }

  const handleResetInput = () => {
    setValue("");
    setConfirmed(false);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Card >
          <Text>Elije un número</Text>
          <Input value={value} onChangeText={handleInput} />
          <View style={styles.buttonContainer}>
            <Pressable style={styles.cleanButton} onPress={handleResetInput}>
              <Text style={{ color: 'white' }}>Limpiar</Text>
            </Pressable>
            <Pressable style={{ ...styles.cleanButton, ...styles.confirmButton }} onPress={hadleConfirmation} >
              <Text style={{ color: 'white' }}>Confirmar</Text>
            </Pressable>
          </View>
        </Card>
        {confirmed && (
          <Card>
            <Text>Tu selección:</Text>
            <Text style={{color:colors.secundary}}>{selectedNumber}</Text>
            <Pressable
            style={{ ...styles.cleanButton, ...styles.confirmButton, width:180}}
              onPress={() => onStartGame(selectedNumber)}
            >
              <Text style={{color:'white'}}> Comenzar Juego </Text>
            </Pressable>
          </Card>
        )}
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
  cleanButton: {
    backgroundColor: colors.secundary,
    height: 35,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    width: 80,
  }


})