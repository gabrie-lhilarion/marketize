export const toggleUserInfo = (args) => {
    args.forEach( (item) => {
        const thisSelector = document.getElementById(`${item}`);
        thisSelector.classList.toggle('hidden')
    })

}

// export const toggleShoppingCart = () => {
//     shoppingCartIcons.forEach( (icon) => icon.addEventListener(
//         "click",

//     ) )
// }