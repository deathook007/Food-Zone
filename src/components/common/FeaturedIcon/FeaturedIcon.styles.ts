import { StyleSheet } from 'react-native';

export const generateStyles = (theme: any) => {
	return StyleSheet.create({
		container: {
			width: theme.DLS.SIZE[8],
			flexDirection: 'column',
			marginHorizontal: theme.DLS.SIZE[2],
		},
		imageContainer: {
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			width: theme.DLS.SIZE[8],
			height: theme.DLS.SIZE[8],
			borderRadius: theme.DLS.BORDER_RADIUS[3],
			backgroundColor: theme.DLS.COLOR.BACKGROUND[100],
		},
		image: {
			width: theme.DLS.SIZE[7],
			height: theme.DLS.SIZE[7],
			borderRadius: theme.DLS.BORDER_RADIUS[3],
			resizeMode: 'contain',
		},
		description: {
			textAlign: 'center',
			marginTop: theme.DLS.SIZE[1],
		},
	});
};
