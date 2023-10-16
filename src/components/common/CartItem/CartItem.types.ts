export interface IMenuCardProps {
	id: number;
	title: string;
	image: string;
	totalAmount: string;
	totalItem: number;
	handleRemoveItem: (id: number) => void;
}
