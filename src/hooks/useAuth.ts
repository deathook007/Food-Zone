import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';

const auth = getAuth();

export const useAuth = () => {
	const [user, setUser] = useState<User>();

	useEffect(() => {
		const unsubscribeFromAuthStateChange = onAuthStateChanged(
			auth,
			(user) => {
				if (user) {
					setUser(user);
				} else {
					setUser(undefined);
				}
			}
		);

		return unsubscribeFromAuthStateChange;
	}, []);

	return { user };
};
