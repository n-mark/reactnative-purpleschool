import { CustomLink } from '@/shared/CustomLink/CustomLink';
import { Colors, Fonts, Gaps } from '@/shared/tokens';
import { Text, StyleSheet, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UnmatchedCustom() {
	const message = 'Ооо... что-то пошло не так. Попробуйте вернуться на главный экран приложения';

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Image
					style={styles.image}
					source={require('../assets/images/unmatched.png')}
					resizeMode="contain"
				/>
				<Text style={styles.text}>{message}</Text>
				<CustomLink style={styles.link} href={'/'} text="На главный экран" />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		padding: 55,
	},

	content: {
		alignItems: 'center',
		gap: Gaps.g50,
	},

	image: {
		width: 204,
		height: 272,
	},

	text: {
		color: Colors.textWhite,
		width: 320,
		height: 66,
		fontFamily: 'Fira Sans',
		fontSize: Fonts.f18,
		fontWeight: '400',
		fontStyle: 'normal',
		textAlign: 'center',
	},

	link: {
		width: 280,
		height: 22,
		fontFamily: Fonts.regular,
		fontSize: 18,
		fontWeight: '400',
		fontStyle: 'normal',
		textAlign: 'center',
		color: Colors.link,
	},
});
