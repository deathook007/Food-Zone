import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

export const hideDefaultHeaded = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);
};
