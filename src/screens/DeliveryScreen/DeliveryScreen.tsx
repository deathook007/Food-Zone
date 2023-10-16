import DeliveryCard from '../../components/common/DeliveryCard/DeliveryCard';
import ProgressCard from '../../components/common/ProgressCard/ProgressCard';
import Typography from '../../dls/Typography';
import data from '../screenData.json';
import { hideDefaultHeaded } from '../utility/hideDefaultHeaded';
import { generateStyles } from './DeliveryScreen.styles';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Alert, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useTheme } from 'styled-components/native';

export const DeliveryScreen = () => {
	const { deliveryProcessing } = data || {};
	const {
		title = '',
		subtitle = '',
		latitude,
		longitude,
		latitudeDelta = 0.01,
		longitudeDelta = 0.01,
		name = '',
		deliveryPersonName = '',
		address = '',
		tag = '',
		url = '',
	} = deliveryProcessing || {};

	const theme = useTheme();

	hideDefaultHeaded();

	const styles = generateStyles(theme);

	const navigation = useNavigation();

	const handleOutgoingCall = useCallback(() => {
		Alert.alert('Handle outgoing calls! Work under progress');
	}, []);

	const handleCancelOrder = useCallback(() => {
		navigation.goBack();
	}, []);

	return (
		<View style={styles.container}>
			<MapView
				initialRegion={{
					latitude: latitude,
					longitude: longitude,
					latitudeDelta: latitudeDelta,
					longitudeDelta: longitudeDelta,
				}}
				mapType='standard'
				style={styles.map}
			>
				<Marker
					coordinate={{
						latitude: latitude,
						longitude: longitude,
					}}
					title={name}
					description={address}
					pinColor={theme.DLS.COLOR.ERROR[100]}
				/>
			</MapView>
			<View style={styles.deliveryDetails}>
				<View style={styles.deliveryPerson}>
					<DeliveryCard
						name={deliveryPersonName}
						tag={tag}
						url={url}
						handleOutgoingCall={handleOutgoingCall}
						handleCancelOrder={handleCancelOrder}
					/>
				</View>
			</View>
			<View style={styles.progressCard}>
				<ProgressCard title={title} subtitle={subtitle} />
			</View>
		</View>
	);
};
