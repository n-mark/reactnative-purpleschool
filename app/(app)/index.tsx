import { API } from '@/entities/auth/api/api';
import { IAuthResponse } from '@/entities/auth/model/auth.interfaces';
import { profileAtom } from '@/entities/user/model/user.state';
import axios from 'axios';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function MyCourses() {
	const [profile] = useAtom(profileAtom);

	const login = async () => {
		const { data } = await axios.post<IAuthResponse>(API.login, {
			email: 'vasia@pupkin.ru',
			password: '12345678',
		});
		console.log(data);
	};

	useEffect(() => {
		login();
	}, []);

	return (
		<View>
			<Text>{profile.profile?.name}</Text>
		</View>
	);
}
