# StorefrontApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

## Overview
This project was created for Udacity - Full Stack JavaScript Developer Nanodegree, Angular Module. The project is created to be an e-commerce storefront website, for users to browse products they'd want to purchase. Since this part of the course was focused soley on understanding how to use the Angular framework, this project is also only front-end focused, and as a result the data that is pulled for the project simply resides in a data.json file. 

### Next Steps
In the future, I hope to revisit this project once I complete the course and build a truly full stack e-commerse application.

## Observations
This was the first project I created using Angular, but I've created a few projects with React in the past, so picking it up was a lot more straight forward that picking up React the first time around. 

The concept of components was very familiar, but data and event binding took a bit more time, but overall clicked and made a lot of sense.

I enjoy the fact that Angular is far more structured with the CLI helping the developer remain organized through generating scripts in a consistent manner.

This project I generated multiple components, and a few services. I never made use of creating another module, and I manually created the models folder and models files themselves. 

## Main Components
The storefront has 4 major components:
1. The about page
2. The Products page
3. The locations page
4. The Shopping cart

### The About Page
This page serves as a placeholder for standard e-commerce sites having a section fo the website that tells the backstory of the business/business owners, and details about the products, where they're from or how they're made.

### The Products Page
This is the main section of this project, and as such this page is at the root directory. A grid of all available products are shown here along with the name of the product and the price. Users can also add the product to the cart from this page, as well as dictating the amount they want added. A web notification will be triggered once the user clicks the `add` button. Only a product with a quantity greater than 0 will be added to the cart.

#### The Details Pages
From the products page, if the user clicks on the name of each product, they will be taken to the details page of each product. The user can once again add the product, with a specified quantity to the shopping cart from this page. This page also displays specific information about the product here that was not displayed on the main products page. The image of the product is also in greater detail.

These pages are created first through generating a routerlink that takes in a variable in the url, and accessing the links using each products' unique ID. The details component will use the ID from the URL, and filter the product from the products array for an object that has the same product ID.

### The Locations Page
Another placeholder page for standar e-commerce websites that show the locations of the stores.
I just used a well known landmark here for displaying purposes.

### The Cart page
Once all products are added to the cart from either the main products page or the individual details pages, the user can adjust the quantity for each order here, or remove an order entirely.

The subtotal for each order-item is displayed on this page alongside the amount for the total of all currently active order-items in the shopping cart.

Each order item also allows the user to go back to the details page of each product by clicking on the product name in each order-item.

If the user clicks the `proceed to checkout` button at the bottom of the page, they will be taken to the checkout page

#### The checkout page
A short summary of the user's order is displayed here, alongside a form requesting the user information.
Unless the user completes all required fields, the submit order button will be inactive. 

Once all required fields are completed and the submit order button is clicked, the user will be taken to the confirmations page.

#### The Confirmations page
Here, a final confirmation that the user has placed an order will appear, informing them an invoice has been sent to their emails (no such functionality actually exists on this project currently, but this page says it for demo-ing purposes). 

Though there are no direct links to navigate anywhere, the user can still use the navigation bar at the top of the page to visit any of the 4 pages.

The shopping cart is automatically cleared after an order is placed in the checkout page.

## Get Started
To get started demo-ing the app:

1. Run `npm install` to install all dependencies.

2. Then run `ng serve` to run a dev server. Navigate to `http://localhost:4200/` to view live project.
