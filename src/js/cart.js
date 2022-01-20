const Cart = (()=>{

const myCart = () => JSON.parse(localStorage.getItem('marketuze_cart')) || [];

const emptyCartInfo = `
   <div class="empty-cart">
      SHOPPING CART IS EMPTY
   </div>
`;

const addToCart = (item) => {

   const shoppingCart = myCart();
   shoppingCart.push(item);

   const emptyCart = document.querySelectorAll('.empty-cart');
   if (emptyCart) {
       emptyCart.forEach( item => item.remove() );
   }

   const shoppingBaskets = document.querySelectorAll('#cart-items-mobile, #cart-items-desktop');
   shoppingBaskets.forEach( basket => {
      const cartItem = document.createElement('li');
      cartItem.id = item.cartId;
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <div class="item-image">
           <img src="${item.image}" alt="prd-image">
        </div>
        <div class="cart-item-details">
           <p class="cart-product-name">
              <i> ${item.name} </i>
           </p> 

           <p id="${item.cartId}" class="cart-more-details ${item.productId}-${item.number}">
               <i class="price"> ${item.price} </i>
               <i>&times; </i> 
               <i class="quantity"> ${item.quantity} </i> 
               <i>= </i> 
               <i class="item-total"> ${item.price * item.quantity} </i>
           </p>
        </div>
      `;

      basket.appendChild(cartItem);
   });

   localStorage.setItem('marketuze_cart', JSON.stringify(shoppingCart))
 }

 // ths should be basket
 const addToCartView = (item) => {
   const emptyCart = document.querySelectorAll('.empty-cart');// class should be renamed empty-basket
   if (emptyCart) {
       emptyCart.forEach( item => item.remove() );
   }

   const carts = document.querySelectorAll('#cart-items-mobile, #cart-items-desktop'); // carts should be renamed baskets
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
           
           <p class="cart-more-details ${item.productId}-${item.number}">
              <i class="price"> ${item.price} </i>
              <i>&times; </i> 
              <i class="quantity"> ${item.quantity} </i> 
              <i>= </i> 
              <i class="item-total"> ${item.price * item.quantity} </i>
           </p>
        </div>
      `;
      
      const itemIsAlreadyInCart = document.querySelector(`.${item.productId}-${item.number}`);
      //  itemIsAlreadyInCart should be  itemIsAlreadyInBasket
      if (!itemIsAlreadyInCart) {
         cart.appendChild(cartItem);
      }
      
   });

 }

 const deleteFromCart = (cartId) => {
   const afterDelete = myCart().filter(item => item.cartId !== cartId);
   localStorage.setItem('marketuze_cart', JSON.stringify(afterDelete))
 }

 const increaseItem = (id, number) => {
    const itemsInCart =  JSON.parse(localStorage.getItem('marketuze_cart'));
    itemsInCart.filter( item => item.productId === id && Number(item.number) === number )[0].quantity += 1;
    localStorage.setItem('marketuze_cart', JSON.stringify(itemsInCart))
 }

 const decreaseItem = (id, number) => {
    const itemsInCart =  JSON.parse(localStorage.getItem('marketuze_cart'));
    itemsInCart.filter( item => item.productId === id && Number(item.number) === number )[0].quantity -= 1;
    localStorage.setItem('marketuze_cart', JSON.stringify(itemsInCart))
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
     myCart,
     addToCart,
     addToCartView,
     deleteFromCart,
     increaseItem,
     decreaseItem,
     numberOfItem,
     cartTotal,
     emptyCartInfo,
 }
})();

export default Cart;