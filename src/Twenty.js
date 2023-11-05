import React from 'react'
import { useCart } from './CartContext'

export default function Twenty() {
  
  const {cartState,cartDispatch}= useCart();

  const addToCart = (item) => {
    const existingCartItem = cartState.cartItems.find((cartItem)=> cartItem.id === item.id);

    if(existingCartItem){
      cartDispatch({type:'UPDATE_QUANTITY',payload:{id:item.id,quantity:existingCartItem.quantity+1}})
    }
    else{
      cartDispatch({type:'ADD_TO_CART',payload:{...item,quantity:1}})
    }   
  }


  const updateQuantity =(itemId,quantity) => {
    if(quantity>0){
      cartDispatch({type:'UPDATE_QUANTITY',payload:{id:itemId,quantity}});
    }
  };


  const removeFromCart = (itemId) => {
    cartDispatch({type:'REMOVE_FROM_CART',payload:itemId})
  };



  const products = [
    {id:1,name:'Product A'},
    {id:2,name:'Product B'},
    {id:3,name:'Product C'}
  ]
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartState.cartItems.map((item)=> (
        <li key={item.id}>
          {item.name} - {item.quantity} 
          <button onClick={()=> updateQuantity(item.id,item.quantity +1 )}>+</button>
          <button onClick={()=> updateQuantity(item.id,item.quantity -1 )}>-</button>
          <button onClick={()=> removeFromCart(item.id)}>Remove</button>
        </li>
      ))}
      <h2>Product List</h2>
      <ul>{
      products.map((product)=> (
        <li key={product.id}>
          {product.name} <button onClick={()=>addToCart(product)}> Add To Cart </button>
        </li>
      ))}
        </ul>
    </div>
  )
}

