# E-commerce App

This application is an ecommerce store for shoes. It is built with an Node (Express) Server, MySQL Database, React.js, & Redux. Link to production version: https://reactecommerceapp.herokuapp.com/

## Data Models

### Shoe model

      |	  Keys	      |						Data Types						|
      | --------------- | ------------------------------------------ |
      | shoeId          |	INTEGER (Primary Key)						   |
      | brand           |	VARCHAR			 									|
      | model           | 	VARCHAR												|
      | colorway        | 	VARCHAR												|
      | price	         | 	DECIMAL												|
      | featured        |	BOOLEAN												|
      | imageFolderName |	VARCHAR												|
      | createdAt		   |	DATETIME										      |
      | updateAt        |  DATETIME                                  |

### Review model

      |	Keys		   |					Data Types						|
      | ------------ | --------------------------------------- |
      |	reviewId	   |	INTEGER (Primary key)						|
      |	shoeId		|	INTEGER (Foreign Key)						|
      |	userId		|	INTEGER (Foreign Key)						|
      |	username	   |	VARCHAR											|
      |	rating		|	INTEGER											|
      |	reviewText	|	VARCHAR											|
      |	createdAt	|	DATETIME										   |
      |  updateAt    |  DATETIME                               |

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
      | updateAt           |  DATETIME                      |

### Order model

      |	Keys			   |					Data Types						|
      | --------------  | --------------------------------------- |
      |	orderId			|	INTEGER (Primary Key)						|
      |	userId			|	INTEGER (Foreign Key)					   |
      |	firstName		|	VARCHAR											|
      |	lastName		   |	VARCHAR											|
      |	country			|	VARCHAR											|
      |	state			   |	VARCHAR											|
      |	city			   |	VARCHAR			 								|
      |	address			|	VARCHAR											|
      |	zipCode			|	INTEGER											|
      |	phone			   |	VARCHAR											|
      |	email			   |	VARCHAR											|
      |	total			   |	DECIMAL											|
      |	createdAt		|	DATETIME										   |
      |  updateAt       |  DATETIME                               |


### Order Details model

      |	Keys			   |					Data Types				|
      | --------------- | --------------------------------- |
      |	orderDetailId	|	INTEGER (Primary Key)            |
      |	orderId			|	INTEGER (Foreign Key)				|
      |	shoeId			|	INTEGER (Foreign Key)				|
      |	quantity		   |	INTEGER									|
      |	pricePerShoe	|	DECIMAL									|
      |	createdAt		|	DATETIME						   	   |
      |  updateAt       |  DATETIME                         |

### Pages

-  Home
-  Shop
-  Product Page (for each shoe)
-  Checkout
-  Successful Checkout / Order
-  User Signup (Join) / Login (Sign In)
-  404 / Page Not Found

### Features

#### Shopping Cart

-  Seen **Universally** for User across application
-  Add / Remove Item
-  Show number of items
-  Show total price of all items in cart

#### Shop Page

-  Sliders / Radio Buttons to sort shoes based on brand, size (must be available), price, color? (maybe)
-  Pagination for scalability of having many products without slowing down loading time
-

#### Shoes Brands

-  Jordan
-  Adidas
-  Nike
-  Puma

#### Colors

--primary-color: #05386B;
--primary-color-shade1: #446084;
--secondary-color: #5CDB99;
--secondary-color-shade1: #379683;
--gray-color: #777;
--text-color: #111;
