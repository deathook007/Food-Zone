import { IDLSColor } from './color.types';
import { DLS_BORDER_RADIUS, DLS_SIZE, STROKE } from './size';

export interface IBrandFontFamily {
	light: string;
	regular: string;
	semiBold: string;
	bold: string;
}

export type ITypographyVariantsStyles = {
	[key in ITypographyVariants]: {
		fontSize: number;
		lineHeight: number;
	};
};

export interface ITheme {
	DLS: {
		TYPOGRAPHY: {
			VARIANTS: ITypographyVariantsStyles;
		};
		/**
		 * - SPACING
		 * - MARGINS
		 * - PADDINGS
		 * - WIDTH/HEIGHT
		 */
		SIZE: typeof DLS_SIZE;
		/**
		 * - BORER WIDTH
		 */
		STROKE: typeof STROKE;
		/**
		 * - BORDER RADIUS
		 */
		BORDER_RADIUS: typeof DLS_BORDER_RADIUS;
		COLOR: IDLSColor;
	};
}

export type ITypographyVariants =
	| 'x-small'
	| 'tag-regular'
	| 'tag-bold'
	| 'cta-label-sm'
	| 'cta-label-lg'
	| 'body-base-regular'
	| 'body-base-light'
	| 'body-base-bold'
	| 'subheading-regular'
	| 'subheading-light'
	| 'subheading-bold'
	| 'heading-sm-regular'
	| 'heading-sm-bold'
	| 'heading-md-regular'
	| 'heading-md-bold'
	| 'heading-lg-regular'
	| 'heading-lg-bold'
	| 'heading-xl-regular'
	| 'heading-xl-bold'
	| 'heading-2xl-regular'
	| 'heading-2xl-bold'
	| 'heading-3xl-regular'
	| 'heading-3xl-bold';
