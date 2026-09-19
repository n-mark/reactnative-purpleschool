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
        // перенос элементов которые не влезают
        // flexWrap: 'wrap'

        // то же но в обратном направлении
        flexWrap: 'wrap-reverse',

        // то как располагается весь контент внутри
        alignContent: 'center'
      }}>
        <View style={{ backgroundColor: 'tomato', 
          // ровно половина ширины
          width: '50%', height: 100 }}><Text>1</Text></View>
        <View style={{ backgroundColor: 'purple', width: '50%', height: 100 }}></View>
        <View style={{ backgroundColor: 'green', width: '50%', height: 100 }}></View>
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
