export default (firstName, lastName, country, state, address, city, zipCode, phone, email, total, userId) => ({
   userId: userId,
   firstName: firstName,
   lastName: lastName,
   country: country,
   state: state,
   city: city,
   address: address,
   zipCode: zipCode,
   phone: phone,
   email: email,
   total: total,
   status: 'Pending'
});
