import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Input = ({ style,...restPorps}) => {
  return (
    <TextInput
      blurOnsubmit
      autoCapitalization='none'
      autoCorrect={false}
      keyboardType='numeric'
      maxLength={2}
      style={{ ...styles.input, ...style }}
      {...restPorps}
      />
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginVertical: 10,
    width:50,

  }


})