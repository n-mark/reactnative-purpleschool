import { StyleSheet, Text, View, Dimensions, TextInput, Button } from 'react-native';

export default function App() {
  // получение размера устройства
  const width = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Purl</Text>
        <View style={styles.form}>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <Button title='Войти' />
        </View>
        <Text>Восстановить пароль</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // заполнить все доступное пространство по направлению нашего флекса
    flex: 1,
    padding: 55
  },
  content: {
    alignItems: 'center',
    gap: 50
  },
  form: {
    alignSelf: 'stretch',
    gap: 16
  },
  input: {
    backgroundColor: '#2E2D3D'
  }
});
