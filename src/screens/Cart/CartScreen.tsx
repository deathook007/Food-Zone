import Typography from '../../dls/Typography';
import { generateStyles } from './CartScreen.styles';
import React, { useCallback, useState } from 'react';
import { ScrollView, View, Image, TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-feather';
import { useTheme } from 'styled-components/native';

const CartScreen = () => {
	const theme = useTheme();

	const styles = generateStyles(theme);

	return <></>;
};

export default CartScreen;
