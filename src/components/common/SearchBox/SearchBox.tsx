import { generateStyles } from './SearchBox.styles';
import React, { useCallback, useState } from 'react';
import { TextInput, View } from 'react-native';
import * as Icon from 'react-native-feather';
import { useTheme } from 'styled-components/native';

const SearchBox = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const theme = useTheme();
	const styles = generateStyles(theme);

	const onSetSearchValue = useCallback((value: string) => {
		setSearchQuery(value);
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.searchContainer}>
				<View style={styles.searchIconContainer}>
					<Icon.Search
						height={theme.DLS.SIZE[3]}
						width={theme.DLS.SIZE[3]}
						stroke={theme.DLS.COLOR.BACKGROUND[200]}
					/>
				</View>
				<View style={styles.textInputContainer}>
					<TextInput
						style={styles.textInput}
						placeholder='Meghna Foods & Restaurants'
						placeholderTextColor={
							theme.DLS.COLOR.TEXT.SECONDARY_TEXT
						}
						onChangeText={onSetSearchValue}
						value={searchQuery}
					/>
				</View>
				<View style={styles.locationIconContainer}>
					<Icon.MapPin
						height={theme.DLS.SIZE[3]}
						width={theme.DLS.SIZE[3]}
						stroke={theme.DLS.COLOR.BACKGROUND[200]}
						style={styles.mapIcon}
					/>
				</View>
				<View style={styles.locationContainer}>
					<TextInput
						style={styles.textInput}
						placeholder='Bengaluru, Kar, In'
						placeholderTextColor={
							theme.DLS.COLOR.TEXT.SECONDARY_TEXT
						}
						onChangeText={onSetSearchValue}
						value={searchQuery}
					/>
				</View>
			</View>
			<View style={styles.sliderIconContainer}>
				<Icon.Sliders
					height={theme.DLS.SIZE[3]}
					width={theme.DLS.SIZE[3]}
					stroke={theme.DLS.COLOR.BACKGROUND[500]}
				/>
			</View>
		</View>
	);
};

export default SearchBox;
