
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';



export default function App() {
  return (
    <View style={styles.container}>
      <Header title={'adivina el numero'}/>;
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
