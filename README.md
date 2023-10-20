
# "WHEELSDEAL"

### Live Link [WHEELDEAL](https://wheels-deals-513e1.web.app/)

"WheelsDeals is a comprehensive car website that makes it easy to find the perfect car for your needs and budget. We have a wide selection of new and used cars from all the top makes and models, and our team of experts is here to help you find the perfect car for you."


## Features

- Brand Cards with specific logo
- Add Product feature
- Update Product feature
- Cart section feature 
- Responsive Design


## "Brand Cards with specific logo"

![Alt](https://i.ibb.co/vjf2ryN/Screenshot-2023-10-20-193845.png)

Brand Cards with Specific Logo is a React-based web application that showcases a collection of brand cards, each featuring a specific logo. It harnesses the power of React's `useEffect` and `useState` hooks to create a dynamic and responsive user interface, making it an ideal choice for presenting a range of brands with their distinct logos.

#### Dynamic Rendering:
The application dynamically renders brand cards based on the data provided. You can easily customize the list of brands and their associated logos without needing to modify the core code.

#### Responsive Design:
The brand cards are designed to adapt to various screen sizes and devices, ensuring an optimal user experience on both desktop and mobile platforms

#### Easy Customization:
You can effortlessly tailor the content to your needs by updating the data source. The data is organized in a user-friendly format, making it simple to add, edit, or remove brand cards with their logos.

#### Utilization of React Hooks:

The project employs React's useEffect and useState hooks to manage the component's state and handle rendering updates. This provides a robust and efficient way to handle the dynamic nature of the application.


## "Add Product feature"

![Alt](https://i.ibb.co/DL62gmm/Screenshot-2023-10-20-195003.png)

## Product Management with MongoDB Integration
 is a robust web application built using React, MongoDB, and Node.js that allows users to add and manage products associated with specific brands. This application seamlessly integrates with a MongoDB database to store and retrieve product data, making it an ideal choice for businesses or individuals looking to maintain a centralized product catalog for different brands.

#### Product Addition: 

Users can easily add new products to the system through a user-friendly interface. The product details, including the name, description, price, and an image, can be provided.

#### Brand-Centric Organization: 

The application organizes products based on brands, ensuring that products are associated with the appropriate brands.

#### MongoDB Integration:

Product data is stored in a MongoDB database, providing durability and scalability for your product catalog.

## Dynamic Rendering
Products added through the application are dynamically rendered in the specific brand sections, making it easy for users to view and manage products.

#### Adding Products 

To add products to the system, follow these steps:

Select a Brand: Choose the brand for which you want to add a product.

Add Product Details: Fill in the product details, including the product name, description, price, and upload an image.

Submit: Click the "Add Product" button to save the product to the database

#### MongoDB Integration

The application is configured to connect to a MongoDB database for data storage. Ensure that you have a running MongoDB instance and provide the connection details in the application's configuration.
## "Update Product feature"

![Alt](https://i.ibb.co/YLCzNJb/Screenshot-2023-10-20-195635.png)

Product Management with MongoDB Integration includes an efficient update product section that enables users to edit and modify product information stored in MongoDB. With this feature, users can maintain an up-to-date product catalog for specific brands.

#### Edit Product Details: 
 
Users can easily update product details such as the product name, description, price, and product image. This flexibility allows you to keep your product information accurate and relevant.

#### Brand-Centric Organization: 

The update product section ensures that changes are reflected in the appropriate brand sections. This organization simplifies product management and keeps products associated with their respective brands.

#### Real-Time Updates:

Product updates are immediately reflected in the brand-specific sections, providing a real-time view of the changes made.

## "Cart section feature"

![Alt](https://i.ibb.co/JH6Dqs8/Screenshot-2023-10-20-200505.png)

The Shopping Cart Feature with MongoDB Integration is a powerful addition to the Product Management application, allowing users to add products to a cart, store cart data in MongoDB, and provide an option to remove items from the cart. This feature simplifies the shopping experience by enabling users to review their selected items before making a purchase.

#### Add Products to the Cart
Users can conveniently add products to their cart with a single click. The cart stores the selected items, ensuring that users can keep track of their choices.

#### Cart Display
The cart section displays the added items, along with product details like the name, description, price, and an image.

#### Remove from Cart
Each product in the cart is accompanied by a "Remove from Cart" button. Users can remove items they no longer wish to purchase, ensuring a customizable shopping experience.

#### MongoDB Integration
Cart data is stored in a MongoDB database, providing persistence and scalability for managing user-specific shopping carts.

#### MongoDB Integration
The application's shopping cart feature seamlessly integrates with MongoDB to store cart data, allowing users to maintain their shopping carts across sessions.
## "Responsive Design"
![Alt](https://i.ibb.co/6RGBx5W/Screenshot-2023-10-20-201031.png)

#### Responsive Design Using Tailwind CSS, DaisyUI, and React JSX
Creating a responsive design for the Event Management Website using Tailwind CSS, DaisyUI, and React JSX involves leveraging the utility-first approach provided by these frameworks and libraries. Here's a guide on how to achieve a responsive design for desktop, tablet, and mobile devices:

#### Set Up Tailwind CSS with DaisyUI
`npm install tailwindcss daisyui
`

Then, configure Tailwind CSS by creating a tailwind.config.js file and importing DaisyUI:

`// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
`

Run the Tailwind CSS build process:

'
`npx tailwindcss build src/styles.css -o src/output.css
`
#### Use Tailwind CSS Classes in React JSX
Utilize Tailwind CSS classes directly in your React JSX components to style and structure the UI for responsiveness

#### Implement Responsive Classes
Tailwind CSS provides responsive classes for handling different screen sizes. For example, you can use `md:` prefix for styles that apply from medium screens and up, and `lg:` for large screens and up.

#### By following these steps and utilizing the utility-first approach of Tailwind CSS and DaisyUI within React JSX components, you can achieve a responsive design that caters to desktop, tablet, and mobile devices effectively.