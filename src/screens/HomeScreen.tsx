import FeaturedIcon from '../components/common/FeaturedIcon/FeaturedIcon';
import RestaurantCard from '../components/common/RestaurantCard/RestaurantCard';
import SearchBox from '../components/common/SearchBox/SearchBox';
import Typography from '../dls/Typography';
import data from './screenData.json';
import { SCREEN_NAME } from './screens.names';
import { generateStyles } from './screens.styles';
import { hideDefaultHeaded } from './utility/hideDefaultHeaded';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import {
	Alert,
	FlatList,
	ScrollView,
	TouchableOpacity,
	View,
} from 'react-native';
import { useTheme } from 'styled-components/native';

const HomeScreen = () => {
	hideDefaultHeaded();

	const theme = useTheme();

	const styles = generateStyles(theme);

	const {
		featuredFood = [],
		vegRestaurantHeading,
		vegRestaurantSubheading,
		nonVegRestaurantHeading,
		nonVegRestaurantSubheading,
		seeAllButtonText = 'See All',
		vegRestaurants = [],
		nonVegRestaurants = [],
	} = data || {};

	const navigation = useNavigation();

	const handleRestaurantNavigation = useCallback(() => {
		navigation.navigate(SCREEN_NAME.RESTAURANT_SCREEN as never);
	}, []);

	const handleListAllVegRestaurants = useCallback(() => {
		Alert.alert('Page listing all veg restaurants! Work under progress');
	}, []);

	const handleListAllNonVegRestaurants = useCallback(() => {
		Alert.alert(
			'Page listing all non veg restaurants! Work under progress'
		);
	}, []);

	return (
		<ScrollView style={styles.homePage}>
			<SearchBox />
			<FlatList
				data={featuredFood}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<FeaturedIcon
						key={item.id}
						id={item.id}
						ulr={item.url}
						description={item.description}
					/>
				)}
			/>
			<View style={styles.restaurantSection}>
				<View style={styles.headingSection}>
					<View style={styles.headingContainer}>
						<Typography
							variant={'heading-sm-bold'}
							style={styles.heading}
						>
							{vegRestaurantHeading}
						</Typography>
						<Typography
							variant={'body-base-regular'}
							style={styles.subheading}
						>
							{vegRestaurantSubheading}
						</Typography>
					</View>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={handleListAllVegRestaurants}
						style={styles.seeAllButtonContainer}
					>
						<Typography
							variant={'cta-label-bold'}
							style={styles.seeAllText}
						>
							{seeAllButtonText}
						</Typography>
					</TouchableOpacity>
				</View>
				<FlatList
					data={vegRestaurants}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<TouchableOpacity
							activeOpacity={0.7}
							onPress={handleRestaurantNavigation}
						>
							<RestaurantCard
								key={item.id}
								id={item.id}
								ulr={item.url}
								title={item.title}
								subtitle={item?.subtitle}
								rating={item.rating}
								deliveryTime={item.deliveryTime}
								foodDescription={item?.foodDescription}
								freeDeliveryText={item.freeDeliveryText}
								discount={item?.discount}
							/>
						</TouchableOpacity>
					)}
				/>
			</View>
			<View style={styles.restaurantSection}>
				<View style={styles.headingSection}>
					<View style={styles.headingContainer}>
						<Typography
							variant={'heading-sm-bold'}
							style={styles.heading}
						>
							{nonVegRestaurantHeading}
						</Typography>
						<Typography
							variant={'body-base-regular'}
							style={styles.subheading}
						>
							{nonVegRestaurantSubheading}
						</Typography>
					</View>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={handleListAllNonVegRestaurants}
						style={styles.seeAllButtonContainer}
					>
						<Typography
							variant={'cta-label-bold'}
							style={styles.seeAllText}
						>
							{seeAllButtonText}
						</Typography>
					</TouchableOpacity>
				</View>
				<FlatList
					data={nonVegRestaurants}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => (
						<TouchableOpacity
							activeOpacity={0.7}
							onPress={handleRestaurantNavigation}
						>
							<RestaurantCard
								key={item.id}
								id={item.id}
								ulr={item.url}
								title={item.title}
								subtitle={item?.subtitle}
								rating={item.rating}
								deliveryTime={item.deliveryTime}
								foodDescription={item?.foodDescription}
								freeDeliveryText={item.freeDeliveryText}
								discount={item?.discount}
							/>
						</TouchableOpacity>
					)}
				/>
			</View>
		</ScrollView>
	);
};

export default HomeScreen;
