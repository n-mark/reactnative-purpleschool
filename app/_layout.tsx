import { Colors } from '@/shared/tokens';
import { Stack } from 'expo-router';

export default function RootLayout() {
	return (
		<Stack
			screenOptions={{
				// headerShown: false
				contentStyle: {
					backgroundColor: Colors.black,
				},
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen
				name="restore"
				options={{
					presentation: 'modal',
					// presentation: 'card',
					// presentation: 'fullScreenModal',
				}}
			/>
		</Stack>
	);
}
