export interface IDeliveryCardProps {
	name: string;
	tag: string;
	url: string;
	handleOutgoingCall: () => void;
	handleCancelOrder: () => void;
}
