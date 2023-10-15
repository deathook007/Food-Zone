import FeaturedIcon from '../components/common/FeaturedIcon/FeaturedIcon';
import RestaurantCard from '../components/common/RestaurantCard/RestaurantCard';
import SearchBox from '../components/common/SearchBox/SearchBox';
import Typography from '../dls/Typography';
import data from './screenData.json';
import { generateStyles } from './screens.styles';
import { hideDefaultHeaded } from './utility/hideDefaultHeaded';
import React from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
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
					renderItem={({ item }) => (
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
					)}
				/>
			</View>
		</ScrollView>
	);
};

export default HomeScreen;
