export default (username, password) => ({
	NormalizedUserName: username.toUpperCase().trim(),
	Password: password
});