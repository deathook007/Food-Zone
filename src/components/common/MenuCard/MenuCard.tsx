import { selectCartItemById } from '../../../../slices/cartSlice';
import Typography from '../../../dls/Typography';
import { generateStyles } from './MenuCard.styles';
import { IMenuCardProps } from './MenuCard.types';
import React, { useCallback } from 'react';
import { View, TouchableOpacity, Modal, Image } from 'react-native';
import * as Icon from 'react-native-feather';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components/native';

const MenuCard = (props: IMenuCardProps) => {
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
		modalVisible = true,
		handleNegativeCount,
		handlePositiveCount,
		setModalVisible,
		handleModalToggle,
	} = props;

	const theme = useTheme();
	const styles = generateStyles(theme);

	const totalItems = useSelector((state) => selectCartItemById(state, id));

	const handleModalPress = useCallback(() => {
		setModalVisible(false);
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.dishContainer}>
				<View style={styles.tagContainer}>
					{!!tag && (
						<>
							<Icon.Award
								height={theme.DLS.SIZE[2]}
								width={theme.DLS.SIZE[2]}
								stroke={theme.DLS.COLOR.ERROR[100]}
								fill={theme.DLS.COLOR.ERROR[500]}
								style={styles.award}
							/>
							<Typography
								variant={'body-base-bold'}
								style={styles.tag}
							>
								{tag}
							</Typography>
						</>
					)}
				</View>
				<Typography variant={'body-base-bold'} style={styles.title}>
					{title}
				</Typography>
				{!!actualPrice && (
					<View style={styles.priceContainer}>
						<Typography
							variant={'body-base-bold'}
							style={styles.discountedPrice}
						>
							{discountedPrice}
						</Typography>
						<Typography
							variant={'tag-bold'}
							style={styles.actualPrice}
						>
							{actualPrice}
						</Typography>
					</View>
				)}
				<View style={styles.ratingContainer}>
					<Icon.Star
						height={theme.DLS.SIZE[2]}
						width={theme.DLS.SIZE[2]}
						stroke={theme.DLS.COLOR.BACKGROUND[100]}
						fill={theme.DLS.COLOR.BACKGROUND[100]}
						style={styles.star}
					/>
					<Typography variant={'body-base-bold'}>{rating}</Typography>
				</View>
				{!!buttonText && (
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.descriptionContainer}
						onPress={handleModalToggle}
					>
						<Typography
							variant={'tag-bold'}
							style={styles.descriptionText}
						>
							{buttonText}
						</Typography>
						<Icon.ChevronRight
							height={theme.DLS.SIZE[2]}
							width={theme.DLS.SIZE[2]}
							stroke={theme.DLS.COLOR.BACKGROUND[300]}
						/>
					</TouchableOpacity>
				)}
			</View>
			<View style={styles.dishCountContainer}>
				<TouchableOpacity
					disabled={totalItems.length === 0}
					activeOpacity={0.7}
					onPress={() => handleNegativeCount(id)}
				>
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
							uri: image,
						}}
						style={styles.image}
					/>
				</View>
				<TouchableOpacity
					activeOpacity={0.7}
					onPress={() => handlePositiveCount(props)}
				>
					<Icon.PlusCircle
						height={theme.DLS.SIZE[4]}
						width={theme.DLS.SIZE[3]}
						stroke={theme.DLS.COLOR.BACKGROUND[200]}
						fill={theme.DLS.COLOR.PRIMARY[500]}
					/>
				</TouchableOpacity>
				<Typography variant={'heading-lg-bold'} style={styles.count}>
					{totalItems?.length}
				</Typography>
			</View>
			<Modal
				animationType='none'
				transparent={modalVisible}
				visible={modalVisible}
				onRequestClose={handleModalPress}
			>
				<TouchableOpacity
					activeOpacity={0.7}
					onPress={handleModalPress}
					style={styles.modal}
				/>
				<TouchableOpacity
					style={styles.imageContainer}
					onPress={handleModalPress}
				>
					<Icon.X
						height={theme.DLS.SIZE[3]}
						width={theme.DLS.SIZE[3]}
						stroke={theme.DLS.COLOR.BACKGROUND[300]}
						fill={theme.DLS.COLOR.BACKGROUND[300]}
					/>
				</TouchableOpacity>
				<View style={styles.modalContainer}>
					<Typography
						variant={'heading-sm-bold'}
						style={styles.modalTitle}
					>
						{`🍽️ Dish Highlights:`}
					</Typography>
					<View style={styles.titleContainer}>
						<Icon.Circle
							height={theme.DLS.SIZE[1]}
							width={theme.DLS.SIZE[1]}
							stroke={theme.DLS.COLOR.BACKGROUND[300]}
							fill={theme.DLS.COLOR.BACKGROUND[300]}
							style={styles.circle}
						/>
						<Typography
							variant={'body-base-regular'}
							style={styles.modalTitle}
						>
							{description}
						</Typography>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default MenuCard;
