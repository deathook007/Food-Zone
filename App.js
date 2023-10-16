import { FIREBASE_AUTH } from './FirebaseConfig';
import { LIGHT_MODE } from './constants';
import { DARK_THEME } from './src/dls/theme/dark.theme';
import { LIGHT_THEME } from './src/dls/theme/light.theme';
import CartScreen from './src/screens/Cart/CartScreen';
import { DeliveryScreen } from './src/screens/DeliveryScreen/DeliveryScreen';
import HomeScreen from './src/screens/HomeScreen';
import { LoginScreen } from './src/screens/Login/LoginScreen';
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import { OrderProcessing } from './src/screens/OrderProcessing/OrderProcessing';
import RestaurantScreen from './src/screens/Restaurant/RestaurantScreen';
import SignupScreen from './src/screens/Signup/SignupScreen';
import { SCREEN_NAME } from './src/screens/screens.names';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User, { onAuthStateChanged } from 'firebase/auth';
import { useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';

const Stack = createNativeStackNavigator();

export default function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		onAuthStateChanged(FIREBASE_AUTH, (user) => {
			setUser(user);
		});
	}, []);

	// setSelectedTheme can be used for toggling between dark and light theme
	const [selectedTheme, setSelectedTheme] = useState(LIGHT_MODE);

	const currentTheme = useMemo(() => {
		if (selectedTheme === LIGHT_MODE) {
			return LIGHT_THEME;
		}
		return DARK_THEME;
	}, [selectedTheme]);

	return (
		// The ThemeProvider integrates a theme tree object into the application.
		<ThemeProvider theme={currentTheme}>
			<NavigationContainer>
				<Stack.Navigator>
					{/* <Stack.Screen
						name={SCREEN_NAME.ONBOARDING_SCREEN}
						component={OnboardingScreen}
					/> */}
					{/* {user ? ( */}
					<>
						<Stack.Screen
							name={SCREEN_NAME.HOME_SCREEN}
							component={HomeScreen}
						/>
						<Stack.Screen
							name={SCREEN_NAME.RESTAURANT_SCREEN}
							component={RestaurantScreen}
						/>
						<Stack.Screen
							name={SCREEN_NAME.CART_SCREEN}
							component={CartScreen}
						/>
						<Stack.Screen
							name={SCREEN_NAME.ORDER_PROCESSING}
							component={OrderProcessing}
						/>
						<Stack.Screen
							name={SCREEN_NAME.DELIVERY_SCREEN}
							component={DeliveryScreen}
						/>
					</>
					{/* ) : ( */}
					{/* <>
							<Stack.Screen
								name={SCREEN_NAME.SIGNUP_SCREEN}
								component={SignupScreen}
							/>
							<Stack.Screen
								name={SCREEN_NAME.LOGIN_SCREEN}
								component={LoginScreen}
							/>
						</> */}
					{/* )} */}
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	);
}
