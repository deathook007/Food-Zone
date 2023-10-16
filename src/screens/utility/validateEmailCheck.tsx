export const isEmailValid = (email: string) => {
	// A basic email validation using a regular expression
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
