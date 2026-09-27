import { StyleSheet, Text, View, ViewProps } from 'react-native';
import { Colors } from '../tokens';

export function Alert(props: ViewProps) {
	return (
		<View {...props} style={styles.alert}>
			<Text>Неверный пароль</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	alert: {
		alignSelf: 'stretch',
		backgroundColor: Colors.red,
		width: 390,
		height: 50,
	},
});
