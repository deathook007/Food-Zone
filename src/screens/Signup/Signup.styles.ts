import { StyleSheet } from 'react-native';

export const generateStyles = (theme: any) => {
	return StyleSheet.create({
		container: {
			width: '100%',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: theme.DLS.COLOR.BACKGROUND[500],
		},
		imageContainer: {
			width: '100%',
			height: '55%',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			backgroundColor: theme.DLS.COLOR.BACKGROUND[100],
			borderBottomRightRadius: '80%',
		},
		image: {
			width: '100%',
			height: '55%',
			resizeMode: 'contain',
		},
		formContainer: {
			width: '100%',
			height: '45%',
			paddingTop: theme.DLS.SIZE[3],
		},
		heading: {
			paddingHorizontal: theme.DLS.SIZE[3],
			color: theme.DLS.COLOR.TEXT.PRIMARY_TEXT,
			textAlign: 'center',
			textShadowColor: theme.DLS.COLOR.PRIMARY[300],
			textShadowRadius: 1,
			textShadowOffset: {
				width: 1,
				height: 1,
			},
		},
		subheading: {
			textAlign: 'center',
			color: theme.DLS.COLOR.TEXT.SECONDARY_TEXT,
			marginTop: theme.DLS.SIZE[1],
			marginBottom: theme.DLS.SIZE[2],
		},
		errorMessage: {
			marginHorizontal: theme.DLS.SIZE[5],
			color: theme.DLS.COLOR.ERROR[100],
		},
		loginText: {
			textAlign: 'center',
			textDecorationLine: 'underline',
			marginTop: theme.DLS.SIZE[2],
			color: theme.DLS.COLOR.SUCCESS[500],
		},
		inputContainer: {
			width: '80%',
			marginTop: theme.DLS.SIZE[2],
			marginHorizontal: theme.DLS.SIZE[4],
			borderWidth: theme.DLS.STROKE[2],
			borderColor: theme.DLS.COLOR.DIVIDER.SECONDARY_DIVIDER,
			borderRadius: theme.DLS.BORDER_RADIUS[2],
		},
		input: {
			width: '100%',
			padding: theme.DLS.SIZE[2],
		},
		buttonContainer: {
			width: '30%',
			alignSelf: 'center',
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			paddingHorizontal: theme.DLS.SIZE[3],
			paddingVertical: theme.DLS.SIZE[2],
			borderRadius: theme.DLS.BORDER_RADIUS[2],
			borderWidth: theme.DLS.STROKE[0.5],
			borderColor: theme.DLS.COLOR.PRIMARY[500],
			backgroundColor: theme.DLS.COLOR.PRIMARY[300],
			marginVertical: theme.DLS.SIZE[2],
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
	});
};
