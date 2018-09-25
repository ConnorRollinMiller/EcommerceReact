# E-commerce App

This application is an ecommerce store for shoes. It is built with an Node (Express) Server, MySQL Database, React.js, & Redux. Production URL: https://reactecommerceapp.herokuapp.com/

## Data Models

### Shoe model

| Keys            |						Data Types						|
| --------------- | ------------------------------------------ |
| shoeId          |	INTEGER (Primary Key)						   |
| brand           |	VARCHAR			 									|
| model           | 	VARCHAR												|
| colorway        | 	VARCHAR												|
| price           | 	DECIMAL												|
| featured        |	BOOLEAN												|
| imageFolderName |	VARCHAR												|
| createdAt		   |	DATETIME										      |
| updatedAt       |  DATETIME                                  |

### Review model

|	Keys		   |					Data Types						|
| ------------ | --------------------------------------- |
| reviewId	   |	INTEGER (Primary key)						|
| shoeId		   |	INTEGER (Foreign Key)						|
| userId		   |	INTEGER (Foreign Key)						|
| username	   |	VARCHAR											|
| rating		   |	INTEGER											|
| reviewText	|	VARCHAR											|
| createdAt	   |	DATETIME										   |
| updatedAt    |  DATETIME                               |

### User model

| Keys				   |			Data Types					|
| ------------------ | ------------------------------ |
| userId				   |	INTEGER (Primary Key)			|
| username		      |	VARCHAR								|
| normalizedUsername |	VARCHAR              			|
| passwordHashed		| 	VARCHAR								|
| email				   | 	VARCHAR								|
| normalizedEmail	   | 	VARCHAR								|
| createdAt		      |	DATETIME								|
| updatedAt          |  DATETIME                      |

### Order model

|	Keys			   |					Data Types						|
| --------------  | --------------------------------------- |
| orderId			|	INTEGER (Primary Key)						|
| userId			   |	INTEGER (Foreign Key)					   |
| firstName		   |	VARCHAR											|
| lastName		   |	VARCHAR											|
| country			|	VARCHAR											|
| state			   |	VARCHAR											|
| city			   |	VARCHAR			 								|
| address			|	VARCHAR											|
| zipCode			|	INTEGER											|
| phone			   |	VARCHAR											|
| email			   |	VARCHAR											|
| total			   |	DECIMAL											|
| createdAt		   |	DATETIME										   |
| updatedAt       |  DATETIME                               |


### Order Details model

|	Keys			   |					Data Types				|
| --------------- | --------------------------------- |
| orderDetailId   | 	INTEGER (Primary Key)            |
| orderId         |	INTEGER (Foreign Key)				|
| shoeId			   |	INTEGER (Foreign Key)				|
| quantity		   |	INTEGER									|
| pricePerShoe	   |	DECIMAL									|
| createdAt		   |	DATETIME						   	   |
| updatedAt       |  DATETIME                         |


# Backlog

   - Be able to use filters on `Shop` page for mobile users.
   - Add CSS animations for page transitions
   - Order tracking / history for customers purchases
   - Autofill forms with account info if user is logged in ✅
   - Change all controlled form components to uncontrolled for performance increase ✅
   - Change Checkoput input fields `phone` & `zipCode` to controlled input to validate input ✅
      - Move functions from component to redux
   - Change home page header / carousel to something that fits a mobile screen better
   - Fix console errors
   - Get rid of all `console.logs()` in code - Add console.errors when catching promise errors
   - Set up sending emails for placed orders
   - Make / get a logo - Get a site name
   - Add dummy payment gateway
   - Add functionality to newsletter signup - Add newsletter signup checkbox on checkout
   - Reorganize files to be more organized ✅
   - Sign out function redirects to previous page => componenDidUpdate(pathname) {<Redirect to={pathname} />}
   - Make a shoe size required - add stock to DB
   - Get rid of all the icon components
   - Fix Menu item `Account` to have items `Login` + `Register` when user isn't logged in
   - Fix all axios `catch` statements ro check if they return an `error.response` message, otherwise, customize failure message
   - Save cart & user to localStorage ✅
   - For header menu - if open, make it close if you click anywhere other than the menu.
      - Make full screen menu for mobile?
