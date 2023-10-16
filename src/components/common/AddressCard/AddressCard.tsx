import Typography from '../../../dls/Typography';
import { generateStyles } from './AddressCard.styles';
import { IAddressCardProps } from './AddressCard.types';
import React, { useCallback } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import * as Icon from 'react-native-feather';
import { useTheme } from 'styled-components/native';

const AddressCard = (props: IAddressCardProps) => {
	const { timeFromHome = '', tag = '', currentAddress = '' } = props;

	const theme = useTheme();
	const styles = generateStyles(theme);

	const handleAddressChange = useCallback(() => {
		Alert.alert(
			'BottomSheet For Add, Edit and Remove address! Work under progress'
		);
	}, []);

	return (
		<View style={styles.descriptionContainer}>
			<View style={styles.deliveryTimeContainer}>
				<View style={styles.iconContainer}>
					<Icon.Home
						height={theme.DLS.SIZE[2]}
						width={theme.DLS.SIZE[2]}
						stroke={theme.DLS.COLOR.BACKGROUND[200]}
						fill={theme.DLS.COLOR.BACKGROUND[500]}
					/>
				</View>
				<View style={styles.deliveryContainer}>
					<Typography variant={'cta-label-bold'}>
						{timeFromHome}
					</Typography>
					{!!tag && (
						<Typography
							variant={'body-base-bold'}
							style={styles.distance}
						>
							{tag}
						</Typography>
					)}
				</View>
			</View>
			<View style={styles.deliveryAddressContainer}>
				<Typography
					variant={'body-base-bold'}
					style={styles.distance}
					numberOfLines={2}
					ellipsizeMode='tail'
				>
					{currentAddress}
				</Typography>
				<TouchableOpacity onPress={handleAddressChange}>
					<Icon.ChevronDown
						height={theme.DLS.SIZE[2]}
						width={theme.DLS.SIZE[2]}
						stroke={theme.DLS.COLOR.BACKGROUND[200]}
						fill={theme.DLS.COLOR.BACKGROUND[500]}
						style={styles.chevron}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default AddressCard;
