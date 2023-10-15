import { StyleSheet } from 'react-native';

export const generateStyles = (theme: any) => {
	return StyleSheet.create({
		searchContainer: {
			width: '80%',
			flexDirection: 'row',
			borderWidth: theme.DLS.STROKE[2],
			borderColor: theme.DLS.COLOR.DIVIDER.SECONDARY_DIVIDER,
			borderRadius: theme.DLS.BORDER_RADIUS[3],
			marginVertical: theme.DLS.SIZE[5],
			marginHorizontal: theme.DLS.SIZE[2],
			paddingHorizontal: theme.DLS.SIZE[2],
		},
		searchIconContainer: {
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			width: theme.DLS.SIZE[3],
			height: theme.DLS.SIZE[3],
			alignSelf: 'center',
			marginRight: theme.DLS.SIZE[1],
		},
		locationIconContainer: {
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			width: theme.DLS.SIZE[3],
			height: theme.DLS.SIZE[3],
			alignSelf: 'center',
			marginHorizontal: theme.DLS.SIZE[1],
			borderLeftWidth: theme.DLS.SIZE[0.25],
			borderLeftColor: theme.DLS.COLOR.DIVIDER.SECONDARY_DIVIDER,
		},
		mapIcon: {
			marginLeft: theme.DLS.SIZE[2],
		},
		textInputContainer: {
			width: '40%',
		},
		locationContainer: {
			width: '20%',
			marginLeft: theme.DLS.SIZE[1],
		},
		textInput: {
			paddingVertical: theme.DLS.SIZE[2],
		},
	});
};
