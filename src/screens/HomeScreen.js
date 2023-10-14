import Typography from '../dls/Typography';
import { SCREEN_NAME } from './screens.names';
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
			<Typography variant='x-small'>{SCREEN_NAME.HOME_SCREEN}</Typography>
		</SafeAreaView>
	);
};

export default HomeScreen;
