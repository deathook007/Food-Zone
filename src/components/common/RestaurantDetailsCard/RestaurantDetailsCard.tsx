import Typography from '../../../dls/Typography';
import { generateStyles } from './RestaurantDetailsCard.styles';
import { IRestaurantDetailsCardProps } from './RestaurantDetailsCard.types';
import React from 'react';
import { View, Image } from 'react-native';
import * as Icon from 'react-native-feather';
import { useTheme } from 'styled-components/native';

const RestaurantDetailsCard = (props: IRestaurantDetailsCardProps) => {
	const {
		rating = '',
		deliveryTime = '',
		foodDescription = '',
		freeDeliveryText,
	} = props;

	const theme = useTheme();
	const styles = generateStyles(theme);

	return (
		<View style={styles.descriptionContainer}>
			<Image
				source={{
					uri: 'https://raw.githubusercontent.com/deathook007/TestImages/main/Food.png',
				}}
				style={styles.foodImage}
			/>
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
				<Icon.CheckCircle
					height={theme.DLS.SIZE[2]}
					width={theme.DLS.SIZE[2]}
					stroke={theme.DLS.COLOR.SUCCESS[500]}
					style={styles.checkCircle}
				/>
				<Typography
					variant={'body-base-bold'}
					style={styles.deliveryTime}
				>
					{`Delivery in ${deliveryTime}`}
				</Typography>
			</View>
			{!!foodDescription && (
				<View style={styles.textDescription}>
					<Icon.Info
						height={theme.DLS.SIZE[2]}
						width={theme.DLS.SIZE[2]}
						stroke={theme.DLS.COLOR.TEXT.SECONDARY_TEXT}
						style={styles.info}
					/>

					<Typography
						variant={'body-base-bold'}
						style={styles.foodDescription}
					>
						{foodDescription}
					</Typography>
				</View>
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
	);
};

export default RestaurantDetailsCard;
