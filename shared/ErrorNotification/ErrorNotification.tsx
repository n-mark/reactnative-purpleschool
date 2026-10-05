import { useEffect, useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text } from 'react-native';
import { Colors, Fonts } from '../tokens';
import { ErrorNotificationProps } from './ErrorNotification.props';

export function ErrorNotification({ error }: ErrorNotificationProps) {
	return error ? <ErrorToast key={error} error={error} /> : null;
}

function ErrorToast({ error }: { error: string }) {
	const [isShown, setIsShown] = useState(true);
	const [animatedValue] = useState(() => new Animated.Value(-100));

	useEffect(() => {
		const animation = Animated.timing(animatedValue, {
			toValue: 0,
			duration: 100,
			useNativeDriver: true,
		});
		animation.start();

		const timerId = setTimeout(() => {
			setIsShown(false);
		}, 3000);

		return () => {
			animation.stop();
			clearTimeout(timerId);
		};
	}, [animatedValue]);

	if (!isShown) {
		return <></>;
	}

	return (
		<Animated.View
			style={{
				...styles.error,
				transform: [{ translateY: animatedValue }],
			}}
		>
			<Text style={styles.errorText}>{error}</Text>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	error: {
		position: 'absolute',
		width: Dimensions.get('screen').width,
		backgroundColor: Colors.red,
		padding: 15,
		top: 50,
	},
	errorText: {
		fontSize: Fonts.f16,
		color: Colors.textWhite,
		textAlign: 'center',
		fontFamily: 'FiraSans',
	},
});
