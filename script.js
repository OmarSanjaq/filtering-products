const products = [
    { name: 'Laptop', category: 'Electronics', price: 2800 },
    { name: 'Headphones', category: 'Electronics', price: 300 },
    { name: 'T-Shirt', category: 'Clothing', price: 80 },
    { name: 'Jeans', category: 'Clothing', price: 120 },
  ];
  
  function displayProducts(productArray) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; 
    productArray.forEach(product => {
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
        <h2>${product.name}</h2>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>

    `;
    productList.appendChild(productCard);
    });
  }

  function filterProducts(category) {
    if (category === 'All') {
      displayProducts(products);
    } else {
      const filteredProducts = products.filter(product => product.category === category);
      displayProducts(filteredProducts);
    }
  }
  
  window.onload = () => displayProducts(products);
  