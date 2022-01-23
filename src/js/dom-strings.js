export const linkToAllCategories = (number) => {
    return `
    <li>
        <a href="#All_products"> 
            <i> 
                <span class="rounded"> 
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" fill="currentColor" 
                class="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 
                .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 
                .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 
                0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 
                0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 
                .5.5h4a.5.5 0 0 0 .5-.5z"/>
                </svg>
                </span> 
                <span> 
                <span class="name-of-product">All Products</span> 
                    <span class="css-spapped-arrow-all">${number}</span>
                </span>
            </i>
            <span class="current-category">
            
            </span> 
        </a> 
    </li>
    `
}    

export const addCategoryLinks = (products, value) => {
    return `
    <li>
        <a href="#${value.replace(/ /gi, '_')}">
            <i>
                <span class="rounded"> ${value[0]} </span>
                <span>
                    <span class="name-of-product">${value}</span>
                    <span class="css-spapped-arrow"> 
                        ${products.filter( item => item.category === value).length} 
                    </span> 
                </span>
            </i>
            <span class="current-category">
            .
            </span>
        </a>
    </li>
    `;
}

export const linkToAllCategoriesMobile = (number) => {
    return `   
        <div class="product-item-mobile">
            <a href="#All_products"> 
                <em> All products </em> 
                <span>${number}</span> 
            </a>
        </div>
    `;
}

export const addCategoryLinksMobile = (products, value) => {
    return `
    <div class="product-item-mobile">
        <a href="#${value.replace(/ /gi, '_')}"> 
            <em> ${value} </em> 
            <span> 
                ${products.filter( item => item.category === value).length}
            </span> 
        </a>
    </div>
    `;
}

export const mapJoinProducts = (products) => {
    return products.map(product => `
    <div>
        <div class="product-item">
            <img src="${product.largeImage}" alt="">
            <h2><i>${product.name}</i></h2>
            <p>
                <i>${product.description}</i>
            </p>
            <button 
            id="${product.id}" 
            class="shop-now"
            > 
                SHOP NOW 
            </button>
            <p class="clear"></p>
        </div>
    </div>
    ` ).join("");
} 

export const mapJoinProductsOfCategory = (category) => {
    return category.map(product => `
    <div>
        <div class="product-item">
            <img src="${product.largeImage}" alt="">
          
            <h2> <i> ${product.name} </i> </h2>
            <p>   
                 <i> ${product.description} </i>
            </p>
            <button id="${product.id}" 
            class="shop-now"
            >
            SHOP NOW 
            </button>
            <p class="clear"></p>
        </div>
    </div>
    ` ).join("");
}

export const addToCartBtn = (item, productID) => {
    return `
    <div class="item-list">
        <p>  <i class="item_name"> ${item.item_name}  </i></p>
        <p class="price-add-to-cart"> 
            <span class="price"> <i> &#8358; ${item.price}  </i></span>
            <button 
            class="add-to-cart ${productID}"
            data-product-id="${productID}" 
            data-product-number="${item.item_number}"
            data-product-name="${item.item_name}"
            data-product-price="${item.price}"
            >
            Add to cart
            </button>
        </p>
    </div>
    `
}

export const makeButtonsWith = ({ cartId, productId, name, number, price }) => {
    return  `
    <span id="${cartId}" class="cart-events ${productId}">

    <button 
    class="minus"
    data-product-id="${productId}"
    data-product-name="${name.replace(/ /gi, '_')}"
    data-product-number="${number}"
    data-product-price="${price}"
    >
        &minus;
    </button>

    <span class="qtty">1</span>

    <button 
    class="plus"
    data-product-id="${productId}"
    data-product-name="${name.replace(/ /gi, '_')}"
    data-product-number="${number}"
    data-product-price="${price}"
    >
        &plus;
    </button>

    </span>
    `;
}

export const makeButtonsWith_2 = ({ cartId, productId, name, number, price, quantity }) => {
    return  `
    <span id="${cartId}" class="cart-events ${productId}">

    <button 
    class="minus"
    data-product-id="${productId}"
    data-product-name="${name.replace(/ /gi, '_')}"
    data-product-number="${number}"
    data-product-price="${price}"
    >
        &minus;
    </button>

    <span class="qtty">${quantity}</span>

    <button 
    class="plus"
    data-product-id="${productId}"
    data-product-name="${name.replace(/ /gi, '_')}"
    data-product-number="${number}"
    data-product-price="${price}"
    >
        &plus;
    </button>

    </span>
    `;
}

export const addToCartDisplay = (id, number, name, price) => {
    return `
        <button 
        class="add-to-cart ${id}" 
        data-product-id="${id}" 
        data-product-number="${number}" 
        data-product-name="${name.replace(/_/gi,' ')}" 
        data-product-price="${price}">
            Add to cart
        </button>
    `;
}
