import { User } from '@/entities/user/model/user.model';
import { atom } from 'jotai';

export const profileAtom = atom<UserState>({
	profile: {
		id: 1,
		name: 'mikita',
	},
	isLoading: false,
	error: null,
});

export interface UserState {
	profile: User | null;
	isLoading: boolean;
	error: string | null;
}
