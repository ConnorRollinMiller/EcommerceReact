export default (email) => ({
   email: email.trim(),
   normalizedEmail: email.toUpperCase().trim()
});