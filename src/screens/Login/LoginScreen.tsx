import { CONFIRM_PASSWORD, EMAIL, PASSWORD } from '../../constants';
import Typography from '../../dls/Typography/Typography';
import data from '../screenData.json';
import { hideDefaultHeaded } from '../utility/hideDefaultHeaded';
import { isPasswordStrong } from '../utility/strongPasswordCheck';
import { isEmailValid } from '../utility/validateEmailCheck';
import { generateStyles } from './LoginScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';

export const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const theme = useTheme();

	const navigation = useNavigation();

	hideDefaultHeaded();

	const styles = generateStyles(theme);

	const { loginData } = data || {};

	const {
		loginImageUrl = '',
		emailErrorMessage,
		passwordMatchError,
		buttonText = 'Login',
	} = loginData || {};

	const [isEmailError, setIsEmailError] = useState(false);
	const [isPasswordMatched, setIsPasswordMatched] = useState(true);

	const handleOnFocus = useCallback(() => {
		setIsEmailError(false);
		setIsPasswordMatched(true);
	}, []);

	const handleLogin = () => {
		handleOnFocus();
		if (!isEmailValid(email)) {
			setIsEmailError(true);
			return;
		}

		// If all checks pass, proceed with the login
		console.log('True');
	};

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Typography variant={'heading-md-bold'} style={styles.heading}>
					{'Get Started - Food Zone'}
				</Typography>
				<Typography
					variant={'body-base-bold'}
					style={styles.subheading}
				>
					{'Create an account to start your food hunt'}
				</Typography>
				<Image
					style={styles.image}
					source={{
						uri: loginImageUrl,
					}}
				/>
			</View>
			<View style={styles.formContainer}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder={EMAIL}
						placeholderTextColor={
							theme.DLS.COLOR.TEXT.SECONDARY_TEXT
						}
						onChangeText={(text) => setEmail(text)}
						value={email}
						onFocus={handleOnFocus}
					/>
				</View>
				{isEmailError && (
					<Typography
						variant={'tag-bold'}
						style={styles.errorMessage}
					>
						{emailErrorMessage}
					</Typography>
				)}
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder={PASSWORD}
						placeholderTextColor={
							theme.DLS.COLOR.TEXT.SECONDARY_TEXT
						}
						secureTextEntry={true}
						onChangeText={(text) => setPassword(text)}
						value={password}
					/>
				</View>
				{!isPasswordMatched && (
					<Typography
						variant={'tag-bold'}
						style={styles.errorMessage}
					>
						{passwordMatchError}
					</Typography>
				)}
				<TouchableOpacity
					activeOpacity={0.7}
					onPress={handleLogin}
					style={styles.buttonContainer}
				>
					<Typography
						variant={'cta-label-bold'}
						style={styles.buttonText}
					>
						{buttonText}
					</Typography>
				</TouchableOpacity>
			</View>
		</View>
	);
};
