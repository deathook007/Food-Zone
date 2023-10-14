import { ITypographyProps } from './Typography.types';
import React from 'react';
import { Text } from 'react-native';
import { useTheme } from 'styled-components/native';

// Leveraging typography enables us to achieve greater code consistency and reduce potential UI bugs, as text components are instantiated only once and not repeatedly within each component file.
const Typography: React.FC<ITypographyProps> = ({
	children,
	variant = 'x-small',
	style = {},
	color = null,
	...restProps
}) => {
	// Utilizing the theme from context.
	const theme = useTheme();

	const variantStyle =
		theme.DLS.TYPOGRAPHY.VARIANTS[variant] ??
		theme.DLS.TYPOGRAPHY.VARIANTS['x-small'];

	const composedStyles = [
		{ color: color ? color : theme.DLS.COLOR.TEXT.PRIMARY_TEXT },
		style,
		variantStyle,
	];

	return (
		<Text {...restProps} style={composedStyles}>
			{children}
		</Text>
	);
};

export default Typography;
