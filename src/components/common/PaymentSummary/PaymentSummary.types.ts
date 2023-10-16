export interface IPaymentSummaryLineItems {
	id: string;
	title: string;
	titleColor?: string;
	value: string;
	valueColor?: string;
	showDashedLine?: boolean;
	backgroundColor?: string;
}

export interface IPaymentSummaryProps {
	amountSummary: IPaymentSummaryLineItems[];
	handleOnPaceOrder: () => void;
}
