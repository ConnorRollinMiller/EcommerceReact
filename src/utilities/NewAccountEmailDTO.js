export default (userId, email) => ({
	UserId: userId,
	Email: email.trim(),
	NormalizedEmail: email.toUpperCase().trim()
});