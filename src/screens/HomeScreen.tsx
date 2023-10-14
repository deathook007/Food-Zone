import Typography from '../dls/Typography';
import { SCREEN_NAME } from './screens.names';
import { hideDefaultHeaded } from './utility/hideDefaultHeaded';
import React from 'react';
import { SafeAreaView } from 'react-native';

const HomeScreen = () => {
	hideDefaultHeaded();

	return (
		<SafeAreaView>
			<Typography variant='x-small'>{SCREEN_NAME.HOME_SCREEN}</Typography>
		</SafeAreaView>
	);
};

export default HomeScreen;
