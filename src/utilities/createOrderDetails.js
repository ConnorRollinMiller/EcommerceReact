export default (shoeId, quantity, price, userId = null) => ({
   ShoeId: shoeId,
   UserId: userId,
   Quantity: quantity,
   Price: price
});
