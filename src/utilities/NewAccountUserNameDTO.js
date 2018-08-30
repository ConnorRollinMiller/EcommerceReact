export default (username) => ({
   username: username.trim(),
   normalizedUsername: username.toUpperCase().trim(),
});