import { 
    toggleUserInfo, 
    toggleShoppingCarts,
    displayCategories,
    displayAllProducts,
    getProductOfSelectedCategory,

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
        
        const everyProduct = String(window.location.hash).replace(/#/, '').replace(/_/gi, ' ')
        if (!window.location.hash || everyProduct.toLocaleLowerCase() === "all products") {
            displayAllProducts();
            salvattore.rescanMediaQueries();
        } else {
            const thisCategory = window.location.hash.replace(/#/, '').replace(/_/gi, ' ');
            getProductOfSelectedCategory(thisCategory);
            salvattore.rescanMediaQueries();
        }

        window.addEventListener('hashchange', function() {
            const thisCategory = window.location.hash.replace(/#/, '').replace(/_/gi, ' ');
            
            if (!window.location.hash || String(thisCategory).trim().toLocaleLowerCase() === "all products") {
                
                displayAllProducts();
                salvattore.rescanMediaQueries();
                return
            } else {
                
                getProductOfSelectedCategory(thisCategory);
                salvattore.rescanMediaQueries();            
            }

        }, false);
    }

    return {
        display,
    }
})()

export default App;
