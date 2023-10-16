import { StyleSheet } from 'react-native';

export const generateStyles = (theme: any) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.DLS.COLOR.PRIMARY[500],
		},
		map: {
			height: '70%',
		},
		deliveryDetails: {
			flex: 1,
			backgroundColor: theme.DLS.COLOR.PRIMARY[100],
			borderTopLeftRadius: theme.DLS.BORDER_RADIUS[3],
			borderTopRightRadius: theme.DLS.BORDER_RADIUS[3],
		},
		deliveryPerson: {
			marginTop: theme.DLS.SIZE[10],
			marginHorizontal: theme.DLS.SIZE[2],
		},
		progressCard: {
			position: 'absolute',
			top: '62%',
			left: '3%',
		},
	});
};
