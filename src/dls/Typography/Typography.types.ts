import { ITypographyVariants } from '../theme/theme.types';
import { TextProps } from 'react-native';

export interface ITypographyProps extends TextProps {
	color?: string;
	variant: ITypographyVariants | undefined;
}
