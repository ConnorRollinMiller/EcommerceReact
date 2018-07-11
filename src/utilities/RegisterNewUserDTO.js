export default (email, username, password) => ({
   Email: email.trim(),
   NormalizedEmail: email.toUpperCase().trim(),
   UserName: username.trim(),
   NormalizedUserName: username.toUpperCase().trim(),
   Password: password
});
