export const isPasswordStrong = (password: string) => {
	// A strong password check (at least 8 characters, including numbers and special characters)
	return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
		password
	);
};
