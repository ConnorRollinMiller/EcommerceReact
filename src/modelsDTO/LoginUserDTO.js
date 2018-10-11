export default (username, password) => ({
	normalizedUsername: username.toUpperCase().trim(),
	password: password
});