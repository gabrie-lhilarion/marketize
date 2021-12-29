import { toggleUserInfo } from './utils.js';
import { shoppingCartIcons, userIcons } from './dom.js';


const App = (() => {

    const display = () => {
        const targetElements = [
            'chevron-down', 
            'chevron-up', 
            'user-dropdown-desktop'
        ];
        userIcons.forEach( 
            (icon ) => icon.addEventListener("click", () => toggleUserInfo(targetElements) )
        );

        shoppingCartIcons.forEach( 
            icon => icon.addEventListener("click", () => toggleShoppingCart() )
        )
    }

    return {
        display,
    }
})()

export default App;
