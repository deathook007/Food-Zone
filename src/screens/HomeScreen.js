import Typography from '../dls/Typography';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native';

const HomeScreen = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<SafeAreaView>
			<Typography variant='x-small'>{'Home Screen'}</Typography>
		</SafeAreaView>
	);
};

export default HomeScreen;
