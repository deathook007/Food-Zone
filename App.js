import { LIGHT_MODE } from './constants';
import { DARK_THEME } from './src/dls/theme/dark.theme';
import { LIGHT_THEME } from './src/dls/theme/light.theme';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components/native';

const Stack = createNativeStackNavigator();

export default function App() {
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
					<Stack.Screen name='Home' component={HomeScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	);
}
