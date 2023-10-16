import { StyleSheet } from 'react-native';

export const generateStyles = (theme: any) => {
	return StyleSheet.create({
		mainContainer: {
			flexDirection: 'column',
			padding: theme.DLS.SIZE[3],
			borderWidth: theme.DLS.STROKE[3],
			borderColor: theme.DLS.COLOR.SECONDARY[200],
			borderTopRightRadius: theme.DLS.BORDER_RADIUS[3],
			borderTopLeftRadius: theme.DLS.BORDER_RADIUS[3],
			backgroundColor: theme.DLS.COLOR.SECONDARY[500],
			marginTop: -theme.DLS.SIZE[1],
		},
		summary: {
			marginTop: theme.DLS.SIZE[1],
		},
		amountSummaryContainer: {
			flexDirection: 'column',
		},
		amountSummary: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginTop: theme.DLS.SIZE[1],
		},
		heading: {
			color: theme.DLS.COLOR.SECONDARY[200],
			textShadowColor: theme.DLS.COLOR.PRIMARY[200],
			textShadowRadius: 0.5,
			textShadowOffset: {
				width: 0,
				height: 1,
			},
		},
		title: {
			color: theme.DLS.COLOR.SECONDARY[300],
			backgroundColor: theme.DLS.COLOR.SECONDARY[500],
		},
		value: {
			color: theme.DLS.COLOR.SECONDARY[200],
			backgroundColor: theme.DLS.COLOR.SECONDARY[500],
			textShadowColor: theme.DLS.COLOR.PRIMARY[200],
			textShadowRadius: 0.5,
			textShadowOffset: {
				width: 0,
				height: 1,
			},
		},
		dashedLineContainer: {
			width: '100%',
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
			paddingTop: theme.DLS.SIZE[2],
			borderBottomWidth: theme.DLS.STROKE[2],
			borderBottomColor: theme.DLS.COLOR.DIVIDER.SECONDARY_DIVIDER,
		},
		buttonContainer: {
			width: '50%',
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
			marginTop: theme.DLS.SIZE[3],
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
