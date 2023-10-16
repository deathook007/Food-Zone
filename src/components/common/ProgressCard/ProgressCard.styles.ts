import { StyleSheet } from 'react-native';

export const generateStyles = (theme: any) => {
	return StyleSheet.create({
		container: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginHorizontal: theme.DLS.SIZE[2],
			marginVertical: theme.DLS.SIZE[2],
			paddingHorizontal: theme.DLS.SIZE[2],
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
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
		},
		imageContainer: {
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			width: theme.DLS.SIZE[15],
			height: theme.DLS.SIZE[15],
			borderRadius: theme.DLS.BORDER_RADIUS[3],
		},
		image: {
			width: '100%',
			height: '100%',
			borderRadius: theme.DLS.BORDER_RADIUS[3],
			resizeMode: 'contain',
		},
		title: {
			textAlign: 'center',
			textShadowColor: theme.DLS.COLOR.PRIMARY[200],
			textShadowRadius: 1,
			textShadowOffset: {
				width: 0,
				height: 1,
			},
			color: theme.DLS.COLOR.PRIMARY[200],
		},
		subtitle: {
			textAlign: 'center',
			marginTop: theme.DLS.SIZE[1],
			color: theme.DLS.COLOR.PRIMARY[300],
			marginBottom: theme.DLS.SIZE[2],
		},
	});
};
