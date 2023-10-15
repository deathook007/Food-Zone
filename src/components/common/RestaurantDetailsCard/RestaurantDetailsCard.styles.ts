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
		descriptionContainer: {
			textAlign: 'center',
			padding: theme.DLS.SIZE[2],
			marginHorizontal: theme.DLS.SIZE[2],
			marginVertical: theme.DLS.SIZE[2],
			borderWidth: theme.DLS.STROKE[2],
			borderRadius: theme.DLS.BORDER_RADIUS[3],
			borderColor: theme.DLS.COLOR.DIVIDER.SECONDARY_DIVIDER,
			backgroundColor: theme.DLS.COLOR.SECONDARY[500],
			shadowOffset: {
				width: 1,
				height: 1,
			},
			shadowOpacity: 0.25,
			shadowRadius: 3,
			elevation: 3,
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
		foodImage: {
			position: 'absolute',
			right: theme.DLS.SIZE[0.5],
			bottom: theme.DLS.SIZE[0.25],
			width: theme.DLS.SIZE[11],
			height: theme.DLS.SIZE[11],
		},
		ratingContainer: {
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
		rating: {
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
		ratingText: {
			marginLeft: theme.DLS.SIZE[0.5],
		},
		checkCircle: {
			marginLeft: theme.DLS.SIZE[8],
		},
		info: {
			marginRight: theme.DLS.SIZE[1],
			marginTop: theme.DLS.SIZE[1],
		},
		deliveryTime: {
			color: theme.DLS.COLOR.SUCCESS[500],
		},
		textDescription: {
			flexDirection: 'row',
			marginVertical: theme.DLS.SIZE[0.5],
		},
		foodDescription: {
			marginTop: theme.DLS.SIZE[1],
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
	});
};
