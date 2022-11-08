import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        backgroundColor:'red',
        height: 90,
        paddingTop: 36,
        alignItems:'center',
        justifyContent: 'center'
    },
    headerTitle:{
        color:'blue',
        fontSize: 22,
    }

})