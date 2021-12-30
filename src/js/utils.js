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