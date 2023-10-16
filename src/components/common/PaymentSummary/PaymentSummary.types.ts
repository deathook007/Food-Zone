export interface IPaymentSummaryLineItems {
	id: number;
	title: string;
	titleColor?: string;
	value: string;
	valueColor?: string;
	showDashedLine?: boolean;
	backgroundColor?: string;
}

export interface IPaymentSummaryProps {
	amountSummary: IPaymentSummaryLineItems[];
	// cartTotal: number;
	handleOnPaceOrder: () => void;
}
