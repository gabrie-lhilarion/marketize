import products from '../data/products.js';
import {
    shoppingData,
    addToSession,
    addToShoppingBascket,
    deleteFromSession,
    increaseItem,
    decreaseItem,
    numberOfItems,
    cartTotal,
    emptyBasketInfo
} from '../js/cart.js';

export const toggleUserInfo = (elements) => {
    const shoppingBaskets = [
        'shopping-basket-desktop',
        'shopping-basket-mobile'
    ]
       
    if (!document.getElementById(`${shoppingBaskets[0]}`).classList.contains('hidden')) {
        const shoppingCartIcons = document.querySelectorAll(".cart");
        shoppingCartIcons[0].click();
    }
      
    elements.forEach( (item) => {
        const thisSelector = document.getElementById(`${item}`);
        thisSelector.classList.toggle('hidden');
    })

}

export const toggleShoppingCarts = (shoppingBaskets) => {

    const userInfo = [
        'user-dropdown-desktop',
        'user-dropdown-mobile'
    ]

    if (!document.getElementById(`${userInfo[0]}`).classList.contains('hidden')) {
        const userIcons = document.querySelectorAll(".user");
        userIcons[0].click();
    }

    shoppingBaskets.forEach( (basket) => {
        const thisBasket = document.getElementById(`${basket}`);
        thisBasket.classList.toggle("hidden");
    })

}

export const displayCategories = () => {
    const allCategories = new Set([...products.map( item => item.category)]);
    const desktopMenu = document.querySelector('#category-list ul');
    const mobileMenu = document.getElementById("mobile-menu");

    let listOfCategories = `<li>
        <a href="#All_products"> 
            <i> 
                <span class="rounded"> 
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" fill="currentColor" 
                class="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                </svg>
                </span> 
                <span> 
                <span class="name-of-product">All Products</span> 
                    <span class="css-spapped-arrow-all">${products.length}</span>
                </span>
            </i>
            <span class="current-category">
               
            </span> 
        </a> 
    </li>`;

    let listOfCategoriesMobile = `
    <div class="product-item-mobile">
        <a href="#All_products"> 
            <em> All products </em> 
            <span>${products.length}</span> 
        </a>
    </div>`;

    for ( let value of allCategories.values() ) {
        listOfCategories+= `
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

        listOfCategoriesMobile += `
        <div class="product-item-mobile">
            <a href="#${value.replace(/ /gi, '_')}"> 
                <em> ${value} </em> 
                <span> 
                    ${products.filter( item => item.category === value).length}
                </span> 
            </a>
        </div>
        `
    }

    desktopMenu.innerHTML = listOfCategories;
    mobileMenu.innerHTML = listOfCategoriesMobile;
}

export const displayAllProducts = () => {
    const grid = document.getElementById('grid');
    
    const listOfProducts = products.map(product => `
    
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

    grid.innerHTML = listOfProducts;
    
}

export const displayProductsOfCategory = (category) => {
   const productsOfCategory = products.filter( product => product.category === category )
   const grid = document.getElementById('grid');

   const listOfProducts = productsOfCategory.map(product => `
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

   grid.innerHTML = listOfProducts;
}

export const indicateCurrentCategory = (element, hash) => {
    document.querySelectorAll(`${element} li`).forEach( item => item.style.backgroundColor = 'white' );
    document.querySelectorAll("#mobile-menu a").forEach( item => {
        Object.assign(item.style, {backgroundColor: 'white', color: '#555'})
    });

    if (hash === '') {
        document.querySelector(`${element} a[href="#All_products"]`).parentElement.style.backgroundColor = 'whitesmoke';

        const mobileLinks = document.querySelector(`#mobile-menu a[href="#All_products"]`);
        Object.assign(mobileLinks.style, {backgroundColor: '#fff', color: '#333'})
    } else {
        document.querySelector(`${element} a[href="${hash}"]`).parentElement.style.backgroundColor = 'whitesmoke';

        const mobileLinks = document.querySelector(`#mobile-menu a[href="${hash}"]`);
        Object.assign(mobileLinks.style, {backgroundColor: '#333', color: 'whiteSmoke'})
    }
}

export const adjustWidthOfElements = (container) => {
    const elements = document.querySelectorAll(`${container} a em`);
    elements.forEach( element => {
        const lengthOfInnerText = element.textContent.length;
        element.parentElement.style.width = `${(lengthOfInnerText * 9)}px`;
    })
}

export const createAddToCartBtn = (e) => {
   const productID = e.target.id;
   const selectedItem = products.filter( product => product.id === productID )[0].items;
   const optionsDiv = document.createElement('div');
   let htmlContent = '';
   selectedItem.forEach( item => {
        htmlContent += `
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
        `;
   });

   optionsDiv.innerHTML = htmlContent;
   e.target.before(optionsDiv);
   e.target.remove();
}

const keyGen = (len) => {
    let key = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz';
    const charsLen = chars.length;
    for (let i = 0; i < len; i += 1) {
      key += chars.charAt(Math.floor(Math.random() * charsLen));
    }
    return key;
}

export const createPlusMinusBtn = (e) => {
    const cartId = keyGen(8);
    const productId = e.target.dataset.productId;
    const name = e.target.dataset.productName;
    const number = e.target.dataset.productNumber; 
    const price = e.target.dataset.productPrice;
    const quantity = 1;
    const image = products.filter( item => item.id === productId)[0].largeImage;
    
    const newItem = {
        cartId,
        productId,
        name,
        number,
        price,
        quantity,
        image,
    }

    const cartPlusMinus =  `
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

    const priceTag = e.target.previousElementSibling;

    const quantityInCart = document.querySelectorAll('.total-in-cart');
    quantityInCart.forEach( cart => cart.textContent = Number(cart.textContent)  + 1 );

    priceTag.insertAdjacentHTML('afterend', cartPlusMinus)
    e.target.remove();
    addToSession(newItem);
}

export const  syncSessionDataToDom = (sessionData) => {
    if (sessionData.length === 0) return

    sessionData.forEach( data => {
        const {cartId, productId, name, number, price, quantity} = data;

        const shopNowButton = document.getElementById(`${productId}`);

        if (shopNowButton) {
            shopNowButton.click();
        }

        if (document.querySelector(`.add-to-cart.${productId}[data-product-number="${number}"]`)) {

            const button = document.querySelector(`.add-to-cart.${data.productId}[data-product-number="${number}"]`);
            const priceTag = button.previousElementSibling;
            
            const cartPlusMinus =  `
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

            priceTag.insertAdjacentHTML('afterend', cartPlusMinus);
            button.remove();
        } 
        addToShoppingBascket(data);
    });

    const cartTotalContainers = document.querySelectorAll('.total-in-cart');
    cartTotalContainers.forEach( container => container.textContent = numberOfItems() );
}

export const itemsInCartApp = () => shoppingData()?.reduce( (total, current) => {
    total += current.quantity;
    return total;
}, 0) || 0;

const recalculateShoppingCart = (data, value) => {
    const { id, price, number, quantity } = data;
    const quantityContainers = document.querySelectorAll(`.${id}-${number} .quantity`);
    const itemTotalContainers = document.querySelectorAll(`.${id}-${number} .item-total`);

    quantityContainers.forEach( element => element.textContent = quantity + value );
    itemTotalContainers.forEach( element => element.textContent = (quantity + value) * price );

    const cartTotalContainers = document.querySelectorAll('.total-in-cart');
    cartTotalContainers.forEach( container => container.textContent = numberOfItems()  );
}

export const plusItem = (e) => {

    const id = e.target.dataset.productId;
    const number = Number(e.target.dataset.productNumber);
    const price = Number(e.target.dataset.productPrice);
    const quantity = Number(e.target.previousElementSibling.textContent);

    increaseItem(id, number);

    e.target.previousElementSibling.textContent = quantity + 1;

    const data = {id, number, price, quantity};
    recalculateShoppingCart(data, 1);
}

export const minusItem = (e) => {
    
    const cartId = e.target.parentElement.id;
    const id = e.target.dataset.productId;
    const number = Number(e.target.dataset.productNumber);
    const name = e.target.dataset.productName;
    const price = Number(e.target.dataset.productPrice);
    const quantity = Number(e.target.nextElementSibling.textContent);

    const  deleteFromBaskets = (elements) => {
        elements.forEach( element => {
            element.parentElement.parentElement.remove()
        })
    };
    
    const priceSpan = e.target.parentElement.previousElementSibling;

    const displayAddToCartButton = () => {
        const button = `
        <button 
        class="add-to-cart ${id}" 
        data-product-id="${id}" 
        data-product-number="${number}" 
        data-product-name="${name.replace(/_/gi,' ')}" 
        data-product-price="${price}">
            Add to cart
        </button>
        `;

        e.target.parentElement.remove();
        priceSpan.insertAdjacentHTML('afterend', button);
    }

    const shoppingBaskets = document.querySelectorAll('#cart-items-mobile, #cart-items-desktop')
    const indicateEmptyBaskets = (shoppingBaskets) => {

        if (shoppingBaskets[0].children.length) return;

        shoppingBaskets.forEach( basket => {
            basket.innerHTML = emptyBasketInfo;
        });
    }

    const cartTotalContainers = document.querySelectorAll('.total-in-cart');
    const numberOfItemsInCart = (cartTotalContainers) => {
        cartTotalContainers.forEach( container => container.textContent = numberOfItems() );
    }

    if (quantity > 1) {
        decreaseItem(id, number);
        e.target.nextElementSibling.textContent = quantity - 1;

        const data = {cartId, id, number, price, quantity};
        recalculateShoppingCart(data, -1);
    } else {
        deleteFromSession(cartId);

        const items = document.querySelectorAll(`.${id}-${number}`);
        deleteFromBaskets(items);

        numberOfItemsInCart(cartTotalContainers)

        displayAddToCartButton();

        indicateEmptyBaskets(shoppingBaskets)
        
    }
   
}