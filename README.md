# Product Dashboard - Virtual Internship Assignment

A React-based dashboard application that manages product data with dynamic filtering, editable fields, and simulated API interactions.

## 🚀 Live Demo
**[https://internship-task-sumit-kumar-singhs-projects-4699694d.vercel.app/]**

## 🛠️ Technologies Used
* **Framework:** React (Vite)
* **Styling:** CSS3 (Custom responsive design)
* **State Management:** React Hooks (`useState`, `useEffect`, `useMemo`)
* **API:** Mock API with `Promise` & `setTimeout` simulation

## ✨ Key Features
* **Mock API Layer:** Simulates network latency (800ms) and CRUD operations locally without a backend.
* **Dynamic Filtering:** Dependent dropdowns where "Brand" options update based on the selected "Category" (and vice-versa).
* **Editable Table:** Click-to-edit functionality for product titles.
* **Optimistic UI:** UI updates immediately on delete/edit actions for a snappy user experience.
## 🚀 Features

* **Live Data Fetching:** Retrieves 30 products from the public API.
* **Filtering:** Filter products by **Brand** and **Category**.
* **Product Ratings:** Displays star ratings for every product.
* **Mock CRUD Operations:**
    * **Update:** Edit product titles (using local state).
    * **Delete:** Removes item from the local view (simulated).
    * **Loading States:** Shows a loading spinner/text while data is being fetched.
    * **Error Handling:** Graceful error messages if the API fails.
## ⚙️ Setup Instructions

1.  **Clone the repository**

    ```bash
    git clone [Your Repository URL]
    cd internship-task
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Run the application**

    ```bash
    npm run dev
    ```

4.  **Build for production**

    ```bash
    npm run build
    ```

## 📂 Project Structure

```text
src/
├── api/           # Mock Service (simulates database & network delay)
├── components/    # Reusable UI components (ProductTable, FilterBar)
├── App.jsx        # Main Logic (State & Filter Algorithms)
└── styles/        # CSS files