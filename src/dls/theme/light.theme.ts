import { LIGHT_DLS_COLOR } from './color';
import { DLS_BORDER_RADIUS, DLS_SIZE, STROKE } from './size';
import { ITheme } from './theme.types';

export const LIGHT_THEME: ITheme = {
	DLS: {
		TYPOGRAPHY: {
			VARIANTS: {
				'x-small': {
					fontSize: 10,
					fontWeight: 100,
					lineHeight: 10 * 1.2,
				},
				'tag-regular': {
					fontSize: 12,
					fontWeight: 300,
					lineHeight: 12 * 1.2,
				},
				'tag-bold': {
					fontSize: 12,
					fontWeight: 500,
					lineHeight: 12 * 1.2,
				},
				'cta-label-sm': {
					fontSize: 14,
					fontWeight: 100,
					lineHeight: 14 * 1.2,
				},
				'cta-label-lg': {
					fontSize: 16,
					fontWeight: 100,
					lineHeight: 16 * 1.2,
				},
				'body-base-light': {
					fontSize: 14,
					fontWeight: 100,
					lineHeight: 14 * 1.2,
				},
				'body-base-regular': {
					fontSize: 14,
					fontWeight: 300,
					lineHeight: 14 * 1.2,
				},
				'body-base-bold': {
					fontSize: 14,
					fontWeight: 500,
					lineHeight: 14 * 1.2,
				},
				'subheading-light': {
					fontSize: 16,
					fontWeight: 100,
					lineHeight: 16 * 1.2,
				},
				'subheading-regular': {
					fontSize: 16,
					fontWeight: 300,
					lineHeight: 16 * 1.2,
				},
				'subheading-bold': {
					fontSize: 16,
					fontWeight: 500,
					lineHeight: 16 * 1.2,
				},
				'heading-sm-regular': {
					fontSize: 20,
					fontWeight: 300,
					lineHeight: 20 * 1.2,
				},
				'heading-sm-bold': {
					fontSize: 20,
					fontWeight: 500,
					lineHeight: 20 * 1.2,
				},
				'heading-md-regular': {
					fontSize: 24,
					fontWeight: 300,
					lineHeight: 24 * 1.2,
				},
				'heading-md-bold': {
					fontSize: 24,
					fontWeight: 500,
					lineHeight: 24 * 1.2,
				},
				'heading-lg-regular': {
					fontSize: 28,
					fontWeight: 300,
					lineHeight: 28 * 1.2,
				},
				'heading-lg-bold': {
					fontSize: 28,
					fontWeight: 500,
					lineHeight: 28 * 1.2,
				},
				'heading-xl-regular': {
					fontSize: 36,
					fontWeight: 300,
					lineHeight: 36 * 1.2,
				},
				'heading-xl-bold': {
					fontSize: 36,
					fontWeight: 500,
					lineHeight: 36 * 1.2,
				},
				'heading-2xl-regular': {
					fontSize: 136,
					fontWeight: 300,
					lineHeight: 136 * 1.2,
				},
				'heading-2xl-bold': {
					fontSize: 136,
					fontWeight: 500,
					lineHeight: 136 * 1.2,
				},
				'heading-3xl-regular': {
					fontSize: 184,
					fontWeight: 300,
					lineHeight: 184 * 1.2,
				},
				'heading-3xl-bold': {
					fontSize: 184,
					fontWeight: 500,
					lineHeight: 184 * 1.2,
				},
			},
		},
		SIZE: DLS_SIZE,
		STROKE: STROKE,
		BORDER_RADIUS: DLS_BORDER_RADIUS,
		COLOR: LIGHT_DLS_COLOR,
	},
};
