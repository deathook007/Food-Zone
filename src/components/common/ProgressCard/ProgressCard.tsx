import Typography from '../../../dls/Typography';
import { generateStyles } from './ProgressCard.styles';
import { IProgressCardProps } from './ProgressCard.types';
import React from 'react';
import { View, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import { useTheme } from 'styled-components/native';

const ProgressCard = (props: IProgressCardProps) => {
	const { title = '', subtitle = '' } = props;

	const theme = useTheme();
	const styles = generateStyles(theme);

	return (
		<View style={styles.container}>
			<View style={styles.timeContainer}>
				<Typography variant={'cta-label-bold'} style={styles.title}>
					{title}
				</Typography>
				<Typography variant={'cta-label-bold'} style={styles.subtitle}>
					{subtitle}
				</Typography>
				<Progress.Bar
					color={theme.DLS.COLOR.BACKGROUND[100]}
					indeterminate={true}
					indeterminateAnimationDuration={2000}
					borderWidth={2}
				/>
			</View>
			<View style={styles.imageContainer}>
				<Image
					source={require('../../../../assets/foodDelivery.gif')}
					style={styles.image}
				/>
			</View>
		</View>
	);
};

export default ProgressCard;
