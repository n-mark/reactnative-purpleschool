import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.textStyle}>Мой первый app</Text>
        <Button title="knopka" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  top: {
    flexDirection: 'row'
  },
  textStyle: { color: 'blue', fontSize: 24, borderWidth: 1, borderColor: 'blue', margin: 10, padding: 10 }
});
