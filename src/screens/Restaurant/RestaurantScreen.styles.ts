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
		stickyCart: {
			position: 'absolute',
			flexDirection: 'row',
			bottom: theme.DLS.SIZE[2],
			width: '95%',
			alignSelf: 'center',
			padding: theme.DLS.SIZE[2],
			borderWidth: theme.DLS.STROKE[2],
			borderRadius: theme.DLS.BORDER_RADIUS[3],
			borderColor: theme.DLS.COLOR.SUCCESS[500],
			backgroundColor: theme.DLS.COLOR.SUCCESS[500],
		},
		cartContainer: {
			width: '40%',
			flexDirection: 'row',
		},
		itemCountContainer: {
			paddingHorizontal: theme.DLS.SIZE[1],
			paddingVertical: theme.DLS.SIZE[0.25],
			borderWidth: theme.DLS.STROKE[3],
			borderRadius: theme.DLS.BORDER_RADIUS[3],
			borderColor: theme.DLS.COLOR.BACKGROUND[500],
			backgroundColor: theme.DLS.COLOR.SUCCESS[500],
			marginLeft: theme.DLS.SIZE[2],
		},
		itemCount: {
			color: theme.DLS.COLOR.BACKGROUND[500],
			textShadowColor: theme.DLS.COLOR.SUCCESS[100],
			textShadowRadius: 0.5,
			textShadowOffset: {
				width: 1,
				height: 1,
			},
		},
		placeOrder: {
			width: '60%',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignSelf: 'center',
		},
		viewCartText: {
			color: theme.DLS.COLOR.BACKGROUND[500],
			textShadowColor: theme.DLS.COLOR.BACKGROUND[500],
			textShadowRadius: 1,
			textShadowOffset: {
				width: 1,
				height: 1,
			},
		},
		totalAmount: {
			color: theme.DLS.COLOR.BACKGROUND[500],
			textShadowColor: theme.DLS.COLOR.BACKGROUND[500],
			textShadowRadius: 1,
			textShadowOffset: {
				width: 1,
				height: 1,
			},
		},
	});
};
