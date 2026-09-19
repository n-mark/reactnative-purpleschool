import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Dimensions } from 'react-native';

export default function App() {
  // получение размера устройства
  const width = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.textStyle}>Мой первый app</Text>
        <Button title="knopka" />
      </View>
      {/* View уже по-умолчанию flex-контейнер */}
      <View style={{
        backgroundColor: 'yellow',
        alignItems: 'flex-end',
        height: 500,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
      }}>
        <View style={{
          backgroundColor: 'tomato',
          // теперь с гэпом смотрится нормально
          width: (width / 2) - 5,
          height: 100
        }}><Text>1</Text></View>
        <View style={{ backgroundColor: 'purple', width: (width / 2) - 5, height: 100 }}><Text>12</Text></View>
        <View style={{ backgroundColor: 'green', width: (width / 2) - 5, height: 100 }}><Text>13</Text></View>
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
