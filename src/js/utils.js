import products from '../data/products.js';

import {
    linkToAllCategories,
    addCategoryLinks,
    linkToAllCategoriesMobile,
    addCategoryLinksMobile,
    mapJoinProducts,
    mapJoinProductsOfCategory,
    addToCartBtn,
    makeButtonsWith,
    makeButtonsWith_2,
    addToCartDisplay,
} from './dom-strings.js';

import {
    emptyBasketInfo,
    shoppingData,
    addToSession,
    addToShoppingBascket,
    deleteFromSession,
    increaseItem,
    decreaseItem,
    numberOfItems,
    cartTotal,
} from '../js/cart.js';

export const toggleUserInfo = (elements) => {
    const shoppingBaskets = [
        'shopping-basket-desktop',
        'shopping-basket-mobile'
    ]

    const desktopBasketIsHidden = document.getElementById(`${shoppingBaskets[0]}`).classList.contains('hidden');
    if(!desktopBasketIsHidden) {
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

    let desktopMenuList =  linkToAllCategories(products.length);

    let mobileMenuList = linkToAllCategoriesMobile(products.length) ;

    for ( let value of allCategories.values() ) {

        desktopMenuList += addCategoryLinks(products, value);

        mobileMenuList += addCategoryLinksMobile(products, value) 
    }

    desktopMenu.innerHTML = desktopMenuList;
    mobileMenu.innerHTML = mobileMenuList;
}

export const displayAllProducts = () => {
    const grid = document.getElementById('grid');
    
    const listOfProducts = mapJoinProducts(products)

    grid.innerHTML = listOfProducts;
}

export const displayProductsOfCategory = (category) => {
   const thisCategory = products.filter( product => product.category === category )
   const grid = document.getElementById('grid');

   const listOfProducts = mapJoinProductsOfCategory(thisCategory);

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
        htmlContent += addToCartBtn(item, productID);
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

    const cartPlusMinus = makeButtonsWith(newItem);

    const priceTag = e.target.previousElementSibling;

    priceTag.insertAdjacentHTML('afterend', cartPlusMinus)
    e.target.remove();
    addToSession(newItem);
}

export const  syncSessionDataToDom = (sessionData) => {
    if (sessionData.length === 0) return

    sessionData.forEach( data => {
        const { productId, number } = data;

        const shopNowButton = document.getElementById(`${data.productId}`);

        if (shopNowButton) {
            shopNowButton.click();
        }

        if (document.querySelector(`.add-to-cart.${productId}[data-product-number="${number}"]`)) {

            const button = document.querySelector(`.add-to-cart.${productId}[data-product-number="${number}"]`);
            const priceTag = button.previousElementSibling;
            
            const cartPlusMinus = makeButtonsWith_2(data);

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
        const button = addToCartDisplay(id, number, name, price);

        e.target.parentElement.remove();
        priceSpan.insertAdjacentHTML('afterend', button);
    }

    const shoppingBaskets = document.querySelectorAll('#cart-items-mobile, #cart-items-desktop');
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