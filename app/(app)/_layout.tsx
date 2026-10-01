import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" />
		</Stack>
	);
}
