import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
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
        // если есть перенос элементов - гэп работает и по вертикали и по горизонтали
        // gap: 10

        // только между строками (основная ось)
        rowGap: 10

        // только между столбцами (основная ось)
        // columnGap: 10
      }}>
        <View style={{
          backgroundColor: 'tomato', width: '50%',
          height: 100
        }}><Text>1</Text></View>
        <View style={{ backgroundColor: 'purple', width: '50%', height: 100 }}><Text>12</Text></View>
        <View style={{ backgroundColor: 'green', width: '50%', height: 100 }}><Text>13</Text></View>
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
