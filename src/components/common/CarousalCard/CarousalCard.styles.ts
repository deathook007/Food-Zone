import { Dimensions, StyleSheet } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

export const generateStyles = (theme: any) => {
	return StyleSheet.create({
		cardContainer: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			alignContent: 'center',
			width: DEVICE_WIDTH,
		},
		cardImage: {
			width: DEVICE_WIDTH / 1.3,
			height: DEVICE_WIDTH / 1.3,
			marginBottom: theme.DLS.SIZE[8],
		},
		cardTitle: {
			marginBottom: theme.DLS.SIZE[3],
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
		cardSubtitle: {
			width: '92%',
			paddingHorizontal: theme.DLS.SIZE[3],
			color: theme.DLS.COLOR.PRIMARY[300],
			textAlign: 'center',
			textShadowColor: theme.DLS.COLOR.PRIMARY[200],
			textShadowRadius: 1,
			textShadowOffset: {
				width: 1,
				height: 1,
			},
		},
	});
};
