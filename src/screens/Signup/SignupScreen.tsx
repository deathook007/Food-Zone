import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { CONFIRM_PASSWORD, EMAIL, PASSWORD } from '../../constants';
import Typography from '../../dls/Typography';
import data from '../screenData.json';
import { SCREEN_NAME } from '../screens.names';
import { hideDefaultHeaded } from '../utility/hideDefaultHeaded';
import { isPasswordStrong } from '../utility/strongPasswordCheck';
import { isEmailValid } from '../utility/validateEmailCheck';
import { generateStyles } from './Signup.styles';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useCallback, useState } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useTheme } from 'styled-components/native';

const SignupScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [isEmailError, setIsEmailError] = useState(false);
	const [isPasswordError, setIsPasswordError] = useState(false);
	const [isPasswordMatched, setIsPasswordMatched] = useState(true);
	const [emailExists, setEmailExists] = useState(false);

	const auth = FIREBASE_AUTH;

	const theme = useTheme();

	const navigation = useNavigation() as any;

	hideDefaultHeaded();

	const styles = generateStyles(theme);

	const { signUpData } = data || {};

	const {
		SingUpImageUrl = '',
		emailErrorMessage,
		passwordErrorMessage,
		passwordMatchError,
		emailExistsError,
		buttonText = 'Sign up',
	} = signUpData || {};

	const handleOnFocus = useCallback(() => {
		setIsEmailError(false);
		setIsPasswordError(false);
		setIsPasswordMatched(true);
	}, []);

	const handleSignup = async () => {
		handleOnFocus();
		if (!isEmailValid(email)) {
			setIsEmailError(true);
			return;
		}

		if (!isPasswordStrong(password)) {
			setIsPasswordError(true);
			return;
		}

		if (password !== confirmPassword) {
			setIsPasswordMatched(false);
			return;
		}

		try {
			await createUserWithEmailAndPassword(auth, email, password);
			navigation.replace(SCREEN_NAME.HOME_SCREEN as never);
		} catch (error) {
			setEmailExists(true);
			setTimeout(() => {
				setEmailExists(false);
			}, 3000);
		}
	};

	const handleLoginNavigation = useCallback(() => {
		navigation.navigate(SCREEN_NAME.LOGIN_SCREEN as never);
	}, []);

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
						uri: SingUpImageUrl,
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
				{isPasswordError && (
					<Typography
						variant={'tag-bold'}
						style={styles.errorMessage}
					>
						{passwordErrorMessage}
					</Typography>
				)}

				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder={CONFIRM_PASSWORD}
						placeholderTextColor={
							theme.DLS.COLOR.TEXT.SECONDARY_TEXT
						}
						secureTextEntry={true}
						onChangeText={(text) => setConfirmPassword(text)}
						value={confirmPassword}
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
					onPress={handleLoginNavigation}
				>
					<Typography variant={'tag-bold'} style={styles.loginText}>
						{'Already a user Login'}
					</Typography>
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={0.7}
					onPress={handleSignup}
					style={styles.buttonContainer}
				>
					<Typography
						variant={'cta-label-bold'}
						style={styles.buttonText}
					>
						{buttonText}
					</Typography>
				</TouchableOpacity>
				{emailExists && (
					<Typography
						variant={'tag-bold'}
						style={[styles.errorMessage, { textAlign: 'center' }]}
					>
						{emailExistsError}
					</Typography>
				)}
			</View>
		</View>
	);
};

export default SignupScreen;
