import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>你好！</Text>
      </View>
      <Text style={styles.textStyle}>Мой первый app</Text>
      <StatusBar style="auto" />
      <TextInput value='привет' />
      <Button title="knopka" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: { color: 'blue', fontSize: 24, borderWidth: 1, borderColor: 'blue', margin: 10, padding: 10 }
});
