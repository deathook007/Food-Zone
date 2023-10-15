import MenuCard from '../../components/common/MenuCard/MenuCard';
import RestaurantDetailsCard from '../../components/common/RestaurantDetailsCard/RestaurantDetailsCard';
import Typography from '../../dls/Typography';
import { hideDefaultHeaded } from '../utility/hideDefaultHeaded';
import { generateStyles } from './RestaurantScreen.styles';
import { useRoute } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { useTheme } from 'styled-components/native';

const RestaurantScreen = () => {
	// const { params } = useRoute();

	// const item = params;

	const item = {
		id: 1,
		url: 'https://raw.githubusercontent.com/deathook007/TestImages/main/Screenshot%202023-10-14%20at%2010.33.29%20AM.png',
		title: 'Testing Restaurant',
		subtitle: 'Testing Restaurant',
		rating: '4.4 (10k+)',
		deliveryTime: '16 mins',
		foodDescription: 'Testing Description',
		freeDeliveryText: 'Free delivery',
		discount: '50% off',
		menu: [
			{
				id: 1,
				type: 'veg',
				tag: 'Bestseller',
				title: 'Dish Title',
				actualPrice: '₹300',
				discountedPrice: '₹100',
				rating: '4.4 (500)',
				description: 'Item Description',
				image: 'https://raw.githubusercontent.com/deathook007/TestImages/main/Screenshot%202023-10-14%20at%2010.33.29%20AM.png',
				buttonText: 'Details',
			},
			{
				id: 2,
				type: 'veg',
				tag: 'Bestseller',
				title: 'Dish Title',
				actualPrice: '₹300',
				discountedPrice: '₹100',
				rating: '4.4 (500)',
				description: 'Item Description',
				image: 'https://raw.githubusercontent.com/deathook007/TestImages/main/Screenshot%202023-10-14%20at%2010.33.29%20AM.png',
				buttonText: 'Details',
			},
			{
				id: 3,
				type: 'veg',
				tag: 'Bestseller',
				title: 'Dish Title',
				actualPrice: '₹300',
				discountedPrice: '₹100',
				rating: '4.4 (500)',
				description: 'Item Description',
				image: 'https://raw.githubusercontent.com/deathook007/TestImages/main/Screenshot%202023-10-14%20at%2010.33.29%20AM.png',
				buttonText: 'Details',
			},
		],
	};

	const {
		url = '',
		title = '',
		subtitle = '',
		rating = '',
		deliveryTime = '',
		foodDescription = '',
		freeDeliveryText = '',
		menu = [],
	} = item;

	hideDefaultHeaded();

	const [modalVisible, setModalVisible] = useState(false);

	const theme = useTheme();

	const styles = generateStyles(theme);

	const handleModalToggle = useCallback(() => {
		setModalVisible((modalVisible) => !modalVisible);
	}, []);

	if (!menu || menu.length === 0) {
		return null;
	}

	return (
		<ScrollView style={styles.restaurantPage}>
			<View style={styles.imageContainer}>
				<Image source={{ uri: url }} style={styles.image} />
			</View>
			<View style={styles.detailsContainer}>
				<View style={styles.designContainer}></View>
			</View>
			<View style={styles.headingContainer}>
				<Typography variant={'heading-sm-bold'} style={styles.title}>
					{title}
				</Typography>
				<Typography variant={'body-base-bold'} style={styles.subtitle}>
					{subtitle}
				</Typography>
			</View>
			<RestaurantDetailsCard
				rating={rating}
				deliveryTime={deliveryTime}
				foodDescription={foodDescription}
				freeDeliveryText={freeDeliveryText}
			/>
			<View style={styles.headingContainer}>
				<Typography variant={'heading-sm-bold'} style={styles.title}>
					{'Recommended Menu'}
				</Typography>
			</View>
			<View style={styles.menuContainer}>
				{menu.map((item) => {
					const {
						tag = '',
						title = '',
						actualPrice = '',
						discountedPrice = '',
						rating = '',
						description = '',
						image = '',
						buttonText = '',
					} = item || {};
					return (
						<MenuCard
							tag={tag}
							title={title}
							actualPrice={actualPrice}
							discountedPrice={discountedPrice}
							rating={rating}
							description={description}
							image={image}
							buttonText={buttonText}
							modalVisible={modalVisible}
							setModalVisible={setModalVisible}
							handleModalToggle={handleModalToggle}
						/>
					);
				})}
			</View>
		</ScrollView>
	);
};

export default RestaurantScreen;
