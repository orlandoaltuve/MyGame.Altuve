import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from 'react-native';
import Header from './Components/Header';
import GameScreen from "./screens/GameScreen";
import StartGameScreen from './screens/StartGameScreen';
import { useFonts } from "expo-font";



export default function App() {
  const [loaded]= useFonts({
    Roboto: require('./assets/fonts/Roboto-Light.ttf'),
    Lobster: require('./assets/fonts/Lobster-Regular.ttf'),
    PermanentMarker: require('./assets/fonts/PermanentMarker-Regular.ttf')
  })
  const [userumber, setUserNUmber]=useState()
  const handleStartGame =(selectedNumber)=>{
    setUserNUmber(selectedNumber)
  }

  let content= <StartGameScreen onStartGame={handleStartGame}/>
if(userumber){
  content=<GameScreen/>
}

if(!loaded){
  return null
}

  return (
    <View style={styles.container}>
      <Header title={'Adivina el número'} newStyles={{fontFamily:'PermanentMarker'}}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});