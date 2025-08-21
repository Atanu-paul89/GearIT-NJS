<img width="1892" height="885" alt="Screenshot 2025-08-21 221601" src="https://github.com/user-attachments/assets/f92e0f2e-6188-4ee5-952d-86d98cfbf8d5" />

# GearIT E-commerce Dashboard

This is a simple e-commerce dashboard application built with Next.js 15, focusing on a robust authentication flow and product management features. The application is designed to be fully responsive and includes a protected route for adding new products.

### Features
* **Authentication**: Secure login and registration using NextAuth.js.
* **Public Routes**: Users can browse all products and view product details without logging in.
* **Protected Route**: A dedicated dashboard page for adding new products, accessible only to authenticated users.
* **Data Handling**: Products are fetched from a mock backend API and are temporarily added for the duration of the server's session.
* **UI/UX Enhancements**: The application features a loading spinner on form submission and displays toast messages for user feedback.

### [cite_start]Technologies Used 
* **Frontend**: Next.js 15 (App Router) 
* **Styling**: Tailwind CSS 
* **Authentication**: NextAuth.js 
* **Backend**: Next.js Route Handlers (/api) for fetching and creating data 

### Setup & Installation
Follow these steps to get the project running on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Atanu-paul89/GearIT-NJS
    cd gearit-njs
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:3000`.

### [cite_start]Route Summary 

| Route | Description | Authentication Required |
| :--- | :--- | :--- |
| `/` | **Landing Page**: Main entry point with a Navbar, Hero, Product Highlights, and Footer.  | No  |
| `/login` & `/register` | **Authentication Pages**: Pages for logging in with credentials and creating a new account. | No |
| `/products` | **Product List Page**: Displays a list of all products.  | No  |
| `/products/[id]` | **Product Details Page**: Shows full details for a single product.  | No  |
| `/dashboard/add-product` | **Protected Page**: A form to add new products.  | Yes (defined manually)  |
| `api/products` | **Data Api**: data storage | No | 

### Live Site & Repository Links
* **Live Site:** `[Your-Vercel-Deployment-Link]`
