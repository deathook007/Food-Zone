import {
	addToCart,
	removeFromCart,
	selectCartItems,
	selectCartTotal,
} from '../../../slices/cartSlice';
import { setRestaurant } from '../../../slices/restaurantSlice';
import MenuCard from '../../components/common/MenuCard/MenuCard';
import RestaurantDetailsCard from '../../components/common/RestaurantDetailsCard/RestaurantDetailsCard';
import Typography from '../../dls/Typography';
import { SCREEN_NAME } from '../screens.names';
import { hideDefaultHeaded } from '../utility/hideDefaultHeaded';
import { generateStyles } from './RestaurantScreen.styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Image, TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-feather';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components/native';

const RestaurantScreen = () => {
	const { params } = useRoute();

	const { item }: any = params;

	const {
		id,
		url = '',
		title = '',
		subtitle = '',
		rating = '',
		deliveryTime = '',
		foodDescription = '',
		freeDeliveryText = '',
		menu = [],
	} = item || {};

	const cartItems = useSelector(selectCartItems);

	const totalItems = useSelector((state) => selectCartItems(state));

	const cartTotal = useSelector(selectCartTotal);

	hideDefaultHeaded();

	const [modalVisible, setModalVisible] = useState(false);

	const theme = useTheme();

	const styles = generateStyles(theme);

	const navigation = useNavigation();

	const dispatch = useDispatch();

	const handleModalToggle = useCallback(() => {
		setModalVisible((modalVisible) => !modalVisible);
	}, []);

	const handleCartNavigation = useCallback(() => {
		navigation.navigate(SCREEN_NAME.CART_SCREEN as never);
	}, []);

	const handleNegativeCount = useCallback((idToRemove) => {
		dispatch(removeFromCart({ id: idToRemove }));
	}, []);

	const handlePositiveCount = useCallback((menuToAdd) => {
		dispatch(addToCart({ ...menuToAdd }));
	}, []);

	useEffect(() => {
		if (item && item.id) {
			dispatch(setRestaurant({ ...item }));
		}
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
						price,
						rating = '',
						description = '',
						image = '',
						buttonText = '',
					} = item || {};
					return (
						<MenuCard
							id={id}
							key={id}
							tag={tag}
							title={title}
							actualPrice={actualPrice}
							discountedPrice={discountedPrice}
							price={price}
							rating={rating}
							description={description}
							image={image}
							buttonText={buttonText}
							modalVisible={modalVisible}
							setModalVisible={setModalVisible}
							handleModalToggle={handleModalToggle}
							handleNegativeCount={handleNegativeCount}
							handlePositiveCount={handlePositiveCount}
						/>
					);
				})}
				<View style={styles.utility} />
			</ScrollView>
			{cartItems.length > 0 && (
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
								{totalItems?.length}
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
							{`₹${cartTotal}`}
						</Typography>
					</View>
				</TouchableOpacity>
			)}
		</>
	);
};

export default RestaurantScreen;
