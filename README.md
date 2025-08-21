# GearIT E-commerce Dashboard

This is a simple e-commerce dashboard application built with Next.js 15, focusing on a robust authentication flow and product management features. The application is designed to be fully responsive and includes a protected route for adding new products.

### Features
* **Authentication**: Secure login and registration using NextAuth.js.
* **Public Routes**: Users can browse all products and view product details without logging in.
* **Protected Route**: A dedicated dashboard page for adding new products, accessible only to authenticated users.
* **Data Handling**: Products are fetched from a mock backend API and are temporarily added for the duration of the server's session.
* **UI/UX Enhancements**: The application features a loading spinner on form submission and displays toast messages for user feedback.

### [cite_start]Technologies Used [cite: 30, 31, 32, 33]
* [cite_start]**Frontend**: Next.js 15 (App Router) [cite: 31]
* [cite_start]**Styling**: Tailwind CSS [cite: 33]
* [cite_start]**Authentication**: NextAuth.js [cite: 32]
* [cite_start]**Backend**: Next.js Route Handlers (/api) for fetching and creating data [cite: 33]

### Setup & Installation
Follow these steps to get the project running on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone [Your-GitHub-Repo-Link]
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

### [cite_start]Route Summary [cite: 3, 7, 10, 14, 18, 21, 22]

| Route | Description | Authentication Required |
| :--- | :--- | :--- |
| `/` | [cite_start]**Landing Page**: Main entry point with a Navbar, Hero, Product Highlights, and Footer. [cite: 7, 8] | [cite_start]No [cite: 9] |
| `/login` & `/register` | [cite_start]**Authentication Pages**: Pages for logging in with credentials and creating a new account. [cite: 10, 11, 12] | No |
| `/products` | [cite_start]**Product List Page**: Displays a list of all products. [cite: 14] | [cite_start]No [cite: 15] |
| `/products/[id]` | [cite_start]**Product Details Page**: Shows full details for a single product. [cite: 18, 19] | [cite_start]No [cite: 20] |
| `/dashboard/add-product` | [cite_start]**Protected Page**: A form to add new products. [cite: 21, 23] | [cite_start]Yes [cite: 22] |

### Live Site & Repository Links
* **GitHub Repository:** `[Your-GitHub-Repo-Link]`
* **Live Site:** `[Your-Vercel-Deployment-Link]`