import ProgressCard from '../../components/common/ProgressCard/ProgressCard';
import Typography from '../../dls/Typography';
import data from '../screenData.json';
import { hideDefaultHeaded } from '../utility/hideDefaultHeaded';
import { generateStyles } from './DeliveryScreen.styles';
import { View, Image } from 'react-native';
import { useTheme } from 'styled-components/native';

export const DeliveryScreen = () => {
	const { deliveryProcessing } = data || {};
	const { title = '', subtitle = '' } = deliveryProcessing || {};

	const theme = useTheme();

	hideDefaultHeaded();

	const styles = generateStyles(theme);

	return (
		<View style={styles.container}>
			<ProgressCard title={title} subtitle={subtitle} />
		</View>
	);
};
