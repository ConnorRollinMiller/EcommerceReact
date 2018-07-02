# E-commerce App

This application is an ecommerce store for shoes. It is built with MongoDB, Express.js, React.js, Node.js, and Redux.

## Data Models

### Shoe Model

    |	Keys		|						Data Types						|
    | -------- | ------------------------------------------ |
    |	ShoeId	|	Int (Primary Key)									|
    |	Brand		|	String			 									|
    | Model		| 	String												|
    |	Size		|	Int													|
    | Price		| 	Decimal												|
    |	Featured	|	Boolean												|
    | Color		| 	String												|
    | ImageUrl |	String												|

### Review Model

    |	Keys			|					Data Types						|
    | ----------- | --------------------------------------- |
    |	ReviewId		|	Int (Primary key)								|
    |	ShoeId		|	Int (Foreign Key)								|
    |	UserId		|	Int (Foreign Key)								|
    |	UserName		|	String											|
    | ReviewDate	|	Date												|
    |	Rating		|	Int												|
    |	ReviewText	|	String											|

### User Model

    | Keys						|						Data Types					|
    | -------------------- | --------------------------------------- |
    |	UserId					|	Int (Primary Key)								|
    |	Username					|	String											|
    |	NormalizedUserName	|	String **(All CAPS)**						|
    | PasswordHashed			| 	String											|
    | Email						| 	String											|
    |	isActive					|	Boolean											|
    |	DateCreated				|	Date												|

### Order Model

    |	Keys				|					Data Types						|
    | -------------- | --------------------------------------- |
    |	OrderId			|	Int (Primary Key)								|
    |	OrderDate		|	BigInt											|
    |	Country			|	String											|
    |	State				|	String											|
    |	City				|	String			 								|
    |	Address			|	String											|
    |	ZipCode			|	Int												|
    |	Phone				|	String											|
    |	Email				|	String											|
    |	Total				|	Decimal											|

### Order Details Model

    |	Keys				|					Data Types						|
    | -------------- | --------------------------------------- |
    |	OrderDetailsId	|	Int (Primary Key)								|
    |	OrderId			|	Int (Foreign Key)								|
    |	ShoeId			|	Int (Foreign Key)								|
    |	Quantity			|	Int												|
    |	Price				|	Decimal											|

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
