
export  const shoppingData = () => JSON.parse(localStorage.getItem('marketuze_cart')) || [];

export  const emptyBasketInfo = `
   <div class="empty-cart">
      SHOPPING BASKET IS EMPTY
   </div>
`;

export const addToSession = (item) => {

   const sessionData =  shoppingData();
   sessionData.push(item);

   const emptyBaskets = document.querySelectorAll('.empty-cart');
   if (emptyBaskets) {
      emptyBaskets.forEach( emptyBasket => emptyBasket.remove() );
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

   localStorage.setItem('marketuze_cart', JSON.stringify(sessionData))
 }


 export const addToShoppingBascket = (item) => {
   const emptyBasket = document.querySelectorAll('.empty-cart');
   if (emptyBasket) {
      emptyBasket.forEach( item => item.remove() );
   }

   const baskets = document.querySelectorAll('#cart-items-mobile, #cart-items-desktop'); 
   baskets.forEach( basket => {
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
      
      const itemIsAlreadyInBasket = document.querySelector(`.${item.productId}-${item.number}`);
      if (!itemIsAlreadyInBasket) {
         basket.appendChild(cartItem);
      }
      
   });

 }

export const deleteFromSession = (cartId) => {
   const afterDelete = shoppingData().filter(item => item.cartId !== cartId);
   localStorage.setItem('marketuze_cart', JSON.stringify(afterDelete))
}

export const increaseItem = (id, number) => {
   const itemsInCart =  JSON.parse(localStorage.getItem('marketuze_cart'));
   itemsInCart.filter( item => item.productId === id && Number(item.number) === number )[0].quantity += 1;
   localStorage.setItem('marketuze_cart', JSON.stringify(itemsInCart))
}

export const decreaseItem = (id, number) => {
   const itemsInCart =  JSON.parse(localStorage.getItem('marketuze_cart'));
   itemsInCart.filter( item => item.productId === id && Number(item.number) === number )[0].quantity -= 1;
   localStorage.setItem('marketuze_cart', JSON.stringify(itemsInCart))
}

export const numberOfItems = () => shoppingData()?.reduce( (total, current) => {
   total += current.quantity;
   return total;
}, 0) || 0;

export const cartTotal = () => shoppingData()?.reduce( (total, current) => {
   total += current.quantity * current.price;
   return total;
}, 0) || 0;
