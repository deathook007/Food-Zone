import Typography from '../../dls/Typography';
import data from '../screenData.json';
import { SCREEN_NAME } from '../screens.names';
import { hideDefaultHeaded } from '../utility/hideDefaultHeaded';
import { generateStyles } from './OrderProcessing.styles';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useTheme } from 'styled-components/native';

export const OrderProcessing = () => {
	const { orderProcessing } = data || {};
	const { title = '', subtitle = '' } = orderProcessing || {};

	const theme = useTheme();

	const navigation = useNavigation() as any;

	hideDefaultHeaded();

	const styles = generateStyles(theme);

	useEffect(() => {
		setTimeout(() => {
			navigation.replace(SCREEN_NAME.DELIVERY_SCREEN as never);
		}, 3000);
	}, []);

	return (
		<View style={styles.container}>
			<Image
				source={require('../../../assets/delivery.gif')}
				style={styles.image}
			/>
			<View style={styles.textContainer}>
				<Typography variant={'heading-md-bold'} style={styles.title}>
					{title}
				</Typography>
				<Typography variant={'cta-label-bold'} style={styles.subtitle}>
					{subtitle}
				</Typography>
			</View>
		</View>
	);
};
