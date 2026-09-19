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
        flexDirection: 'row'
      }}>
        <View style={{ backgroundColor: 'tomato', 
        // это минимум - базовая ширина меньше которой мы не падаем
        flexBasis: 100, 
          // этот займет все остальное пространство
          flexGrow: 1, 
          // перераспределяем переполненное пространство
          flexShrink: 1,
          height: 100 }}><Text>1</Text></View>
        <View style={{ backgroundColor: 'purple', flexBasis: 100, 
          // если у этого тоже есть значит они будут делить место
          flexGrow: 1, height: 100 }}><Text>12</Text></View>
        <View style={{ backgroundColor: 'green', 
        // если не задано - более широкий элемент будет занимать это место
        // flexBasis: 100, 
          // если у всех трех - поделят поровну
          flexGrow: 1, height: 100 }}><Text>13адвапвлапдваплвадплываыв</Text></View>
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
