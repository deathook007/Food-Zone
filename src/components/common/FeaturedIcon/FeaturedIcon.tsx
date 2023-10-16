import Typography from '../../../dls/Typography';
import { generateStyles } from './FeaturedIcon.styles';
import { IFeaturedIconProps } from './FeaturedIcon.types';
import React from 'react';
import { Image, View } from 'react-native';
import { useTheme } from 'styled-components/native';

const FeaturedIcon = (props: IFeaturedIconProps) => {
	const { ulr = '', description = '' } = props;

	const theme = useTheme();
	const styles = generateStyles(theme);

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={{ uri: ulr }} style={styles.image} />
			</View>
			<Typography variant={'body-base-bold'} style={styles.description}>
				{description}
			</Typography>
		</View>
	);
};

export default FeaturedIcon;
