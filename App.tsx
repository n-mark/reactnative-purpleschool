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
        // по вспомогательной оси
        // alignItems: 'center',
        alignItems: 'flex-start',
        height: 500,
        // центрует внутри контейнера - по основной оси
        // justifyContent: 'center'

        // размазывает равномерно в края
        // justifyContent: 'space-between'

        // почти то же самое только с краями
        // justifyContent: 'space-around'

        // равное расстояние везде
        justifyContent: 'space-evenly'

      }}>
        <View style={{ backgroundColor: 'tomato', height: 100 }}><Text>1</Text></View>
        <View style={{ backgroundColor: 'purple', width: 100, height: 100 }}></View>
        <View style={{ backgroundColor: 'green', width: 100, height: 100 }}></View>
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
