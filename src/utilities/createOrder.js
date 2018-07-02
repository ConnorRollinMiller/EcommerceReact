export default (
   firstName,
   lastName,
   country,
   state,
   address,
   city,
   zipCode,
   phone,
   email,
   total
) => ({
   OrderDate: Date.now(),
   FirstName: firstName,
   LastName: lastName,
   Country: country,
   State: state,
   City: city,
   Address: address,
   ZipCode: zipCode,
   Phone: phone,
   Email: email,
   Total: total,
   Status: 'Pending'
});
