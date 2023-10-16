import Typography from '../../../dls/Typography';
import { generateStyles } from './RestaurantCard.styles';
import { IRestaurantCardProps } from './RestaurantCard.types';
import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-feather';
import { useTheme } from 'styled-components/native';

const RestaurantCard = (props: IRestaurantCardProps) => {
	const {
		ulr = '',
		title = '',
		subtitle = '',
		rating = '',
		deliveryTime = '',
		foodDescription = '',
		freeDeliveryText = '',
		discount,
		handleVegRestaurantNavigation,
	} = props;

	const theme = useTheme();
	const styles = generateStyles(theme);

	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={() => handleVegRestaurantNavigation(props)}
			style={styles.container}
		>
			<View style={styles.imageContainer}>
				<Image source={{ uri: ulr }} style={styles.image} />
			</View>
			<View style={styles.descriptionContainer}>
				<Typography variant={'subheading-bold'} style={styles.title}>
					{title}
				</Typography>
				<Typography variant={'body-base-bold'} style={styles.subtitle}>
					{subtitle}
				</Typography>
				<View style={styles.ratingContainer}>
					<View style={styles.rating}>
						<Icon.Star
							height={theme.DLS.SIZE[2]}
							width={theme.DLS.SIZE[2]}
							stroke={theme.DLS.COLOR.BACKGROUND[100]}
							fill={theme.DLS.COLOR.BACKGROUND[100]}
						/>
						<Typography
							variant={'body-base-bold'}
							style={styles.ratingText}
						>
							{rating}
						</Typography>
					</View>
					<Typography
						variant={'body-base-bold'}
						style={styles.deliveryTime}
					>
						{deliveryTime}
					</Typography>
				</View>
				{!!foodDescription && (
					<Typography
						variant={'body-base-bold'}
						style={styles.foodDescription}
					>
						{foodDescription}
					</Typography>
				)}
				{!!freeDeliveryText && (
					<View style={styles.freeDeliveryContainer}>
						<Typography
							variant={'body-base-bold'}
							style={styles.freeDeliveryText}
						>
							{freeDeliveryText}
						</Typography>
					</View>
				)}
			</View>
			{!!discount && (
				<View style={styles.discountContainer}>
					<Typography
						variant={'body-base-bold'}
						style={styles.discountText}
					>
						{discount}
					</Typography>
				</View>
			)}
		</TouchableOpacity>
	);
};

export default RestaurantCard;
