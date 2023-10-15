import FeaturedIcon from '../components/common/FeaturedIcon/FeaturedIcon';
import SearchBox from '../components/common/SearchBox/SearchBox';
import Typography from '../dls/Typography';
import data from './screenData.json';
import { generateStyles } from './screens.styles';
import { hideDefaultHeaded } from './utility/hideDefaultHeaded';
import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { useTheme } from 'styled-components/native';

const HomeScreen = () => {
	hideDefaultHeaded();

	const theme = useTheme();

	const styles = generateStyles(theme);

	const { featuredFood } = data || {};

	return (
		<ScrollView style={styles.homePage}>
			<SearchBox />
			<FlatList
				data={featuredFood}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => (
					<FeaturedIcon
						key={item.id}
						id={item.id}
						ulr={item.url}
						description={item.description}
					/>
				)}
			/>
		</ScrollView>
	);
};

export default HomeScreen;
