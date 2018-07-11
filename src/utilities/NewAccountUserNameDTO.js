export default (userId, username) => ({
	UserId: userId,
	UserName: username.trim(),
	NormalizedUserName: username.toUpperCase().trim(),
});