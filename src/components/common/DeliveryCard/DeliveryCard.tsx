import Typography from '../../../dls/Typography';
import { generateStyles } from './DeliveryCard.styles';
import { IDeliveryCardProps } from './DeliveryCard.types';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-feather';
import { useTheme } from 'styled-components/native';

const DeliveryCard = (props: IDeliveryCardProps) => {
	const {
		name = '',
		tag = '',
		url = '',
		handleOutgoingCall,
		handleCancelOrder,
	} = props;

	const theme = useTheme();
	const styles = generateStyles(theme);

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={{ uri: url }} style={styles.image} />
			</View>
			<View style={styles.timeContainer}>
				<Typography variant={'cta-label-bold'} style={styles.name}>
					{name}
				</Typography>
				<Typography variant={'cta-label-bold'} style={styles.tag}>
					{tag}
				</Typography>
			</View>
			<View style={styles.iconContainer}>
				<TouchableOpacity
					activeOpacity={0.7}
					onPress={handleOutgoingCall}
					style={styles.phone}
				>
					<Icon.PhoneCall
						height={theme.DLS.SIZE[3]}
						width={theme.DLS.SIZE[3]}
						stroke={theme.DLS.COLOR.SUCCESS[500]}
						fill={theme.DLS.COLOR.SUCCESS[300]}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.7}
					onPress={handleCancelOrder}
					style={styles.cross}
				>
					<Icon.X
						height={theme.DLS.SIZE[3]}
						width={theme.DLS.SIZE[3]}
						stroke={theme.DLS.COLOR.ERROR[500]}
						fill={theme.DLS.COLOR.ERROR[400]}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default DeliveryCard;
