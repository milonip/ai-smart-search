import React, { useState, useEffect } from "react";
import products from "./products";
import "./App.css";

const categories = ["shoes", "shirts", "bags", "pants", "dress"];

function parseQuery(query) {
  query = query.toLowerCase();

  // Extract max price from patterns like "under ₹1000" or "below 500"
  let maxPrice = null;
  const priceMatch = query.match(/(?:under|below) ?₹?(\d+)/);
  if (priceMatch) {
    maxPrice = parseInt(priceMatch[1], 10);
  }

  // Extract category from known categories
  let category = null;
  for (const cat of categories) {
    if (query.includes(cat)) {
      category = cat;
      break;
    }
  }

  // Extract rating preference from phrases like "good reviews" or "high rating"
  let minRating = null;
  if (query.includes("good reviews") || query.includes("high rating")) {
    minRating = 4;
  }

  return { maxPrice, category, minRating };
}

function App() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  React.useEffect(() => {
    const { maxPrice, category, minRating } = parseQuery(searchQuery);

    let filtered = products;

    if (maxPrice !== null) {
      filtered = filtered.filter((p) => p.price <= maxPrice);
    }
    if (category !== null) {
      filtered = filtered.filter((p) => p.category === category);
    }
    if (minRating !== null) {
      filtered = filtered.filter((p) => p.rating >= minRating);
    }

    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="app-container">
      <h1>AI E-Commerce Smart Search</h1>
      <input
        type="text"
        placeholder="Search products (e.g. shoes under ₹1000 with good reviews)"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p><strong>Price:</strong> ₹{product.price}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p>{product.description}</p>
              <p><strong>Rating:</strong> {product.rating} / 5</p>
            </div>
          ))
        ) : (
          <p>No products match your search.</p>
        )}
      </div>
    </div>
  );
}

export default App;

const categories = ["shoes", "shirts", "bags", "pants", "dress"];

function parseQuery(query) {
  query = query.toLowerCase();

  // Extract max price from patterns like "under ₹1000" or "below 500"
  let maxPrice = null;
  const priceMatch = query.match(/(?:under|below) ?₹?(\\d+)/);
  if (priceMatch) {
    maxPrice = parseInt(priceMatch[1], 10);
  }

  // Extract category from known categories
  let category = null;
  for (const cat of categories) {
    if (query.includes(cat)) {
      category = cat;
      break;
    }
  }

  // Extract rating preference from phrases like "good reviews" or "high rating"
  let minRating = null;
  if (query.includes("good reviews") || query.includes("high rating")) {
    minRating = 4;
  }

  return { maxPrice, category, minRating };
}

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const { maxPrice, category, minRating } = parseQuery(searchQuery);

    let filtered = products;

    if (maxPrice !== null) {
      filtered = filtered.filter((p) => p.price <= maxPrice);
    }
    if (category !== null) {
      filtered = filtered.filter((p) => p.category === category);
    }
    if (minRating !== null) {
      filtered = filtered.filter((p) => p.rating >= minRating);
    }

    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="app-container">
      <h1>AI E-Commerce Smart Search</h1>
      <input
        type="text"
        placeholder="Search products (e.g. shoes under ₹1000 with good reviews)"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p><strong>Price:</strong> ₹{product.price}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p>{product.description}</p>
              <p><strong>Rating:</strong> {product.rating} / 5</p>
            </div>
          ))
        ) : (
          <p>No products match your search.</p>
        )}
      </div>
    </div>
  );
}

export default App;
