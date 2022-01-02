import products from '../data/products.js'

export const toggleUserInfo = (elements) => {
    // hide shopping baskets if open
    const shoppingBaskets = [
        'shopping-basket-desktop',
        'shopping-basket-mobile'
    ]
       
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

    // hide userInfo if open
    const userInfo = [
        'user-dropdown-desktop',
        'user-dropdown-mobile'
    ]

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
    const allCategories = new Set([...products.map( item => item.category)]);
    const desktopMenu = document.querySelector('#category-list ul');
    const mobileMenu = document.getElementById("mobile-menu");

    let listOfCategories = `<li>
        <a href="#All_products"> 
            <i> 
                <span class="rounded"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
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
        <a href="#All_products"> All products <span>${products.length}</span> </a>
    </div>`;

    for ( let value of allCategories.values() ) {
        listOfCategories+= `
        <li>
            <a href="#${value.replace(/ /gi, '_')}">
                <i>
                    <span class="rounded"> ${value[0]} </span>
                    <span>
                        <span class="name-of-product">${value}</span>
                        <span class="css-spapped-arrow"> ${products.filter( item => item.category === value).length} </span> 
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
            <a href="#${value.replace(/ /gi, '_')}"> <em> ${value} </em> <span> ${products.filter( item => item.category === value).length}</span> </a>
        </div>
        `
    }

    desktopMenu.innerHTML = listOfCategories;
    mobileMenu.innerHTML = listOfCategoriesMobile;
}

export const displayAllProducts = () => {
    const grid = document.getElementById('grid');
 
    const listOfProducts = products.map(item => `
    <div>
        <div class="product-item">
            <img src="${item.largeImage}" alt="">
            <h2><i>${item.name}</i></h2>
            <p>
                <i>${item.description}</i>
            </p>
            <button id="${item.id}"> SHOP NOW </button>
            <p class="clear"></p>
        </div>
    </div>
    ` ).join("");

    grid.innerHTML = listOfProducts;
    
}

export const getProductOfSelectedCategory = (category) => {
   const productsOfCategory = products.filter( item => item.category === category )
   const grid = document.getElementById('grid');

   const listOfProducts = productsOfCategory.map(item => `
   <div>
       <div class="product-item">
           <img src="${item.largeImage}" alt="">
         
           <p>
           <h2> <i> ${item.name} </i> </h2>
                <i> ${item.description} </i>
           </p>
           <button id="${item.id}"> SHOP NOW </button>
           <p class="clear"></p>
       </div>
   </div>
   ` ).join("");

   grid.innerHTML = listOfProducts;
}

export const indicateCurrentCategory = (element, hash) => {
    document.querySelectorAll(`${element} li`).forEach( item => item.style.backgroundColor = 'white' )
   //document.querySelector(`${element} a[href="${hash}"] .current-category`).style.display = 'inline-block';
    //document.querySelector(`${element} li`).style.backgroundColor = 'white';
    document.querySelector(`${element} a[href="${hash}"]`).parentElement.style.backgroundColor = 'whitesmoke';
}