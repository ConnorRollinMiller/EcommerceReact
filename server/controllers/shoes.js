const Shoe = require('../models').shoes;

module.exports = {
   getAllShoes: (req, res, next) => {
      Shoe.findAll()
         .then(shoes => res.status(200).json({ success: true, shoes: shoes }))
         .catch(err => res.status(400).json({ success: false, message: err }))
   },
   getShoeById: (req, res, next) => {
      const shoeId = req.params.shoeId;

      Shoe.findById(shoeId)
         .then(shoe => {
            if (!shoe) {
               return res.status(404).json({ success: false, message: `No shoe found with id ${ shoeId }` })
            }
            res.status(200).json({ success: true, shoe: shoe })
         })
         .catch(err => res.status(400).json({ success: false, message: err }))
   }
}
