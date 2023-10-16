import { StyleSheet } from 'react-native';

export const generateStyles = (theme: any) => {
	return StyleSheet.create({
		descriptionContainer: {
			flexDirection: 'row',
			textAlign: 'center',
			paddingHorizontal: theme.DLS.SIZE[2],
			paddingVertical: theme.DLS.SIZE[1],
			marginHorizontal: theme.DLS.SIZE[2],
			marginVertical: theme.DLS.SIZE[2],
			borderWidth: theme.DLS.STROKE[2],
			borderRadius: theme.DLS.BORDER_RADIUS[3],
			borderColor: theme.DLS.COLOR.DIVIDER.SECONDARY_DIVIDER,
			backgroundColor: theme.DLS.COLOR.SECONDARY[500],
			shadowOffset: {
				width: 1,
				height: 1,
			},
			shadowOpacity: 0.25,
			shadowRadius: 3,
			elevation: 3,
		},
		deliveryTimeContainer: {
			width: '53%',
			flexDirection: 'row',
			borderRightWidth: theme.DLS.STROKE[2],
			borderRightColor: theme.DLS.COLOR.DIVIDER.SECONDARY_DIVIDER,
		},
		iconContainer: {
			marginRight: theme.DLS.SIZE[1],
			marginTop: theme.DLS.SIZE[0.25],
			alignSelf: 'flex-start',
		},
		deliveryContainer: {
			flexDirection: 'column',
			justifyContent: 'space-between',
		},
		distance: {
			color: theme.DLS.COLOR.PRIMARY[200],
			marginTop: theme.DLS.SIZE[0.25],
		},
		chevron: {
			marginRight: theme.DLS.SIZE[1],
		},
		deliveryAddressContainer: {
			width: '44%',
			flexDirection: 'row',
			paddingLeft: theme.DLS.SIZE[1],
		},
	});
};
