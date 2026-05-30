const products = [
    { id: 1, name: "iPhone 16", price: 25990000, category: "phone", image: "https://placehold.co/200", rating: 4.5, inStock: true },
    { id: 2, name: "Samsung S25", price: 22990000, category: "phone", image: "https://placehold.co/200", rating: 4.6, inStock: true },
    { id: 3, name: "Xiaomi 15", price: 17990000, category: "phone", image: "https://placehold.co/200", rating: 4.3, inStock: true },

    { id: 4, name: "MacBook Air", price: 29990000, category: "laptop", image: "https://placehold.co/200", rating: 4.9, inStock: true },
    { id: 5, name: "Dell XPS", price: 28990000, category: "laptop", image: "https://placehold.co/200", rating: 4.7, inStock: true },
    { id: 6, name: "Asus Vivobook", price: 18990000, category: "laptop", image: "https://placehold.co/200", rating: 4.2, inStock: true },

    { id: 7, name: "iPad Air", price: 15990000, category: "tablet", image: "https://placehold.co/200", rating: 4.8, inStock: true },
    { id: 8, name: "Galaxy Tab", price: 14990000, category: "tablet", image: "https://placehold.co/200", rating: 4.4, inStock: true },
    { id: 9, name: "Xiaomi Pad", price: 9990000, category: "tablet", image: "https://placehold.co/200", rating: 4.1, inStock: true },

    { id: 10, name: "AirPods Pro", price: 5990000, category: "accessory", image: "https://placehold.co/200", rating: 4.8, inStock: true },
    { id: 11, name: "Galaxy Buds", price: 3990000, category: "accessory", image: "https://placehold.co/200", rating: 4.4, inStock: true },
    { id: 12, name: "Logitech MX", price: 2990000, category: "accessory", image: "https://placehold.co/200", rating: 4.6, inStock: true }
];

let currentProducts = [...products];
let cartCount = 0;

const app = document.getElementById("app");

createLayout();
renderProducts(currentProducts);

function createLayout(){

    app.innerHTML = `
        <div class="header">
            <h1>Product Catalog</h1>
            <button id="themeBtn">Dark Mode</button>
        </div>

        <div class="controls">
            <input type="text" id="search" placeholder="Search product">

            <select id="sort">
                <option value="">Sort</option>
                <option value="priceAsc">Price ↑</option>
                <option value="priceDesc">Price ↓</option>
                <option value="name">Name A-Z</option>
                <option value="rating">Highest Rating</option>
            </select>
        </div>

        <div class="categories">
            <button data-category="all">All</button>
            <button data-category="phone">Phone</button>
            <button data-category="laptop">Laptop</button>
            <button data-category="tablet">Tablet</button>
            <button data-category="accessory">Accessory</button>
        </div>

        <div id="products"></div>

        <div class="cart" id="cart">0</div>
    `;

    document
        .getElementById("search")
        .addEventListener("input", searchProducts);

    document
        .getElementById("sort")
        .addEventListener("change", sortProducts);

    document
        .querySelector(".categories")
        .addEventListener("click", filterByCategory);

    document
        .getElementById("themeBtn")
        .addEventListener("click", function(){
            document.body.classList.toggle("dark-mode");
        });
}

function renderProducts(list){

    const container =
        document.getElementById("products");

    container.innerHTML = "";

    list.forEach(product => {

        const card =
            document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>${product.price.toLocaleString()} đ</p>
            <p>⭐ ${product.rating}</p>
            <button>Add Cart</button>
        `;

        card.querySelector("button")
        .addEventListener("click", function(e){

            e.stopPropagation();

            cartCount++;

            document.getElementById("cart")
            .textContent = cartCount;
        });

        card.addEventListener("click", function(){
            showModal(product);
        });

        container.appendChild(card);
    });
}

function searchProducts(){

    const keyword =
        this.value.toLowerCase();

    currentProducts =
        products.filter(product =>
            product.name
                .toLowerCase()
                .includes(keyword)
        );

    renderProducts(currentProducts);
}

function filterByCategory(e){

    if(!e.target.dataset.category) return;

    const category =
        e.target.dataset.category;

    if(category === "all"){
        currentProducts = [...products];
    }
    else{
        currentProducts =
            products.filter(product =>
                product.category === category
            );
    }

    renderProducts(currentProducts);
}

function sortProducts(){

    const value = this.value;

    const arr = [...currentProducts];

    if(value === "priceAsc"){
        arr.sort((a,b)=>a.price-b.price);
    }

    if(value === "priceDesc"){
        arr.sort((a,b)=>b.price-a.price);
    }

    if(value === "name"){
        arr.sort((a,b)=>
            a.name.localeCompare(b.name)
        );
    }

    if(value === "rating"){
        arr.sort((a,b)=>
            b.rating-a.rating
        );
    }

    renderProducts(arr);
}

function showModal(product){

    const modal =
        document.createElement("div");

    modal.className = "modal";

    modal.innerHTML = `
        <div class="modal-content">
            <h2>${product.name}</h2>
            <p>Price: ${product.price.toLocaleString()} đ</p>
            <p>Rating: ${product.rating}</p>
            <p>Category: ${product.category}</p>
            <button>Close</button>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector("button")
    .addEventListener("click", function(){
        modal.remove();
    });
}