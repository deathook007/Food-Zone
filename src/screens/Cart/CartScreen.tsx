import {
	removeFromCart,
	selectCartItems,
	selectCartTotal,
} from '../../../slices/cartSlice';
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
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, TouchableOpacity, Image } from 'react-native';
import * as Icon from 'react-native-feather';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components/native';

const CartScreen = () => {
	const [groupItems, setGroupItems] = useState({});

	const cartItems = useSelector(selectCartItems);

	const cartTotal = useSelector(selectCartTotal);

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

	const dispatch = useDispatch();

	const handleBackPress = useCallback(() => {
		navigation.goBack();
	}, []);

	const handleOnPaceOrder = useCallback(() => {
		navigation.navigate(SCREEN_NAME.ORDER_PROCESSING as never);
	}, []);

	const handleRemoveItem = useCallback((idToRemove) => {
		dispatch(removeFromCart({ id: idToRemove }));
	}, []);

	useEffect(() => {
		const items = cartItems.reduce((group, item) => {
			if (group[item.id]) {
				group[item.id].push(item);
			} else {
				group[item.id] = [item];
			}
			return group;
		}, {});
		setGroupItems(items);
	}, [cartItems]);

	useEffect(() => {
		if (cartTotal === 0) {
			navigation.goBack();
		}
	}, [cartTotal]);

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
					{Object.entries(groupItems).map(([key, items]) => {
						let dish = items[0];
						return (
							<CartItem
								key={key}
								id={dish.id}
								title={dish.title}
								image={dish.image}
								totalAmount={dish.price}
								totalItem={items.length}
								handleRemoveItem={handleRemoveItem}
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
