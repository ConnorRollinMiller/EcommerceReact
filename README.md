# E-commerce App

This application is an ecommerce store for shoes. It is built with an Node (Express) Server, MySQL Database, React.js, & Redux.

## Data Models

### Shoe model

    |	Keys	 |						Data Types						|
    | ---------- | ---------------------------------------------------- |
    |	shoeId	 |	Int (Primary Key)									|
    |	brand    |	String			 									|
    |   model    | 	String												|
    |   colorway | 	String												|
    |   price	 | 	Decimal												|
    |   featured |	Boolean												|
    |   ImageFolderUrl |	String												|

### Review model

    |	Keys		|					Data Types						|
    | ------------- | ------------------------------------------------- |
    |	ReviewId	|	Int (Primary key)								|
    |	shoeId		|	Int (Foreign Key)								|
    |	UserId		|	Int (Foreign Key)								|
    |	UserName	|	String											|
    |   ReviewDate	|	Date											|
    |	Rating		|	Int												|
    |	ReviewText	|	String											|

### User model

    |   Keys				|			Data Types					|
    | --------------------- | ------------------------------------- |
    |	UserId				|	Int (Primary Key)					|
    |	Username			|	String								|
    |	NormalizedUserName	|	String              				|
    |   PasswordHashed		| 	String								|
    |   Email				| 	String								|
    |   NormalizedEmail		| 	String								|
    |	isActive			|	Boolean								|

### Order model

    |	Keys			|					Data Types						|
    | ----------------- | ------------------------------------------------- |
    |	OrderId			|	Int (Primary Key)								|
    |	UserId			|	Int (Foreign Key)								|
    |	CreatedAt		|	Timestamp										|
    |	FirstName		|	String											|
    |	LastName		|	String											|
    |	Country			|	String											|
    |	State			|	String											|
    |	City			|	String			 								|
    |	Address			|	String											|
    |	ZipCode			|	Int												|
    |	Phone			|	String											|
    |	Email			|	String											|
    |	Total			|	Decimal											|

### Order Details model

    |	Keys			|					Data Types						|
    | ----------------- | ------------------------------------------------- |
    |	OrderDetailsId	|	Int (Primary Key)								|
    |	OrderId			|	Int (Foreign Key)								|
    |	shoeId			|	Int (Foreign Key)								|
    |	Quantity		|	Int												|
    |	price			|	Decimal											|

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
