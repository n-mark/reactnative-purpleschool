import { Colors } from '@/shared/tokens';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function UnmatchedCustom() {
	const message = 'Ооо... что-то пошло не так. Попробуйте вернуться на главный экран приложения';

	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={require('../assets/images/unmatched.png')}
				resizeMode="contain"
			/>
			<Text style={styles.text}>{message}</Text>
			<Link style={styles.link} href={'/'}>
				<Text>На главный экран</Text>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		padding: 140,
	},

	image: {
		width: 204,
		height: 282,
	},

	text: {
		color: Colors.textWhite,
		width: 320,
		height: 66,
		fontFamily: 'Fira Sans',
		fontSize: 18,
		fontWeight: '400',
		fontStyle: 'normal',
		textAlign: 'center',
	},

	link: {
		width: 280,
		height: 22,
		fontFamily: 'Fira Sans',
		fontSize: 18,
		fontWeight: '400',
		fontStyle: 'normal',
		textAlign: 'center',
		color: Colors.link,
	},
});
