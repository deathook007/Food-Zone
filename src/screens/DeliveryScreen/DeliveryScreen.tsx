import Typography from '../../dls/Typography';
import data from '../screenData.json';
import { hideDefaultHeaded } from '../utility/hideDefaultHeaded';
import { generateStyles } from './DeliveryScreen.styles';
import { View, Image } from 'react-native';
import { useTheme } from 'styled-components/native';

export const DeliveryScreen = () => {
	const { deliveryProcessing } = data || {};
	const {} = deliveryProcessing || {};

	const theme = useTheme();

	hideDefaultHeaded();

	const styles = generateStyles(theme);

	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Typography variant={'heading-md-bold'} style={styles.title}>
					{'title'}
				</Typography>
				<Typography variant={'cta-label-bold'} style={styles.subtitle}>
					{'subtitle'}
				</Typography>
			</View>
		</View>
	);
};
