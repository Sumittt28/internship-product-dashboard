import axios from 'axios';

// Storing data in a variable so we don't lose changes immediately
let productsData = []; 

// Helper to show loading spinner (simulating slow internet)
const simulateDelay = (ms = 800) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const fetchProducts = async () => {
    // If we already have data, just return it
    if (productsData.length > 0) {
        return productsData;
    }

    try {
        const response = await axios.get('https://dummyjson.com/products?limit=30');
        
        // Map the data to keep only what we need
        productsData = response.data.products.map(item => ({
            id: item.id,
            title: item.title,
            brand: item.brand || "Unknown", // Handle missing brands
            price: item.price,
            category: item.category,
            rating: item.rating
        }));

        return productsData;

    } catch (error) {
        console.error("Failed to load products:", error);
        return [];
    }
};

export const deleteProduct = async (id) => {
    await simulateDelay();
    // Remove the item from our local array
    productsData = productsData.filter(p => p.id !== id);
    return true;
};