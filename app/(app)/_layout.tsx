import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { View, Text } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
	return (
		<>
			<View>
				<Text>Вложенный layout</Text>
			</View>
			<Stack>
				<Stack.Screen name="index" />
			</Stack>
		</>
	);
}
