# E-Commerce Application 🛒

This project is a backend implementation for an eCommerce web application built using Node.js and Express. The code is designed to handle the core functionalities such as managing user carts, placing orders, and handling various API endpoints for cart and order operations. The code is structured using a **modular approach** to ensure code readability, maintainability, and scalability.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
- [Usage Instructions](#usage-instructions)
- [Contributing](#contributing)
- [License](#license)

## Overview

This is a RESTful backend service for an eCommerce application that performs the following operations:

1. **Cart Management**: Allows users to add items to their shopping carts and view cart contents.
2. **Order Placement**: Enables users to place orders for items in their carts, with support for payment details.
3. **Separation of Concerns**: Uses a service-based architecture to separate the business logic from the data access logic.

The project is designed to work with **MongoDB** as its database and includes routes, controllers, and services for handling various operations related to cart and order management.

## Tech Stack

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database used to store user carts and orders.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)**: For user authentication and authorization.
- **dotenv**: For environment variable management.
- **ES6+**: Modern JavaScript syntax.

## Project Structure


## Features

- **Add To Cart**: Adds a product to a user's cart.
- **Get Cart Items**: Retrieves the items currently in a user's cart.
- **Place Order**: Places an order for the items in a user's cart, accepting payment details.
- **Get Order Details**: Retrieves details of a specific order using the order ID.

## Setup and Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12.x or higher)
- [MongoDB](https://www.mongodb.com/) (v4.x or higher)
- [Git](https://git-scm.com/)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ecommerce-backend.git
   cd ecommerce-backend


API Endpoints

Cart Endpoints
Method	Endpoint	Description
POST	/cart/add	Add an item to the cart
GET	/cart/:userId	Get items in user's cart

Order Endpoints

Method	Endpoint	Description
POST	/orders	Place a new order
GET	/orders/:orderId	Get details of an order



Usage Instructions
Adding an Item to Cart
Make a POST request to /cart/add with the following JSON body:

json
Copy code
{
  "userId": "12345",
  "productId": "abc123",
  "quantity": 2
}
Placing an Order
Make a POST request to /orders with the following JSON body:

json
Copy code
{
  "userId": "12345",
  "paymentDetails": {
    "method": "Credit Card",
    "status": "Paid"
  }
}
Getting Cart Items
Make a GET request to /cart/:userId with the userId as a parameter.

Getting Order Details
Make a GET request to /orders/:orderId with the orderId as a parameter.