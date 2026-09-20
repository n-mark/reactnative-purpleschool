import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  // получение размера устройства
  const width = Dimensions.get('window').width;

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.commonContainer}>
          <View style={styles.logoContainer}>
            <Text style={styles.title}>My Awesome App</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.input}>
              <Text style={styles.inputText}>Email</Text>
            </View>
            <View style={styles.input}>
              <Text style={styles.inputText}>Пароль</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Войти</Text>
            </View>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Восстановить пароль</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#16171D',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  commonContainer: {
    // backgroundColor: 'yellow',
    width: '80%',
    height: '50%',
    gap: 13,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoContainer: {
    // backgroundColor: 'cyan',
    height: '20%',
    // borderWidth: 1,
    // borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    width: '100%',
    height: '50%',
    gap: 10,
    // borderColor: 'black',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  footerContainer: {
    width: '100%',
    height: '20%',
    // borderWidth: 1,
    // borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: "#2E2D3D",
    width: 280,
    height: 58,
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 32,
    shadowOpacity: 1,
    justifyContent: 'center'
  },
  inputText: {
    fontFamily: "Fira Sans",
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    color: "#AFB2BF",
    paddingLeft: 26
  },
  button: {
    width: 280,
    height: 58,
    backgroundColor: "#6C38CC",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: "Fira Sans",
    fontSize: 18,
    fontWeight: "900",
    color: 'white'
  },
  buttonText: {
    fontFamily: "Fira Sans",
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    textAlign: "center",
    color: "#FAFAFA"
  },
  footerText: {
    fontFamily: "Fira Sans",
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    color: "#A97BFF"
  }
});
