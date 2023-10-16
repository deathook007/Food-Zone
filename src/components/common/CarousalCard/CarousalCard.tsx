import Typography from '../../../dls/Typography';
import { generateStyles } from './CarousalCard.styles';
import { ICarousalCardProps } from './CarousalCard.types';
import React from 'react';
import { Image, View } from 'react-native';
import { useTheme } from 'styled-components/native';

const CarousalCard = ({
	url = '',
	title = '',
	subtitle = '',
}: ICarousalCardProps) => {
	const theme = useTheme();
	const styles = generateStyles(theme);

	return (
		<View style={styles.cardContainer}>
			<Image style={styles.cardImage} source={{ uri: url }} />
			<Typography variant={'heading-lg-bold'} style={styles.cardTitle}>
				{title}
			</Typography>
			{!!subtitle && (
				<Typography
					variant={'subheading-bold'}
					style={styles.cardSubtitle}
				>
					{subtitle}
				</Typography>
			)}
		</View>
	);
};

export default CarousalCard;
