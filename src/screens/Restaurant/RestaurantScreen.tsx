import MenuCard from '../../components/common/MenuCard/MenuCard';
import RestaurantDetailsCard from '../../components/common/RestaurantDetailsCard/RestaurantDetailsCard';
import Typography from '../../dls/Typography';
import { SCREEN_NAME } from '../screens.names';
import { hideDefaultHeaded } from '../utility/hideDefaultHeaded';
import { generateStyles } from './RestaurantScreen.styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { ScrollView, View, Image, TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-feather';
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

	const navigation = useNavigation();

	const handleModalToggle = useCallback(() => {
		setModalVisible((modalVisible) => !modalVisible);
	}, []);

	const handleCartNavigation = useCallback(() => {
		navigation.navigate(SCREEN_NAME.CART_SCREEN as never);
	}, []);

	if (!menu || menu.length === 0) {
		return null;
	}

	return (
		<>
			<ScrollView style={styles.restaurantPage}>
				<View style={styles.imageContainer}>
					<Image source={{ uri: url }} style={styles.image} />
				</View>
				<View style={styles.detailsContainer}>
					<View style={styles.designContainer}></View>
				</View>
				<View style={styles.headingContainer}>
					<Typography
						variant={'heading-sm-bold'}
						style={styles.title}
					>
						{title}
					</Typography>
					<Typography
						variant={'body-base-bold'}
						style={styles.subtitle}
					>
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
					<Typography
						variant={'heading-sm-bold'}
						style={styles.title}
					>
						{'Recommended Menu'}
					</Typography>
				</View>
				{menu.map((item) => {
					const {
						id,
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
							key={id}
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
			</ScrollView>
			<TouchableOpacity
				activeOpacity={0.95}
				onPress={handleCartNavigation}
				style={styles.stickyCart}
			>
				<View style={styles.cartContainer}>
					<Icon.ShoppingCart
						height={theme.DLS.SIZE[4]}
						width={theme.DLS.SIZE[4]}
						stroke={theme.DLS.COLOR.BACKGROUND[500]}
						fill={theme.DLS.COLOR.BACKGROUND[500]}
					/>
					<View style={styles.itemCountContainer}>
						<Typography
							variant={'heading-sm-bold'}
							style={styles.itemCount}
						>
							{'1'}
						</Typography>
					</View>
				</View>
				<View style={styles.placeOrder}>
					<Typography
						variant={'heading-sm-bold'}
						style={styles.viewCartText}
					>
						{'Place Order'}
					</Typography>
					<Typography
						variant={'heading-sm-bold'}
						style={styles.totalAmount}
					>
						{'₹500'}
					</Typography>
				</View>
			</TouchableOpacity>
		</>
	);
};

export default RestaurantScreen;
