import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import colors from '../constants/colors'

const GameScreen = () => {
  const [currentGuess, setCurrentGuess] = useState();
  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (100 - 1) + 1))
  }, []);



  return (
    <View style={styles.container}>
      <Text>La suposicion del oponente</Text>
      <Text>{currentGuess}</Text>
      <Card newStyles={styles.butonContainer}>
        <Pressable style={styles.adivinarButton}>
          <Text style={{color:'white'}}>Menor</Text>
        </Pressable>
        <Pressable style={styles.adivinarButton}>
          <Text style={{color:'white'}}>Mayor</Text>
        </Pressable>
      </Card>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  butonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: 300,
  },
  adivinarButton: {
    backgroundColor: colors.primary,
    height: 35,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
})