import { StyleSheet } from 'react-native';

export const generateStyles = (theme: any) => {
	return StyleSheet.create({
		onboarding: {
			flex: 1,
			width: '100%',
			backgroundColor: theme.DLS.COLOR.PRIMARY[100],
		},
		button: {
			marginHorizontal: theme.DLS.SIZE[8],
			marginBottom: theme.DLS.SIZE[8],
		},
		buttonContainer: {
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			paddingHorizontal: theme.DLS.SIZE[1],
			paddingVertical: theme.DLS.SIZE[2],
			borderRadius: theme.DLS.BORDER_RADIUS[2],
			borderWidth: theme.DLS.STROKE[0.5],
			borderColor: theme.DLS.COLOR.PRIMARY[500],
			backgroundColor: theme.DLS.COLOR.PRIMARY[300],
		},
		buttonText: {
			color: theme.DLS.COLOR.PRIMARY[500],
			textShadowColor: theme.DLS.COLOR.PRIMARY[100],
			textShadowRadius: 1,
			textShadowOffset: {
				width: 1,
				height: 1,
			},
		},
		skipButtonContainer: {
			position: 'absolute',
			right: theme.DLS.SIZE[1],
			top: theme.DLS.SIZE[5],
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			paddingHorizontal: theme.DLS.SIZE[1],
			paddingVertical: theme.DLS.SIZE[1],
			borderRadius: theme.DLS.BORDER_RADIUS[2],
			backgroundColor: theme.DLS.COLOR.PRIMARY[200],
		},
		skipButtonText: {
			color: theme.DLS.COLOR.PRIMARY[500],
			textShadowColor: theme.DLS.COLOR.PRIMARY[100],
			textShadowRadius: 1,
			textShadowOffset: {
				width: 1,
				height: 1,
			},
		},
		homePage: {
			backgroundColor: theme.DLS.COLOR.BACKGROUND[500],
		},
		featuredFood: {
			flexDirection: 'column',
		},
		restaurantSection: {
			marginTop: theme.DLS.SIZE[2],
		},
		headingSection: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginHorizontal: theme.DLS.SIZE[2],
			marginTop: theme.DLS.SIZE[1],
		},
		headingContainer: {
			flexDirection: 'column',
		},
		heading: {
			color: theme.DLS.COLOR.TEXT.PRIMARY_TEXT,
		},
		subheading: {
			marginTop: theme.DLS.SIZE[0.25],
		},
		seeAllButtonContainer: {
			padding: theme.DLS.SIZE[1],
		},
		seeAllText: {
			color: theme.DLS.COLOR.BACKGROUND[200],
		},
	});
};
