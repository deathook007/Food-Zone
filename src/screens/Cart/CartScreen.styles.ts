import { StyleSheet } from 'react-native';

export const generateStyles = (theme: any) => {
	return StyleSheet.create({
		cartScreen: {
			backgroundColor: theme.DLS.COLOR.BACKGROUND[500],
		},
		image: {
			position: 'absolute',
			width: '100%',
			height: '100%',
			opacity: 0.2,
		},
		header: {
			flexDirection: 'row',
			alignContent: 'center',
			alignItems: 'center',
			marginTop: theme.DLS.SIZE[6],
			marginHorizontal: theme.DLS.SIZE[1],
		},
		title: {
			alignSelf: 'center',
			marginLeft: theme.DLS.SIZE[4],
			textShadowColor: theme.DLS.COLOR.PRIMARY[300],
			textShadowRadius: 0.5,
			textShadowOffset: {
				width: 0,
				height: 1,
			},
		},
		cartItems: {
			flexDirection: 'column',
		},
		orderSummary: {},
	});
};
