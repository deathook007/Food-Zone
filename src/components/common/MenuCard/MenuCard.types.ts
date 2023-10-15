export interface IMenuCardProps {
	tag: string;
	title: string;
	actualPrice: string;
	discountedPrice: string;
	rating: string;
	description: string;
	image: string;
	buttonText?: string;
	modalVisible: boolean;
	setModalVisible: (value: boolean) => void;
	handleModalToggle: () => void;
}
