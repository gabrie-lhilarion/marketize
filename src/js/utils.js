import products from '../data/products.js'

export const toggleUserInfo = (elements) => {

    const shoppingBaskets = [
        'shopping-basket-desktop',
        'shopping-basket-mobile'
    ]
       // hide shopping baskets if open
    if (!document.getElementById(`${shoppingBaskets[0]}`).classList.contains('hidden')) {
        const shoppingCartIcons = document.querySelectorAll(".cart");
        [...shoppingCartIcons][0].click();
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

    // hide userInfo if open
    if (!document.getElementById(`${userInfo[0]}`).classList.contains('hidden')) {
        const userIcons = document.querySelectorAll(".user");
        [...userIcons][0].click();
    }

    shoppingBaskets.forEach( (basket) => {
        const thisBasket = document.getElementById(`${basket}`);
        thisBasket.classList.toggle("hidden");
    })


}

export const displayCategories = () => {
    const allCategories = new Set([...products.map( item => item.category)])
    const categoryUL = document.querySelector('#category-list ul')
    let listOfCategories = '<li><a href="#All_products">All Products</a></li>';

    for ( let value of allCategories.values() ) {
        listOfCategories+= `
        <li>
            <a href="#${value}">${value}</a>
        </li>
        `
    }

    categoryUL.innerHTML = listOfCategories;
}

export const displayAllProducts = () => {
    const grid = document.getElementById('grid');
 
    const listOfProducts = products.map(item => `
    <div>
        <div class="product-item">
            <img src="${item.largeImage}" alt="">
            <h2>${item.name}</h2>
            <p>
                ${item.description}
            </p>
            <button id="${item.id}"> SHOP NOW </button>
            <p class="clear"></p>
        </div>
    </div>
    ` ).join("");

    grid.innerHTML = listOfProducts;
    
}

export const productOfSelectedCategory = (category) => {
   const thisCategoryProducts = products.filter( item => item.category === category )
    const categoryDiv = document.querySelector('#category-list')

}