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
	});
};
