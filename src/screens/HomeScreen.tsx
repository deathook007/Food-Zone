import SearchBox from '../components/common/SearchBox/SearchBox';
import Typography from '../dls/Typography';
import { generateStyles } from './screens.styles';
import { hideDefaultHeaded } from './utility/hideDefaultHeaded';
import React from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components/native';

const HomeScreen = () => {
	hideDefaultHeaded();

	const theme = useTheme();

	const styles = generateStyles(theme);

	return (
		<ScrollView style={styles.homePage}>
			<SearchBox />
		</ScrollView>
	);
};

export default HomeScreen;
