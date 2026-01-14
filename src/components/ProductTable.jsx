import React from 'react';
import '../App.css'; // We will add styles later

const ProductTable = (props) => {
    const { products, handleDelete } = props;

    // Debugging check
    console.log("Rendering table with", products.length, "items");

    return (
        <div className="table-container">
            <table className="product-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.brand}</td>
                            <td>${product.price}</td>
                            <td>
                                <button 
                                    className="delete-btn"
                                    onClick={() => handleDelete(product.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {products.length === 0 && <p style={{textAlign: 'center'}}>No products found.</p>}
        </div>
    );
};

export default ProductTable;