import { 
    toggleUserInfo, 
    toggleShoppingCarts,
    displayCategories,
    displayAllProducts,
    displayProductsOfCategory,
    indicateCurrentCategory,
    adjustWidthOfElements,
    createAddToCartBtn,
    createPlusMinusBtn,
    syncSessionDataToDom,
    plusItem,
    minusItem,
    itemsInCartApp,

} from './utils.js';

import { 
    shoppingCartIcons, 
    userIcons,
    grid,

} from './dom.js';

import  salvattore from './salvattore.js';

const App = (() => {

    const display = () => {
       
        const elements = [
            'chevron-down', 
            'chevron-up',
            'chevron-down-mobile', 
            'chevron-up-mobile', 
            'user-dropdown-desktop',
            'user-dropdown-mobile'
        ];

        userIcons.forEach( 
            icon => icon.addEventListener("click", () => toggleUserInfo(elements) )
        );

        const shoppingBaskets = [
            'shopping-basket-desktop',
            'shopping-basket-mobile'
        ]

        shoppingCartIcons.forEach( 
            icon => icon.addEventListener("click", () => toggleShoppingCarts(shoppingBaskets) )
        )
        
        displayCategories();
        
        adjustWidthOfElements("#mobile-menu");
        
        const allProduct = String(window.location.hash).replace(/#/, '').replace(/_/gi, ' ')
        if (!window.location.hash || allProduct.toLocaleLowerCase() === "all products") {
            displayAllProducts();
            salvattore.rescanMediaQueries();

            const currentHash = window.location.hash;
            indicateCurrentCategory("#category-list", currentHash);
        } else {
            const thisCategory = window.location.hash.replace(/#/, '').replace(/_/gi, ' ');
            displayProductsOfCategory(thisCategory);
            salvattore.rescanMediaQueries();

            const currentHash = window.location.hash;
            indicateCurrentCategory("#category-list", currentHash);
        }

        window.addEventListener('hashchange', function() {
            const thisCategory = window.location.hash.replace(/#/, '').replace(/_/gi, ' ');
            const currentHash = window.location.hash;
            
            if (!window.location.hash || String(thisCategory).trim().toLocaleLowerCase() === "all products") {
                
                displayAllProducts();
                salvattore.rescanMediaQueries();
                
                indicateCurrentCategory("#category-list", currentHash);

                
            } else {
                
                displayProductsOfCategory(thisCategory);
                salvattore.rescanMediaQueries();

                indicateCurrentCategory("#category-list", currentHash);   
                
                
            }

            const shopNowButtons = document.querySelectorAll('.shop-now');
            shopNowButtons.forEach( button => button.addEventListener('click', (e) => createAddToCartBtn(e)) );

            const sessionData = JSON.parse(localStorage.getItem('marketuze_cart')) || [];
            syncSessionDataToDom(sessionData); 

            const cartTotalContainers = document.querySelectorAll('.total-in-cart');
            cartTotalContainers.forEach( container => container.textContent = itemsInCartApp() );

        }, false);

        const shopNowButtons = document.querySelectorAll('.shop-now');
        shopNowButtons.forEach( button => button.addEventListener('click', (e) => shopNow(e)) );

        grid.addEventListener('click', (e) => { 
            if (e.target.classList.contains('add-to-cart')) {
                createPlusMinusBtn(e);
            }
       
            if (e.target.classList.contains('plus')) {
                plusItem(e);
            }

            if (e.target.classList.contains('minus')) {
                minusItem(e);
            }
        } );

        const sessionData = JSON.parse(localStorage.getItem('marketuze_cart')) || [];
        syncSessionDataToDom(sessionData); 

        
    }

    return {
        display,
    }
})()

export default App;
