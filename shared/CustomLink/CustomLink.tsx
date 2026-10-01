import { Colors, Fonts } from '@/shared/tokens';
import { Link, LinkProps } from 'expo-router';
import { Text, StyleSheet } from 'react-native';

export function CustomLink({ text, ...props }: LinkProps & { text: string }) {
	return (
		<Link {...props} style={styles.link}>
			<Text>{text}</Text>
		</Link>
	);
}

const styles = StyleSheet.create({
	link: {
		fontSize: Fonts.f18,
		width: 280,
		height: 22,
		fontFamily: Fonts.regular,
		fontWeight: '400',
		fontStyle: 'normal',
		textAlign: 'center',
		color: Colors.link,
	},
});
