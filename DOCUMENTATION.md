# Technical Documentation

## 🏗️ Project Architecture

This project is built using **React** and **Vite**. I chose a simple component-based architecture to keep the data flow unidirectional (Parent to Child).

### Component Tree
* **App.jsx** (Main Container)
    * Manage State (`products`, `loading`, `error`, `filters`)
    * Handles Logic (`loadData`, `handleDelete`, `handleEdit`)
    * **FilterBar.jsx** (Presentation) -> Displays dropdowns & Reset button
    * **ProductTable.jsx** (Presentation) -> Displays data grid & Action buttons

---

## 🔌 Mock API Service (`src/api/mockApi.js`)

Since the external API (`dummyjson.com`) is read-only, I implemented a "Middle-man" service to simulate a real backend.

1.  **`fetchProducts()`**:
    * Checks if a local array `productsData` is empty.
    * If empty, it fetches from the real API and caches the result.
    * If not empty, it returns the cached data.
    * *Why?* This ensures that when we delete/edit an item, the changes persist even if we filter the list.

2.  **`deleteProduct(id)`**:
    * Simulates a network delay.
    * Filters the `productsData` array to remove the item.
    * Returns `true` on success.

3.  **`updateProduct(id, newTitle)`**:
    * Finds the product by ID in the local memory.
    * Updates the title property.
    * Returns the updated object.

---

## 🧠 Design Choices & Trade-offs

### 1. State Management
I used standard React `useState` hooks instead of Redux or Context API.
* **Reason:** For a small application with only 3 levels of depth, Redux would be over-engineering. Passing props is cleaner and easier to debug.

### 2. The Edit Interface
I used `window.prompt()` for the Edit functionality.
* **Reason:** Building a full Modal component would require significantly more CSS and state logic. For this assignment, `window.prompt` demonstrates the **CRUD logic** effectively without bloating the UI code.

### 3. CSS Strategy
I used vanilla CSS with BEM-style naming conventions (e.g., `.product-table`, `.delete-btn`).
* **Reason:** To demonstrate a solid understanding of CSS fundamentals (Flexbox, Box Model) without relying on a framework like Tailwind or Bootstrap.