import { StyleSheet } from 'react-native';

export const generateStyles = (theme: any) => {
	return StyleSheet.create({
		container: {
			width: '100%',
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			alignContent: 'center',
			backgroundColor: theme.DLS.COLOR.PRIMARY[500],
		},
		textContainer: {
			flexDirection: 'column',
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			marginHorizontal: theme.DLS.SIZE[2],
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
		},
	});
};
