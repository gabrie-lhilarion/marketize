export const cart = (()=>{

 const myCart = JSON.parse(localStorage.getItem('marketuze_cart')) || [];

 const addToCart = (product) => {
    myCart.push(product);
    localStorage.setItem('marketuze_cart', JSON.stringify(myCart))
 }

 const deleteFromCart = (productID) => {
    afterDelete = myCart.filter(item => item.id !== productID);
    localStorage.setItem('marketuze_cart', JSON.stringify(afterDelete))
 }

 const increaseItem = (product) => {
    myCart[product].quantity += 1;
    localStorage.setItem('marketuze_cart', JSON.stringify(myCart))
 }

 const decreaseItem = (product) => {
    myCart[product].quantity -= 1;
    localStorage.setItem('marketuze_cart', JSON.stringify(myCart))
 }

 const grandTotal = (cart) => cart.reduce( (total, current) => total + current, 0) 

 return {
     myCart,
     addToCart,
     deleteFromCart,
     increaseItem,
     decreaseItem,
     grandTotal,
 }
})();