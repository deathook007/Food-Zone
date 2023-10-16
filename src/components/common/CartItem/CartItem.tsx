import Typography from '../../../dls/Typography';
import { generateStyles } from './CartItem.styles';
import { IMenuCardProps } from './CartItem.types';
import React, { useCallback } from 'react';
import { View, TouchableOpacity, Modal, Image } from 'react-native';
import * as Icon from 'react-native-feather';
import { useTheme } from 'styled-components/native';

const CartItem = (props: IMenuCardProps) => {
	const { title = '', rating = '', image = '', totalAmount = '' } = props;

	const theme = useTheme();
	const styles = generateStyles(theme);

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Typography variant={'body-base-bold'}>{title}</Typography>
			</View>
			<View style={styles.quantityContainer}>
				<TouchableOpacity activeOpacity={0.7}>
					<Icon.MinusCircle
						height={theme.DLS.SIZE[3]}
						width={theme.DLS.SIZE[3]}
						stroke={theme.DLS.COLOR.BACKGROUND[200]}
						fill={theme.DLS.COLOR.PRIMARY[500]}
					/>
				</TouchableOpacity>
				<View style={styles.menuImageContainer}>
					<Image
						source={{
							uri: 'https://raw.githubusercontent.com/deathook007/TestImages/main/Food.png',
						}}
						style={styles.image}
					/>
					<Typography
						variant={'heading-md-bold'}
						style={styles.count}
					>
						{'1'}
					</Typography>
				</View>
				<Typography variant={'heading-sm-bold'}>
					{totalAmount}
				</Typography>
			</View>
		</View>
	);
};

export default CartItem;