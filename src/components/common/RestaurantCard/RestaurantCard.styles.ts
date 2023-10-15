import { StyleSheet } from 'react-native';

export const generateStyles = (theme: any) => {
	return StyleSheet.create({
		container: {
			width: theme.DLS.SIZE[28],
			flexDirection: 'column',
			marginHorizontal: theme.DLS.SIZE[1],
			marginBottom: theme.DLS.SIZE[1],
			borderRadius: theme.DLS.BORDER_RADIUS[3],
			backgroundColor: theme.DLS.COLOR.BACKGROUND[500],
			marginTop: theme.DLS.SIZE[2],
			shadowOffset: {
				width: 1,
				height: 1,
			},
			shadowOpacity: 0.25,
			shadowRadius: 3,
			elevation: 3,
		},
		imageContainer: {
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			width: '100%',
			height: theme.DLS.SIZE[15],
			borderTopLeftRadius: theme.DLS.BORDER_RADIUS[3],
			borderTopRightRadius: theme.DLS.BORDER_RADIUS[3],
		},
		image: {
			width: '100%',
			height: '100%',
			borderTopLeftRadius: theme.DLS.BORDER_RADIUS[3],
			borderTopRightRadius: theme.DLS.BORDER_RADIUS[3],
		},
		descriptionContainer: {
			textAlign: 'center',
			padding: theme.DLS.SIZE[2],
		},
		ratingContainer: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginTop: theme.DLS.SIZE[0.5],
		},
		rating: {
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
		ratingText: {
			marginLeft: theme.DLS.SIZE[0.5],
		},
		deliveryTime: {
			color: theme.DLS.COLOR.SUCCESS[500],
		},
		foodDescription: {
			marginTop: theme.DLS.SIZE[0.5],
			color: theme.DLS.COLOR.TEXT.SECONDARY_TEXT,
		},
		freeDeliveryContainer: {
			alignSelf: 'flex-start',
			marginTop: theme.DLS.SIZE[1],
			borderRadius: theme.DLS.BORDER_RADIUS[3],
			borderWidth: theme.DLS.STROKE[2],
			borderColor: theme.DLS.COLOR.BACKGROUND[200],
			backgroundColor: theme.DLS.COLOR.SECONDARY[500],
			shadowOffset: {
				width: 1,
				height: 1,
			},
			shadowOpacity: 0.25,
			shadowRadius: 3,
			elevation: 3,
		},
		freeDeliveryText: {
			color: theme.DLS.COLOR.PRIMARY[200],
			padding: theme.DLS.SIZE[1],
			textShadowColor: theme.DLS.COLOR.PRIMARY[200],
			textShadowRadius: 0.5,
			textShadowOffset: {
				width: 0,
				height: 1,
			},
			textTransform: 'uppercase',
		},
		discountContainer: {
			position: 'absolute',
			top: theme.DLS.SIZE[1],
			right: theme.DLS.SIZE[1],
			alignSelf: 'flex-start',
			borderWidth: theme.DLS.STROKE[2],
			borderRadius: theme.DLS.BORDER_RADIUS[1],
			borderColor: theme.DLS.COLOR.BACKGROUND[200],
			backgroundColor: theme.DLS.COLOR.ERROR[100],
			shadowOffset: {
				width: 1,
				height: 1,
			},
			shadowOpacity: 0.25,
			shadowRadius: 3,
			elevation: 3,
		},
		discountText: {
			color: theme.DLS.COLOR.PRIMARY[500],
			paddingHorizontal: theme.DLS.SIZE[1],
			paddingVertical: theme.DLS.SIZE[0.25],
			textShadowColor: theme.DLS.COLOR.PRIMARY[200],
			textShadowRadius: 0.5,
			textShadowOffset: {
				width: 0,
				height: 1,
			},
			textTransform: 'uppercase',
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
	});
};
