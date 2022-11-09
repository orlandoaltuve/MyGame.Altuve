import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './screens/StartGameScreen';



export default function App() {
  return (
    <View style={styles.container}>
      <Header title={'Adivina el numero'} />
      <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});