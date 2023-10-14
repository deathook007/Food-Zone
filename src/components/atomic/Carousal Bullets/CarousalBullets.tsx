import { ICarouselBulletsProps } from './CarousalBullets.types';
import { generateStyles } from './CarousalBulletsstyles';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

const CarouselBullets: React.FC<ICarouselBulletsProps> = (props) => {
	const { length, activeIndex } = props;

	const theme = useTheme();

	const styles = generateStyles(theme);

	const bullets = useMemo(() => Array(length).fill(0), [length]);

	return (
		<View style={styles.bulletContainer}>
			{bullets.map((_, index) => {
				const isActive = index === activeIndex;
				return (
					<View
						key={index}
						style={[
							styles.bullet,
							{
								backgroundColor: isActive
									? theme.DLS.COLOR.PRIMARY[500]
									: theme.DLS.COLOR.PRIMARY[300],
							},
						]}
					/>
				);
			})}
		</View>
	);
};

export default CarouselBullets;
