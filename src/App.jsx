import { useState, useEffect } from 'react'
import { fetchProducts, deleteProduct, updateProduct } from './api/mockApi'
import ProductTable from './components/ProductTable'
import FilterBar from './components/FilterBar'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      const data = await fetchProducts()
      setProducts(data)
      setLoading(false)
    } catch (err) {
      setError("Failed to load data")
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      await deleteProduct(id)
      setProducts(products.filter(p => p.id !== id))
    } catch (err) {
      alert("Error deleting product")
    }
  }

  // NEW: Handle the "Edit" Action
  const handleEdit = async (id, currentTitle) => {
    const newTitle = window.prompt("Enter new product name:", currentTitle);

    // If user clicked Cancel or didn't type anything, do nothing
    if (!newTitle || newTitle === currentTitle) return;

    try {
      // 1. Call API
      await updateProduct(id, newTitle);

      // 2. Update local state so the UI changes immediately
      const updatedList = products.map(p => {
        if (p.id === id) {
          return { ...p, title: newTitle };
        }
        return p;
      });
      setProducts(updatedList);

    } catch (err) {
      alert("Failed to update product");
    }
  }

  const handleFilterChange = (type, value) => {
    if (type === 'category') setSelectedCategory(value)
    if (type === 'brand') setSelectedBrand(value)
  }

  const resetFilters = () => {
    setSelectedCategory('')
    setSelectedBrand('')
  }

  const uniqueCategories = [...new Set(products.map(p => p.category))]
  const uniqueBrands = [...new Set(products.map(p => p.brand))]

  const filteredProducts = products.filter(product => {
    const matchCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchBrand = selectedBrand ? product.brand === selectedBrand : true;
    return matchCategory && matchBrand;
  });

  return (
    <div className="app-container">
      <h1>Internship Product Dashboard</h1>
      {loading && <div className="loading">Loading products...</div>}
      {error && <div className="error-msg">{error}</div>}
      
      {!loading && !error && (
        <>
          <FilterBar 
            brands={uniqueBrands}
            categories={uniqueCategories}
            selectedCategory={selectedCategory}
            selectedBrand={selectedBrand}
            onFilterChange={handleFilterChange}
            onReset={resetFilters}
          />
          <ProductTable 
            products={filteredProducts} 
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </>
      )}
    </div>
  )
}

export default App