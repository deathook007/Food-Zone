export interface IMenuCardProps {
	id: string;
	tag?: string;
	title: string;
	actualPrice?: string;
	discountedPrice?: string;
	price: number;
	rating: string;
	description?: string;
	image: string;
	buttonText?: string;
	modalVisible: boolean;
	handleNegativeCount: (id: string) => void;
	handlePositiveCount: (menu: any) => void;
	setModalVisible?: (value: boolean) => void;
	handleModalToggle?: () => void;
}
