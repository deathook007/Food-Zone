import AddressCard from '../../components/common/AddressCard/AddressCard';
import Typography from '../../dls/Typography';
import data from '../screenData.json';
import { hideDefaultHeaded } from '../utility/hideDefaultHeaded';
import { generateStyles } from './CartScreen.styles';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-feather';
import { useTheme } from 'styled-components/native';

const CartScreen = () => {
	hideDefaultHeaded();

	const { address } = data || {};

	const { timeFromHome = '', tag = '', currentAddress = '' } = address || {};

	const theme = useTheme();

	const styles = generateStyles(theme);

	const navigation = useNavigation();

	const handleBackPress = useCallback(() => {
		navigation.goBack();
	}, []);

	return (
		<ScrollView style={styles.cartScreen}>
			<View style={styles.header}>
				<TouchableOpacity activeOpacity={0.7} onPress={handleBackPress}>
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
		</ScrollView>
	);
};

export default CartScreen;
