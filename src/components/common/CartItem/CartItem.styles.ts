import { StyleSheet } from 'react-native';

export const generateStyles = (theme: any) => {
	return StyleSheet.create({
		container: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			paddingHorizontal: theme.DLS.SIZE[2],
			paddingVertical: theme.DLS.SIZE[1],
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
		titleContainer: {
			width: '40%',
			flexDirection: 'column',
		},
		quantityContainer: {
			width: '60%',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignContent: 'center',
			alignItems: 'center',
		},
		menuImageContainer: {
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			width: theme.DLS.SIZE[7],
			height: theme.DLS.SIZE[7],
			borderRadius: theme.DLS.SIZE[7],
			marginHorizontal: theme.DLS.SIZE[1],
		},
		image: {
			width: '100%',
			height: '100%',
			resizeMode: 'cover',
			borderRadius: theme.DLS.SIZE[7],
			opacity: 0.6,
		},
		count: {
			position: 'absolute',
			textShadowColor: theme.DLS.COLOR.SECONDARY[300],
			textShadowRadius: 0.5,
			textShadowOffset: {
				width: 1,
				height: 1,
			},
			marginTop: theme.DLS.SIZE[0.5],
		},
	});
};
