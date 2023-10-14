import { Dimensions, StyleSheet } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

export const generateStyles = (theme: any) => {
	return StyleSheet.create({
		bulletContainer: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
			marginBottom: theme.DLS.SIZE[5],
		},
		bullet: {
			width: theme.DLS.SIZE[1],
			height: theme.DLS.SIZE[1],
			marginHorizontal: theme.DLS.SIZE[1],
			borderRadius: theme.DLS.BORDER_RADIUS[1],
		},
	});
};
