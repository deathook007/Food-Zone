import { selectRestaurant } from '../../../slices/restaurantSlice';
import AddressCard from '../../components/common/AddressCard/AddressCard';
import CartItem from '../../components/common/CartItem/CartItem';
import PaymentSummary from '../../components/common/PaymentSummary/PaymentSummary';
import Typography from '../../dls/Typography';
import data from '../screenData.json';
import { SCREEN_NAME } from '../screens.names';
import { hideDefaultHeaded } from '../utility/hideDefaultHeaded';
import { generateStyles } from './CartScreen.styles';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { ScrollView, View, TouchableOpacity, Image } from 'react-native';
import * as Icon from 'react-native-feather';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components/native';

const CartScreen = () => {
	const restaurant = useSelector(selectRestaurant);
	hideDefaultHeaded();

	const { address, amountSummary = [] } = data || {};

	const {
		url = '',
		timeFromHome = '',
		tag = '',
		currentAddress = '',
	} = address || {};

	const theme = useTheme();

	const styles = generateStyles(theme);

	const navigation = useNavigation();

	const handleBackPress = useCallback(() => {
		navigation.goBack();
	}, []);

	const handleOnPaceOrder = useCallback(() => {
		navigation.navigate(SCREEN_NAME.ORDER_PROCESSING as never);
	}, []);

	return (
		<>
			<ScrollView style={styles.cartScreen}>
				<View>
					<Image source={{ uri: url }} style={styles.image} />
					<View style={styles.header}>
						<TouchableOpacity
							activeOpacity={0.7}
							onPress={handleBackPress}
						>
							<Icon.ArrowLeftCircle
								height={theme.DLS.SIZE[5]}
								width={theme.DLS.SIZE[5]}
								stroke={theme.DLS.COLOR.BACKGROUND[500]}
								fill={theme.DLS.COLOR.BACKGROUND[100]}
							/>
						</TouchableOpacity>
						<View style={styles.title}>
							<Typography
								variant={'heading-md-bold'}
								style={styles.title}
							>
								{'Cart Checkout'}
							</Typography>
						</View>
					</View>
					<AddressCard
						timeFromHome={timeFromHome}
						tag={tag}
						currentAddress={currentAddress}
					/>
				</View>
				<View style={styles.cartItems}>
					{restaurant.menu.map((item) => {
						return (
							<CartItem
								key={item.id}
								title={item.title}
								rating={item.rating}
								image={item.image}
								totalAmount={item.discountedPrice}
							/>
						);
					}, [])}
				</View>
			</ScrollView>
			<View style={styles.orderSummary}>
				<PaymentSummary
					amountSummary={amountSummary}
					handleOnPaceOrder={handleOnPaceOrder}
				/>
			</View>
		</>
	);
};

export default CartScreen;
