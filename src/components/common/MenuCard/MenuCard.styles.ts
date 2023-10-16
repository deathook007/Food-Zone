import { StyleSheet } from 'react-native';

export const generateStyles = (theme: any) => {
	return StyleSheet.create({
		container: {
			flexDirection: 'row',
			padding: theme.DLS.SIZE[2],
			marginHorizontal: theme.DLS.SIZE[2],
			marginTop: theme.DLS.SIZE[2],
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
		dishContainer: {
			width: theme.DLS.SIZE[19],
			flexDirection: 'column',
		},
		tagContainer: {
			flexDirection: 'row',
		},
		award: {
			marginRight: theme.DLS.SIZE[0.5],
		},
		tag: {
			color: theme.DLS.COLOR.ERROR[100],
		},
		title: {
			marginTop: theme.DLS.SIZE[0.5],
		},
		modalTitle: {
			textShadowColor: theme.DLS.COLOR.SECONDARY[300],
			textShadowRadius: 0.5,
			textShadowOffset: {
				width: 0,
				height: 0.5,
			},
			marginTop: theme.DLS.SIZE[0.5],
		},
		priceContainer: {
			marginTop: theme.DLS.SIZE[0.25],
			flexDirection: 'row',
			alignItems: 'flex-end',
		},
		discountedPrice: {
			marginRight: theme.DLS.SIZE[0.5],
		},
		actualPrice: {
			textDecorationLine: 'line-through',
		},
		ratingContainer: {
			marginTop: theme.DLS.SIZE[0.5],
			flexDirection: 'row',
		},
		star: {
			marginRight: theme.DLS.SIZE[0.5],
		},
		dishCountContainer: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
		},
		descriptionContainer: {
			alignSelf: 'flex-start',
			paddingHorizontal: theme.DLS.SIZE[1],
			paddingVertical: theme.DLS.SIZE[0.25],
			borderWidth: theme.DLS.STROKE[2],
			borderRadius: theme.DLS.BORDER_RADIUS[3],
			borderColor: theme.DLS.COLOR.DIVIDER.SECONDARY_DIVIDER,
			backgroundColor: theme.DLS.COLOR.PRIMARY[500],
			marginTop: theme.DLS.SIZE[1],
			flexDirection: 'row',
		},
		descriptionText: {},
		modal: {
			flex: 1,
			backgroundColor: 'rgba(0,0,0,0.5)',
		},
		imageContainer: {
			position: 'absolute',
			alignSelf: 'center',
			padding: theme.DLS.SIZE[0.5],
			top: theme.DLS.SIZE[34],
			borderRadius: theme.DLS.BORDER_RADIUS[3],
			backgroundColor: theme.DLS.COLOR.BACKGROUND[500],
		},
		modalContainer: {
			position: 'absolute',
			alignSelf: 'center',
			width: '70%',
			height: theme.DLS.SIZE[20],
			top: theme.DLS.SIZE[40],
			padding: theme.DLS.SIZE[2],
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
		titleContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			marginTop: theme.DLS.SIZE[1],
		},
		circle: {
			marginRight: theme.DLS.SIZE[1],
			marginTop: theme.DLS.SIZE[0.5],
		},
		menuImageContainer: {
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			width: theme.DLS.SIZE[10],
			height: theme.DLS.SIZE[10],
			borderRadius: theme.DLS.BORDER_RADIUS[3],
			marginHorizontal: theme.DLS.SIZE[1],
			opacity: 0.7,
		},
		image: {
			width: '100%',
			height: '100%',
			resizeMode: 'cover',
			borderRadius: theme.DLS.BORDER_RADIUS[3],
		},
		count: {
			position: 'absolute',
			color: theme.DLS.COLOR.SECONDARY[300],
			textShadowColor: theme.DLS.COLOR.SECONDARY[500],
			textShadowRadius: 1,
			textShadowOffset: {
				width: 2,
				height: 2,
			},
			marginTop: theme.DLS.SIZE[0.5],
		},
	});
};
