import data from '../Data/onboarding.data.json';
import CarouselBullets from '../components/atomic/Carousal Bullets/CarousalBullets';
import CarousalCard from '../components/common/CarousalCard/CarousalCard';
import Typography from '../dls/Typography';
import { SCREEN_NAME } from './screens.names';
import { generateStyles } from './screens.styles';
import { hideDefaultHeaded } from './utility/hideDefaultHeaded';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Dimensions, FlatList, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components/native';

export const deviceWidth = Dimensions.get('window').width;
export let onboardingScreenEnds = false;

export const OnboardingScreen = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const carouselRef = useRef();

	const navigation = useNavigation();

	hideDefaultHeaded();

	const theme = useTheme();

	const styles = generateStyles(theme);

	const renderItem = useCallback(({ item }) => {
		return <CarousalCard {...item} />;
	}, []);

	const onScroll = useCallback((event) => {
		const index = event.nativeEvent.contentOffset.x / deviceWidth;
		const roundIndex = Math.round(index);
		setActiveIndex(roundIndex);
	}, []);

	const totalItems = useMemo(
		() => data?.carousalData?.length,
		[data?.carousalData?.length]
	);

	const checkOnboardingEndFlow = useMemo(() => {
		if (totalItems === 1) {
			return true;
		}
		if (activeIndex === totalItems - 1) {
			onboardingScreenEnds = true;
		}
		if (activeIndex === totalItems - 1 || onboardingScreenEnds) {
			return true;
		}
		return false;
	}, [activeIndex, totalItems]);

	const handleCompleteOnboarding = useCallback(() => {
		navigation.navigate(SCREEN_NAME.SIGNUP_SCREEN as never);
	}, []);

	return (
		<View style={styles.onboarding}>
			<FlatList
				ref={carouselRef}
				data={data?.carousalData}
				renderItem={renderItem}
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				pagingEnabled
				onScroll={onScroll}
			/>
			<TouchableOpacity
				style={styles.skipButtonContainer}
				activeOpacity={0.7}
				onPress={handleCompleteOnboarding}
			>
				<Typography variant={'tag-bold'} style={styles.skipButtonText}>
					{data?.skipButtonText}
				</Typography>
			</TouchableOpacity>
			<CarouselBullets
				length={data?.carousalData?.length}
				activeIndex={activeIndex}
			/>
			<View style={styles.button}>
				{checkOnboardingEndFlow && (
					<TouchableOpacity
						style={styles.buttonContainer}
						activeOpacity={0.7}
						onPress={handleCompleteOnboarding}
					>
						<Typography
							variant={'heading-sm-bold'}
							style={styles.buttonText}
						>
							{data?.orderNowText}
						</Typography>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};
