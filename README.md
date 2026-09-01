# Full-Stack E-Commerce Application

A full-stack e-commerce web application developed using **Java, Spring Boot, Angular, TypeScript, MySQL, and REST APIs**.

The project was developed and extended using a **provided starter codebase and sample database data**. I worked on both the backend and frontend to understand how a complete full-stack application works, including API development, database integration, frontend development, testing, and debugging.

## Project Overview

The application allows users to:

* Browse products
* Browse products by category
* Search for products
* View product details
* Navigate through multiple pages of products

The Angular frontend communicates with the Spring Boot backend through REST APIs, and the backend connects to MySQL using Spring Data JPA and Hibernate.

## My Contribution

I worked on:

* Extended the application using the provided starter codebase
* Integrated Spring Boot with MySQL
* Worked with Spring Data JPA and Hibernate
* Developed and worked with REST APIs
* Tested APIs using Postman
* Developed Angular components and services
* Implemented product category navigation
* Implemented product listing and search
* Implemented pagination
* Implemented product details
* Connected Angular services with Spring Boot REST APIs
* Added and integrated product images
* Explored Angular unit testing using Jasmine and Karma
* Wrote and ran a unit test for one frontend functionality
* Updated related Angular `.spec.ts` files
* Used Git and GitHub for version control

## Technologies Used

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* REST APIs
* Maven

### Frontend

* Angular
* TypeScript
* HTML5
* CSS3
* Bootstrap

### Database

* MySQL
* MySQL Workbench

### Testing

* Postman
* Jasmine
* Karma

### Tools

* IntelliJ IDEA
* Visual Studio Code
* Git
* GitHub

## Project Structure

```text
EcommerceProject
│
├── 01-backend
│   └── Spring Boot application
│
├── 02-starter-files
│   └── Provided starter files and resources
│
└── 03-frontend
    └── angular-ecommerce
        └── Angular application

## Backend

The backend is developed using **Spring Boot** and provides REST APIs for the Angular frontend.

Main areas include:

* Product entity
* Product Category entity
* Product repositories
* Product services
* Product category services
* REST controllers
* Pagination
* Database integration

Spring Data JPA and Hibernate are used to communicate with the MySQL database.

## Database

The application uses **MySQL**.

The database structure and sample product/category data were provided through the starter resources. I integrated the existing database with the Spring Boot application and worked with the data using JPA and Hibernate.

Main tables include:

* `product`
* `product_category`

Products are connected to categories using a foreign-key relationship.

## REST API Testing

I used **Postman** to test the REST APIs and verify that the backend returned the expected product and category data.

Testing included:

* Product categories
* Product listing
* Product search
* Pagination
* Product details

## Frontend

The frontend is developed using **Angular and TypeScript**.

### Product Category Menu

Displays product categories retrieved from the backend API.

### Product List

Displays products retrieved from the Spring Boot REST API.

### Product Search

Allows users to search for products.

### Pagination

Allows users to navigate through multiple pages of products.

### Product Details

Allows users to view detailed information about a selected product.

### Angular Services

Angular services are used to communicate with the Spring Boot REST APIs using HTTP requests.

## Angular Unit Testing

I explored **Angular unit testing using Jasmine and Karma**.

I wrote and ran a unit test for **one frontend functionality** and updated the related `.spec.ts` files to support the testing setup.

## Frontend-Backend Integration

```text
User
  │
  ▼
Angular Frontend
  │
  │ HTTP Request
  ▼
Spring Boot REST API
  │
  │ JPA / Hibernate
  ▼
MySQL Database
  │
  │ Data
  ▼
Spring Boot
  │
  │ HTTP Response
  ▼
Angular Frontend
  │
  ▼
User
```

## Current Progress

### Completed

* Spring Boot backend integration
* MySQL database integration
* Product functionality
* Product Category functionality
* REST API development
* REST API testing with Postman
* Angular frontend
* Product Category Menu
* Product List
* Product Search
* Pagination
* Product Details
* Frontend-backend integration
* Product images
* Basic Angular unit testing
* Git and GitHub version control

### Planned

* Shopping Cart
* Add products to cart
* Update cart quantities
* Remove products from cart
* Cart totals
* Checkout
* Order functionality
* UI improvements
* Additional testing

## What I Learned

This project helped me gain practical experience with:

* Java and Spring Boot
* REST API development
* Spring Data JPA and Hibernate
* MySQL database integration
* Angular and TypeScript
* Frontend-backend integration
* API testing with Postman
* Angular unit testing
* Git and GitHub
* Debugging and troubleshooting

## GitHub Repository

**GitHub:**
https://github.com/Gangarajusowmya/Luv2-ShopApplication

## Author

**Sowmya Gangaraju**

Java | Spring Boot | Angular | REST APIs | MySQL
