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
	});
};
