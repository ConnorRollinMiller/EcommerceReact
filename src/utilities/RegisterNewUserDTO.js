export default (email, username, password) => ({
   email: email.trim(),
   normalizedEmail: email.toUpperCase().trim(),
   username: username.trim(),
   normalizedUsername: username.toUpperCase().trim(),
   password: password
});
