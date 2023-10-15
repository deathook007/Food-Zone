import { StyleSheet } from 'react-native';

export const generateStyles = (theme: any) => {
	return StyleSheet.create({
		restaurantPage: {
			width: '100%',
			backgroundColor: theme.DLS.COLOR.BACKGROUND[500],
		},
		imageContainer: {
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			height: theme.DLS.SIZE[40],
		},
		image: {
			width: '100%',
			height: '100%',
		},
		designContainer: {
			width: '100%',
			height: theme.DLS.SIZE[2],
			position: 'absolute',
			top: -theme.DLS.SIZE[2],
			borderTopLeftRadius: theme.DLS.BORDER_RADIUS[3],
			borderTopRightRadius: theme.DLS.BORDER_RADIUS[3],
			backgroundColor: theme.DLS.COLOR.BACKGROUND[500],
		},
		detailsContainer: {
			borderTopLeftRadius: theme.DLS.BORDER_RADIUS[3],
			borderTopRightRadius: theme.DLS.BORDER_RADIUS[3],
		},
		headingContainer: {
			textAlign: 'center',
			paddingHorizontal: theme.DLS.SIZE[2],
		},
		title: {
			color: theme.DLS.COLOR.TEXT.PRIMARY_TEXT,
			textShadowColor: theme.DLS.COLOR.PRIMARY[300],
		},
		subtitle: {
			color: theme.DLS.COLOR.TEXT.PRIMARY_TEXT,
			marginTop: theme.DLS.SIZE[0.5],
			textShadowColor: theme.DLS.COLOR.PRIMARY[300],
		},
		menuContainer: {},
	});
};
