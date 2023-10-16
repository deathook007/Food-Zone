import { StyleSheet } from 'react-native';

export const generateStyles = (theme: any) => {
	return StyleSheet.create({
		container: {
			width: theme.DLS.SIZE[42],
			flexDirection: 'row',
			paddingHorizontal: theme.DLS.SIZE[2],
			paddingVertical: theme.DLS.SIZE[1],
			borderWidth: theme.DLS.STROKE[3],
			borderRadius: theme.DLS.BORDER_RADIUS[3],
			borderColor: theme.DLS.COLOR.DIVIDER.SECONDARY_DIVIDER,
			backgroundColor: theme.DLS.COLOR.PRIMARY[500],
			shadowOffset: {
				width: 1,
				height: 1,
			},
			shadowOpacity: 0.25,
			shadowRadius: 3,
			elevation: 3,
		},
		timeContainer: {
			flexDirection: 'column',
			paddingTop: theme.DLS.SIZE[2],
			marginLeft: theme.DLS.SIZE[3],
		},
		imageContainer: {
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			width: theme.DLS.SIZE[10],
			height: theme.DLS.SIZE[10],
			borderRadius: theme.DLS.SIZE[5],
		},
		image: {
			width: '100%',
			height: '100%',
			borderRadius: theme.DLS.SIZE[5],
			resizeMode: 'cover',
		},
		name: {
			textShadowColor: theme.DLS.COLOR.PRIMARY[200],
			textShadowRadius: 1,
			textShadowOffset: {
				width: 0,
				height: 1,
			},
			color: theme.DLS.COLOR.PRIMARY[200],
		},
		tag: {
			marginTop: theme.DLS.SIZE[1],
			color: theme.DLS.COLOR.PRIMARY[300],
			marginBottom: theme.DLS.SIZE[2],
		},
		iconContainer: {
			width: theme.DLS.SIZE[10],
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignContent: 'center',
			alignItems: 'center',
			marginLeft: theme.DLS.SIZE[2],
		},
		phone: {
			padding: theme.DLS.SIZE[1],
			marginRight: theme.DLS.SIZE[1],
			borderWidth: theme.DLS.STROKE[3],
			borderRadius: theme.DLS.BORDER_RADIUS[3],
			backgroundColor: theme.DLS.COLOR.SUCCESS[300],
			borderColor: theme.DLS.COLOR.SUCCESS[500],
		},
		cross: {
			padding: theme.DLS.SIZE[1],
			borderWidth: theme.DLS.STROKE[3],
			borderRadius: theme.DLS.BORDER_RADIUS[3],
			backgroundColor: theme.DLS.COLOR.ERROR[300],
			borderColor: theme.DLS.COLOR.ERROR[500],
		},
	});
};
