document.addEventListener('DOMContentLoaded', function () {
    const productGrid = document.querySelector('.product-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const priceFilter = document.getElementById('price-filter');
    let products = [];

    // Fetch products from JSON file
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            displayProducts(products); // Display all products initially
        })
        .catch(error => console.error('Error fetching products:', error));

    // Function to display products
    function displayProducts(filteredProducts) {
        productGrid.innerHTML = ''; // Clear existing products
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <span class="price">₹${product.price}</span>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }

    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            filterProducts(category);
        });
    });

    // Function to filter products by category and price
    function filterProducts(category) {
        let filteredProducts = products;

        // Filter by category
        if (category !== 'all') {
            filteredProducts = products.filter(product => product.category === category);
        }

        // Filter by price
        const maxPrice = parseFloat(priceFilter.value);
        if (!isNaN(maxPrice)) {
            filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);
        }

        // Display filtered products
        displayProducts(filteredProducts);
    }

    // Add event listener for price filter
    priceFilter.addEventListener('input', function () {
        const category = document.querySelector('.filter-btn.active')?.getAttribute('data-category') || 'all';
        filterProducts(category); // Apply price filter to the selected category
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("scroll-btn");

    // Show the button when user scrolls 100px down
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            scrollBtn.style.display = "block";
            scrollBtn.innerHTML = "⬆"; // Change icon to up arrow
        } else {
            scrollBtn.style.display = "none";
        }
    });

    // Scroll to bottom or top when clicked
    scrollBtn.addEventListener("click", () => {
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            scrollBtn.innerHTML = "⬇"; // Change icon to down arrow
        } else {
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            scrollBtn.innerHTML = "⬆"; // Change icon to up arrow
        }
    });
});
