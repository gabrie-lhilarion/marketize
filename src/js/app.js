import { 
    toggleUserInfo, 
    toggleShoppingCarts,
    displayCategories,
    displayAllProducts,
    getProductOfSelectedCategory,
    indicateCurrentCategory,
    adjustWidthOfElements,
    shopNow,

} from './utils.js';

import { 
    shoppingCartIcons, 
    userIcons,
    categoryLinks,

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

        // display: flex, is doing a bad job here, with the overflow-x
        // so I had to decide the with of every elment with script!
        adjustWidthOfElements("#mobile-menu");
        
        const allProduct = String(window.location.hash).replace(/#/, '').replace(/_/gi, ' ')
        if (!window.location.hash || allProduct.toLocaleLowerCase() === "all products") {
            displayAllProducts();
            salvattore.rescanMediaQueries();

            const currentHash = window.location.hash;
            indicateCurrentCategory("#category-list", currentHash);
        } else {
            const thisCategory = window.location.hash.replace(/#/, '').replace(/_/gi, ' ');
            getProductOfSelectedCategory(thisCategory);
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
                
                getProductOfSelectedCategory(thisCategory);
                salvattore.rescanMediaQueries();

                indicateCurrentCategory("#category-list", currentHash);        
            }

        }, false);

        const shopNowButtons = document.querySelectorAll('.shop-now');
        console.log(shopNowButtons)
        shopNowButtons.forEach( button => button.addEventListener('click', (e) => shopNow(e)) )
    }

    return {
        display,
    }
})()

export default App;
