const Cart = (()=>{

 const myCart = JSON.parse(localStorage.getItem('marketuze_cart')) || [];

 const addToCart = (item) => {
    myCart.push(item);
    const carts = document.querySelectorAll('#cart-items-mobile, #cart-items-desktop');
    carts.forEach( cart => {
       const cartItem = document.createElement('li');
       cartItem.classList.add('cart-item');
       cartItem.innerHTML = `
   
         <div class="item-image">
            <img src="${item.image}" alt="prd-image">
         </div>
         <div class="cart-item-details">
            <p class="cart-product-name">
               <i> ${item.name} </i>
            </p> 
            
            <p class="cart-more-details">
               <i> ${item.price} </i>
               <i>&times; </i> 
               <i> ${item.quantity} </i> 
               <i>= </i> 
               <i> ${item.price} </i>
            </p>
         </div>
       `;

       cart.appendChild(cartItem);
    });


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

export default Cart;