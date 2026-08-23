# Luv2-ShopApplication

Luv2-ShopApplication is an online fashion store application that I am developing as a full-stack project using Java, Spring Boot and Angular.

I am building the application step by step, starting with the backend and database, then connecting the Angular frontend with the backend APIs and adding the different shopping features.

## About the Project

The goal of this project is to build an online shopping application where users can browse products, search for products, filter products by category, view product details and eventually add products to a shopping cart and place orders.

I am developing and testing each part of the application as I go, rather than building everything at once.

## Technologies Used

### Backend

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- REST APIs
- Maven

### Frontend

- Angular
- TypeScript
- HTML
- CSS
- Bootstrap

### Database

- MySQL

### Tools

- Visual Studio Code
- Intellij
- Postman
- Git
- GitHub

## Project Structure

The project is organised into three main sections:

### 01-backend

Contains the Spring Boot application.

It includes:

- Product entity
- Product Category entity
- Product Repository
- Product Category Repository
- REST API configuration
- Application configuration
- Maven configuration

### 02-starter-files

This folder contains the original starter material used while setting up the project.

It includes sample SQL scripts, application properties and other reference resources that were provided as part of the project starter files.

These files are kept separately from the main application code.

### 03-frontend

Contains the Angular application.

It includes:

- Product List
- Product Category Menu
- Search
- Product Details
- Product Service
- Product and Product Category models
- Product images
- Angular configuration

## Backend Development

I started by setting up the Spring Boot backend and creating the basic structure required for the online store.

The backend currently uses Spring Data JPA and Hibernate to communicate with the MySQL database.

I created the Product and Product Category entities along with their repositories.

The Spring Boot application exposes REST APIs that are used to retrieve product and category information.

I also tested the APIs using Postman to make sure the backend is successfully retrieving and returning data from the database.

## Database

The application is connected to a MySQL database.

The database contains the product and category information required by the application.

Some of the initial SQL scripts and sample data came from the starter material provided for the project. I used these as the starting point and connected the database to my Spring Boot application.

The current data flow is:

MySQL Database  
↓  
Spring Boot  
↓  
Spring Data JPA / Hibernate  
↓  
REST APIs  
↓  
Angular Frontend

## REST API Testing

After connecting the database to Spring Boot, I tested the REST APIs using Postman.

The API testing confirmed that product information can be retrieved successfully from the database through the Spring Boot backend.

This allowed me to verify the backend before continuing with the frontend integration.

## Frontend Development

The Angular application is responsible for displaying the products and providing the user interface for the online store.

So far, I have developed:

### Product Category Menu

Created the category menu to allow products to be organised based on their category.

### Product List

Created the product listing functionality to display products retrieved from the backend.

### Product Search

Added product search functionality so users can search for products instead of manually going through the entire product list.

### Pagination

Added pagination to improve the way products are displayed when there are multiple products.

Instead of displaying all products on one page, the application allows users to move between pages of products.

### Product Details

Created a Product Details component to display information about an individual product.

The product list can be used to select a product and display its details.

## Current Progress

The main product browsing functionality is now working.

Completed so far:

- Spring Boot backend setup
- Product entity
- Product Category entity
- Product Repository
- Product Category Repository
- MySQL database setup
- Spring Boot and MySQL connection
- REST API development
- REST API testing using Postman
- Angular frontend setup
- Product Category Menu
- Product List
- Product Search
- Pagination
- Product Details
- Angular Product Service
- Frontend and backend integration
- Product images

The application can now retrieve product information from the MySQL database through the Spring Boot REST APIs and display it in the Angular application.

Users can browse the products, search for products and navigate through the product results using pagination.

## What's Next

The next part of the project is focused on adding the shopping functionality.

I plan to work on:

- Shopping Cart
- Add products to the cart
- Update cart item quantities
- Remove products from the cart
- Calculate cart totals
- Checkout functionality
- Order functionality
- Status Component
- Improve the overall user interface
- Complete end-to-end testing

## What I Am Learning Through This Project

This project is giving me practical experience in developing a full-stack application and connecting the different layers together.

Through this project, I am working with:

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- REST API development
- MySQL
- Angular
- TypeScript
- API integration
- Postman
- Git
- GitHub

One of the main things I am learning through the project is how data flows from the database to the backend API and then from the API to the frontend application.

I am also gaining practical experience in developing features one at a time, testing them and integrating them into the existing application.

## GitHub Repository

https://github.com/Gangarajusowmya/Luv2-ShopApplication

## Author

Sowmya Gangaraju
