import { firebase } from '@react-native-firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCC0_V6YXIIKs6suoiWXUKAR-gS55FOuOA',
	authDomain: 'food-zone-74161.firebaseapp.com',
	projectId: 'food-zone-74161',
	storageBucket: 'food-zone-74161.appspot.com',
	messagingSenderId: '884980700138',
	appId: '1:884980700138:web:9c1cd6ba8185d9f0665893',
	measurementId: 'G-JEBPL1PYSB',
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export { firebase };
