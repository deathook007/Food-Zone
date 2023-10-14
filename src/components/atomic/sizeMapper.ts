import { Dimensions } from 'react-native';

const { width: deviceWidth } = Dimensions.get('window');

const sizes = new Map<number, number>();

// This function stores a hash map that maps DLS (Design Language System) sizes to corresponding primitive sizes using numeric values.
export const mappedSizesInNumber = (size: number): number => {
	if (sizes.has(size)) {
		return sizes.get(size) as number;
	}
	const mappedSize = Math.round((size * deviceWidth) / 360);
	sizes.set(size, mappedSize);
	return mappedSize;
};
