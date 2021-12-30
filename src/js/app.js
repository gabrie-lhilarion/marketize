import { 
    toggleUserInfo, 
    toggleShoppingCarts,
    displayCategories,
    displayAllProducts,

} from './utils.js';

import { 
    shoppingCartIcons, 
    userIcons,

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
        displayAllProducts();
        salvattore.rescanMediaQueries()
    }

    return {
        display,
    }
})()

export default App;
