const Cart = (()=>{

const myCart = () => JSON.parse(localStorage.getItem('marketuze_cart')) || [];

const addToCart = (item) => {

   const shoppingCart = myCart();
   shoppingCart.push(item);

   const emptyCart = document.querySelectorAll('.empty-cart');
   if (emptyCart) {
       emptyCart.forEach( item => item.remove() );
   }

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

           <p class="cart-more-details ${item.id}-${item.number}">
               <i class="price"> ${item.price} </i>
               <i>&times; </i> 
               <i class="quantity"> ${item.quantity} </i> 
               <i>= </i> 
               <i class="item-total"> ${item.price * item.quantity} </i>
           </p>
        </div>
      `;

      cart.appendChild(cartItem);
   });

   localStorage.setItem('marketuze_cart', JSON.stringify(shoppingCart))
 }

 const addToCartView = (item) => {
   const emptyCart = document.querySelectorAll('.empty-cart');
   if (emptyCart) {
       emptyCart.forEach( item => item.remove() );
   }

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
           
           <p class="cart-more-details ${item.id}-${item.number}">
              <i class="price"> ${item.price} </i>
              <i>&times; </i> 
              <i class="quantity"> ${item.quantity} </i> 
              <i>= </i> 
              <i class="item-total"> ${item.price * item.quantity} </i>
           </p>
        </div>
      `;

      cart.appendChild(cartItem);
   });

 }

 const deleteFromCart = (productID) => {
    afterDelete = myCart().filter(item => item.id !== productID);
    localStorage.setItem('marketuze_cart', JSON.stringify(afterDelete))
 }

 const increaseItem = (id, number) => {
    console.log(id, number);
    const contentsInCart =  JSON.parse(localStorage.getItem('marketuze_cart'));
    contentsInCart.filter( item => item.id === id && Number(item.number) === number )[0].quantity += 1;
    localStorage.setItem('marketuze_cart', JSON.stringify(contentsInCart))
 }

 const decreaseItem = (product) => {
    //myCart[product].quantity -= 1;
    localStorage.setItem('marketuze_cart', JSON.stringify(myCart))
 }

const numberOfItem = myCart()?.reduce( (total, current) => {
   total += current.quantity;
   return total;
}, 0) || 0;

const cartTotal = myCart()?.reduce( (total, current) => {
   total += current.quantity * current.price;
   return total;
}, 0);

 return {
     addToCart,
     addToCartView,
     deleteFromCart,
     increaseItem,
     decreaseItem,
     numberOfItem,
     cartTotal,
 }
})();

export default Cart;