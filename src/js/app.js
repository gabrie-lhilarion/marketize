import { 
    toggleUserInfo, 
    toggleShoppingCarts,
    displayCategories,
    displayAllProducts,
    getProductOfSelectedCategory,
    indicateCurrentCategory

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
    }

    return {
        display,
    }
})()

export default App;
