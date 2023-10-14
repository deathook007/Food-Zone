export interface IDLSCategoryColorValuesProps {
	500: string;
	400: string;
	300: string;
	200: string;
	100: string;
}

export interface IDLSColor {
	PRIMARY: IDLSCategoryColorValuesProps;
	SECONDARY: IDLSCategoryColorValuesProps;
	SUCCESS: IDLSCategoryColorValuesProps;
	WARNING: IDLSCategoryColorValuesProps;
	ERROR: IDLSCategoryColorValuesProps;
	BACKGROUND: IDLSCategoryColorValuesProps;
	TEXT: {
		PRIMARY_TEXT: string;
		SECONDARY_TEXT: string;
		DISABLED_TEXT: string;
	};
	DIVIDER: {
		PRIMARY_DIVIDER: string;
		SECONDARY_DIVIDER: string;
	};
}
